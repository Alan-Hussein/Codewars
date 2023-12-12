// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!



function squareDigits(num) {
  const digits = Array.from(String(num), Number);

  // Square each digit and concatenate the results.
  const squaredDigits = digits.map((digit) => digit ** 2);
  // Join the array of squared digits into a string and parse it as an integer in base 10.
  const result = parseInt(squaredDigits.join(""), 10);

  return result;
}

console.log(squareDigits(9119)); // Output: 811181
console.log(squareDigits(765)); // Output: 493625
