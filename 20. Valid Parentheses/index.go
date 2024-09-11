package main

import (
	"fmt"
)

func isValid(s string) bool {
	// Stack to keep track of opening brackets
	stack := []rune{}

	// Map to store mappings of opening and closing brackets
	bracketMap := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}

	// Loop through each character in the string
	for _, char := range s {
		// If the character is an opening bracket, push it onto the stack
		if closing, ok := bracketMap[char]; ok {
			stack = append(stack, closing)
		} else {
			// If it's a closing bracket, check if it matches the top of the stack
			if len(stack) == 0 || stack[len(stack)-1] != char {
				return false
			}
			// Pop the top of the stack
			stack = stack[:len(stack)-1]
		}
	}

	// If the stack is empty, all brackets were matched
	return len(stack) == 0
}

func main() {
	fmt.Println(isValid("()"))     // Output: true
	fmt.Println(isValid("()[]{}")) // Output: true
	fmt.Println(isValid("(]"))     // Output: false
	fmt.Println(isValid("([])"))   // Output: true
}
