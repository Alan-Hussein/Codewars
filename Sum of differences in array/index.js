// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Calculate the sum of differences between consecutive pairs
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }

  return sum;
}

console.log(sumOfDifferences([2, 1, 10])); // Output: 9
console.log(sumOfDifferences([])); // Output: 0
console.log(sumOfDifferences([5])); // Output: 0
console.log(sumOfDifferences([10, 5, 2])); // Output: 8
