package main

import (
	"fmt"
)

func countConsistentStrings(allowed string, words []string) int {
	// Create a map to store allowed characters for faster lookup
	allowedSet := make(map[rune]bool)
	for _, ch := range allowed {
		allowedSet[ch] = true
	}

	count := 0
	// Check each word
	for _, word := range words {
		consistent := true
		// Check if the word contains only allowed characters
		for _, ch := range word {
			if !allowedSet[ch] {
				consistent = false
				break
			}
		}
		if consistent {
			count++
		}
	}

	return count
}

func main() {
	// Test case 1
	allowed := "ab"
	words := []string{"ad", "bd", "aaab", "baa", "badab"}
	result := countConsistentStrings(allowed, words)
	fmt.Println(result) // Output: 2

	// Test case 2
	allowed = "abc"
	words = []string{"a", "b", "c", "ab", "ac", "bc", "abc"}
	result2 := countConsistentStrings(allowed, words)
	fmt.Println(result2) // Output: 7

	// Test case 3
	allowed = "cad"
	words = []string{"cc", "acd", "b", "ba", "bac", "bad", "ac", "d"}
	result3 := countConsistentStrings(allowed, words)
	fmt.Println(result3) // Output: 4
}
