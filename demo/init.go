package bookie

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/unrolled/render"

	"appengine"
	"appengine/datastore"
)

// Book ...
type Book struct {
	Key       *datastore.Key `json:"-"`
	ID        int64          `json:"id"`
	Title     string         `json:"title"`
	Author    string         `json:"author"`
	DateAdded time.Time      `json:"date_added,omitempty"`
}

func middle(w http.ResponseWriter, req *http.Request, next http.HandlerFunc) {
	if origin := req.Header.Get("Origin"); origin != "" {
		w.Header().Set("Access-Control-Allow-Origin", origin)
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Expose-Headers", "Link, X-Total-Items")
		w.Header().Set("Access-Control-Allow-Headers",
			"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	}
	//stop here if its Preflighted OPTIONS request
	if req.Method == "OPTIONS" {
		return
	}
	next(w, req)
}

func all(w http.ResponseWriter, req *http.Request) {
	var books []Book

	c := appengine.NewContext(req)
	r := render.New(render.Options{})

	t := datastore.NewQuery("books").Run(c)
	for {
		var book Book
		k, err := t.Next(&book)
		if err != nil {
			break
		}

		book.ID = k.IntID()
		books = append(books, book)
	}

	r.JSON(w, http.StatusOK, books)
}

func get(w http.ResponseWriter, req *http.Request) {
	c := appengine.NewContext(req)
	r := render.New(render.Options{})
	var book Book

	vars := mux.Vars(req)

	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	k := datastore.NewKey(c, "books", "", int64(id), nil)
	if err := datastore.Get(c, k, &book); err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	book.ID = k.IntID()

	r.JSON(w, http.StatusOK, book)
}

func insert(w http.ResponseWriter, req *http.Request) {
	var book Book

	c := appengine.NewContext(req)
	r := render.New(render.Options{})

	defer req.Body.Close()
	err := json.NewDecoder(req.Body).Decode(&book)
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	book.DateAdded = time.Now()

	key, err := datastore.Put(c, datastore.NewIncompleteKey(c, "books", nil), &book)
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}
	book.ID = key.IntID()

	r.JSON(w, http.StatusOK, book)
}

func edit(w http.ResponseWriter, req *http.Request) {
	c := appengine.NewContext(req)
	r := render.New(render.Options{})
	var book Book

	err := json.NewDecoder(req.Body).Decode(&book)
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	vars := mux.Vars(req)

	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	k := datastore.NewKey(c, "books", "", int64(id), nil)
	key, err := datastore.Put(c, k, &book)
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}
	book.Key = key

	r.JSON(w, http.StatusOK, book)
}

func del(w http.ResponseWriter, req *http.Request) {
	c := appengine.NewContext(req)
	r := render.New(render.Options{})

	vars := mux.Vars(req)

	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	k := datastore.NewKey(c, "books", "", int64(id), nil)
	if err := datastore.Delete(c, k); err != nil {
		r.Data(w, http.StatusInternalServerError, []byte(err.Error()))
		return
	}

	r.Data(w, http.StatusOK, []byte("success"))
	return
}

func root(w http.ResponseWriter, req *http.Request) {
	r := render.New(render.Options{
		Directory:     "dist",            // Specify what path to load the templates from.
		Extensions:    []string{".html"}, // Specify extensions to load for templates.
		IsDevelopment: true,              // Render will now recompile the templates on every HTML response.
	})
	r.HTML(w, 200, "index", nil)
}

func init() {

	mux := mux.NewRouter()

	mux.HandleFunc("/", root).Methods("GET")
	mux.Path("/api/books").HandlerFunc(all).Methods("GET")
	mux.HandleFunc("/api/books", all).Methods("GET")
	mux.HandleFunc("/api/books/{id}", get).Methods("GET")
	mux.HandleFunc("/api/books", insert).Methods("POST")
	mux.HandleFunc("/api/books/{id}", edit).Methods("PUT")
	mux.HandleFunc("/api/books/{id}", del).Methods("DELETE")

	n := negroni.Classic()

	n.Use(negroni.HandlerFunc(middle))

	n.UseHandler(mux)
	http.Handle("/", n)
}
