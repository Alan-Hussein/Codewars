// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.

//  Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  // Check if the input is a perfect square.
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    // If it's a perfect square, return the next one.
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

// Examples
console.log(findNextSquare(121)); // Output: 144
console.log(findNextSquare(625)); // Output: 676
console.log(findNextSquare(114)); // Output: -1
