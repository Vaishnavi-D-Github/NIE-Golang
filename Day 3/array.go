package main

import "fmt"

func main() {
	var arr = [5]int{2, 4, 6, 8, 10}
	fmt.Println("Array: ", arr)

	slice := []int{5, 10, 15, 20}
	fmt.Println("Slice contains: ", slice)
}
