package main

import "fmt"

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	// Take the first string as the prefix reference
	prefix := strs[0]

	// Compare the prefix with each string in the array
	for _, str := range strs[1:] {
		for len(prefix) > 0 && len(str) < len(prefix) || str[:len(prefix)] != prefix {
			prefix = prefix[:len(prefix)-1] // Shorten the prefix if mismatch found
		}
		if prefix == "" {
			return ""
		}
	}

	return prefix
}

func main() {
	// Test cases
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"})) // Output: "fl"
	fmt.Println(longestCommonPrefix([]string{"dog", "racecar", "car"}))    // Output: ""
}
