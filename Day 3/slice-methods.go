package main

import "fmt"

func main() {
	slice := []int{3, 6, 9}
	fmt.Println("Before Appending new elements, Slice:", slice)
	//Append data
	slice = append(slice, 12)
	slice = append(slice, 15, 18)

	fmt.Println("After Appending new elements, Slice:", slice)
	//Length of Slice
	fmt.Println("Length of Slice:", len(slice))
	//Copy the Slice
	new_slice := make([]int, 6)
	copy_slice := copy(new_slice, slice) // Method for copying slice elements(source, destination)

	fmt.Println("Existing Slice elements are: ", slice)
	fmt.Println("Newly copied Slice elements are: ", new_slice)

	fmt.Println("Number of elements copied: ", copy_slice)

	//Clear all elements
	new_slice = nil
	fmt.Println("The New slice is empty: ", new_slice)
}
