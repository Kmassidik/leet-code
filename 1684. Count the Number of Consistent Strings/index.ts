function countConsistentStrings(allowed: string, words: string[]): number {
  // Use an object to simulate a Set for allowed characters
  const allowedSet: { [key: string]: boolean } = {};
  for (const ch of allowed) {
    allowedSet[ch] = true;
  }

  let count = 0;

  for (const word of words) {
    let consistent = true;

    for (const ch of word) {
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
let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words)); // Output: 2

// Test case 2
allowed = "abc";
words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
console.log(countConsistentStrings(allowed, words)); // Output: 7

// Test case 3
allowed = "cad";
words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
console.log(countConsistentStrings(allowed, words)); // Output: 4
