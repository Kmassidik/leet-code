package main

import "fmt"

func twoSum(nums []int, target int) []int {
	numToIndex := make(map[int]int)

	for i, num := range nums {
		complement := target - num
		if index, ok := numToIndex[complement]; ok {
			return []int{index, i}
		}
		numToIndex[num] = i
	}

	return nil // return nil if no match is found
}

func main() {
	// Call twoSum three times with different inputs
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) // Output: [0, 1]
	fmt.Println(twoSum([]int{3, 2, 4}, 6))      // Output: [1, 2]
	fmt.Println(twoSum([]int{3, 3}, 6))         // Output: [0, 1]
}
