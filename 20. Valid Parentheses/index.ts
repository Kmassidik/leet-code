function isValid(s: string): boolean {
    // Stack to keep track of opening brackets
    const stack: string[] = [];
    
    // Hash map to store mappings of opening and closing brackets
    const bracketMap: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Loop through each character in the string
    for (let char of s) {
        // If the character is an opening bracket, push it onto the stack
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            const top: string | undefined = stack.pop();
            if (bracketMap[top!] !== char) {
                return false;
            }
        }
    }
    
    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([])"));     // Output: true
