type Adder interface {
	Add(int) int
}

type SumInt struct {
	Value int
}

func (sInt *SumInt) Add(i int) int {
	sInt.Value = sInt.Value + i

	return sInt.Value
}
