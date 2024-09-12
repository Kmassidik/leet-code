function countConsistentStrings(allowed, words) {
    // Use an object to simulate a Set for allowed characters
    var allowedSet = {};
    for (var _i = 0, allowed_1 = allowed; _i < allowed_1.length; _i++) {
        var ch = allowed_1[_i];
        allowedSet[ch] = true;
    }
    var count = 0;
    for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
        var word = words_1[_a];
        var consistent = true;
        for (var _b = 0, word_1 = word; _b < word_1.length; _b++) {
            var ch = word_1[_b];
            if (!allowedSet[ch]) {
                consistent = false;
                break;
            }
        }
        if (consistent) {
            count++;
        }
    }
    return count;
}
// Test case 1
var allowed = "ab";
var words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words)); // Output: 2
// Test case 2
allowed = "abc";
words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
console.log(countConsistentStrings(allowed, words)); // Output: 7
// Test case 3
allowed = "cad";
words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
console.log(countConsistentStrings(allowed, words)); // Output: 4
