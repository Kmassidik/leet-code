package main

import "fmt"

func minBitFlips(start int, goal int) int {
	xorResult := start ^ goal

	count := 0
	for xorResult > 0 {
		count += xorResult & 1
		xorResult >>= 1
	}

	return count
}

func main() {
	fmt.Println(minBitFlips(10, 7)) // output 3
	fmt.Println(minBitFlips(3, 4))  // output 3
}
