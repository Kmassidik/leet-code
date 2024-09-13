function xorQueries(arr: number[], queries: number[][]): number[] {
  const n = arr.length;

  // Step 1: Create a prefix XOR array
  const prefixXor: number[] = new Array(n + 1).fill(0); // prefixXor[0] = 0
  for (let i = 0; i < n; i++) {
    prefixXor[i + 1] = prefixXor[i] ^ arr[i];
  }

  // Step 2: Process each query
  const result: number[] = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i];
    result[i] = prefixXor[right + 1] ^ prefixXor[left];
  }

  return result;
}

// Example test cases
const arr = [1, 3, 4, 8];
const queries = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 3],
];

const arr2 = [4, 8, 2, 10];
const queries2 = [
  [2, 3],
  [1, 3],
  [0, 0],
  [0, 3],
];

const result = xorQueries(arr, queries);
console.log(result); // Output: [2, 7, 14, 8]

const result2 = xorQueries(arr2, queries2);
console.log(result2); // Output: [8,0,4,4]
