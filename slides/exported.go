package main

// unexported
var name string

// exported
var Title string

// unexported
func getTitle() string {
	return Title
}

// exported
func GetName() string {
	return name
}
