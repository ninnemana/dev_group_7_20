package main

import (
	"log"
	"math/rand"
	"time"
)

func runner() {
	time.Sleep(time.Duration(rand.Intn(10) * time.Millisecond))
	log.Println("ran")
}

func main() {
	for index := 0; index < 10; index++ {
		go runner()
	}

}
