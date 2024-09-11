function isValid(s) {
    // Stack to keep track of opening brackets
    var stack = [];
    // Hash map to store mappings of opening and closing brackets
    var bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    // Loop through each character in the string
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        // If the character is an opening bracket, push it onto the stack
        if (bracketMap[char]) {
            stack.push(char);
        }
        else {
            // If it's a closing bracket, check if it matches the top of the stack
            var top_1 = stack.pop();
            if (bracketMap[top_1] !== char) {
                return false;
            }
        }
    }
    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}
// Example usage:
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([])")); // Output: true
