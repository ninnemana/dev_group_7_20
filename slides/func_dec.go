package main

var Book string

func CheckBook() bool {
	if Book == "" {
		return false
	}

	return true
}

func SetBook(b string) {
	Book = b
}
