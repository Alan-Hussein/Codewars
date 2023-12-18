// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
    return "Invalid input for n";
  }

  return s.repeat(n);
}

console.log(repeatStr(6, "I")); // Output: "IIIIII"
console.log(repeatStr(5, "Hello")); // Output: "HelloHelloHelloHelloHello"
console.log(repeatStr(-3, "Invalid")); // Output: "Invalid input for n"
