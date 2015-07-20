package main

import "fmt"

var book string

func setBook(b string) (string, error) {
	if b == "" {
		return "", fmt.Errorf("%s", "book cannot be black")
	}
	book = b

	return book, nil
}

func main() {
	_, err := setBook("")
	fmt.Println(err)

	_, err = setBook("Harry Potter")
	fmt.Println(err, "book was updated")
}
