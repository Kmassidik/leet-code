const isPalindrome = function (x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;

    // Convert the number to a string
    const str = x.toString();

    // Reverse the string and check if it matches the original
    return str === str.split('').reverse().join('');
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
