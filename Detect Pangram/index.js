// Instructions:

// A pangram is a sentence that contains every single letter of the alphabet at least once.

// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,

// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.

// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str) {
  str = str.toLowerCase(); //convert all letters to lower case.

  let uniqueLetters = new Set(); //create a Set for unique letters.

  for (let char of str) {
    if (char >= "a" && char <= "z") {
      uniqueLetters.add(char); //add it if it is an unique letter.
    }
  }
  return uniqueLetters.size === 26; // Check if the set contains all 26 lowercase letters
}
// Example usage:
let pangram = "The quick brown fox jumps over the lazy dog.";
let notPangram = "Hello World! this is not pangram";

console.log(isPangram(pangram)); // Output: true
console.log(isPangram(notPangram)); // Output: false
