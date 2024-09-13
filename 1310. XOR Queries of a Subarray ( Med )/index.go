package main

import "fmt"

func xorQueries(arr []int, queries [][]int) []int {
	n := len(arr)

	// Step 1: Create a prefix XOR array
	prefixXor := make([]int, n+1) // prefixXor[0] = 0, prefixXor[i] = XOR of arr[0] to arr[i-1]
	for i := 0; i < n; i++ {
		prefixXor[i+1] = prefixXor[i] ^ arr[i]
	}

	// Step 2: Process each query
	result := make([]int, len(queries))
	for i, query := range queries {
		left, right := query[0], query[1]
		result[i] = prefixXor[right+1] ^ prefixXor[left]
	}

	return result
}

func main() {
	// Example test cases
	arr := []int{1, 3, 4, 8}
	queries := [][]int{
		{0, 1},
		{1, 2},
		{0, 3},
		{3, 3},
	}

	result := xorQueries(arr, queries)
	fmt.Println(result) // Output: [2, 7, 14, 8]

	arr = []int{4, 8, 2, 10}
	queries = [][]int{
		{2, 3},
		{1, 2},
		{0, 0},
		{0, 2},
	}

	result2 := xorQueries(arr, queries)
	fmt.Println(result2) // Output: [8,0,4,4]
}
