// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  size = Math.max(0, Math.floor(size));  // Ensure size is a positive integer


  let result = "";
  for (let i = 0; i < size; i++) {
    result += i % 2 === 0 ? "1" : "0";
  }

  return result;
}

console.log(stringy(4)); // Output: '1010'
console.log(stringy(12)); // Output: '101010101010'
