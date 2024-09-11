function minBitFlips(start: number, goal: number): number {
  // XOR the two numbers to find differing bits
  let xorResult = start ^ goal;

  // Count the number of set bits (1s) in the XOR result
  let count = 0;
  while (xorResult > 0) {
    count += xorResult & 1; // Add 1 if the rightmost bit is set
    xorResult >>= 1; // Shift the XOR result to the right
  }

  return count;
}

console.log(minBitFlips(10, 7)); // Output: 3
console.log(minBitFlips(3, 4)); // Output: 3
