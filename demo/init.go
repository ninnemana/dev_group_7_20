package bookie

import (
	"net/http"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/unrolled/render"
)

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

	mux.HandleFunc("/", root)
	n := negroni.Classic()

	n.UseHandler(mux)
	http.Handle("/", n)
}
