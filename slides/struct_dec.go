import "time"

type Animal struct {
	Name      string
	Color     string
	BirthDate time.Time
}

type Dog struct {
	Animal
}
