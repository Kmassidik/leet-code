package main

import "fmt"

func romanToInt(s string) int {
	roman := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	sum := 0
	n := len(s)

	for i := 0; i < n; i++ {
		// If current value is smaller than the next value, subtract it
		if i+1 < n && roman[s[i]] < roman[s[i+1]] {
			sum -= roman[s[i]]
		} else {
			sum += roman[s[i]]
		}
	}

	return sum
}

func main() {
	fmt.Println(romanToInt("III"))     // Output: 3
	fmt.Println(romanToInt("LVIII"))   // Output: 58
	fmt.Println(romanToInt("MCMXCIV")) // Output: 1994
}
