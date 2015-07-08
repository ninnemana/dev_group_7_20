package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		msg := fmt.Sprintf("Hello from %d\n", time.Now().Year())

		io.WriteString(w, msg)
	})

	fmt.Println(http.ListenAndServe(":8080", nil))

}
