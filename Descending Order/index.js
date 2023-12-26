// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//  Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  // Convert the number to an array of digits
  const digits = n.toString().split("").map(Number);

  // Sort the digits in descending order
  const sortedDigits = digits.sort((a, b) => b - a);

  // Convert the sorted digits back to a number
  const result = parseInt(sortedDigits.join(""));

  return result;
}

// Test the function
console.log(descendingOrder(42145)); // Output: 54421
console.log(descendingOrder(145263)); // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321
