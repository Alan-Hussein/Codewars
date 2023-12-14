// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  word = str.toLowerCase();

  // Use an object to keep track of seen letters
  let seenLetters = {};

  // Iterate through each letter in the word
  for (let letter of word) {
    // If the letter is already in the object, it's a repeating letter, not an isogram
    if (seenLetters[letter]) {
      return false;
    }

    // Otherwise, mark the letter as seen in the object
    seenLetters[letter] = true;
  }

  // If the loop completes without returning false, it's an isogram
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("moose")); // Output: false
console.log(isIsogram("aba")); // Output: false
