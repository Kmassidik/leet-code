const romanToInt = function(s) {
    let sum = 0;
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length; i++) {
        // Check if the current value is smaller than the next value
        if (i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]) {
            sum -= roman[s[i]];
        } else {
            sum += roman[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("LVIII"));   // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
