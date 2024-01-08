// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string,

//  or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



function duplicateEncode(word) {
  word = word.toLowerCase();

  const charCounts = {};

  for (let char of word) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  let result = "";
  for (let char of word) {
    result += charCounts[char] > 1 ? ")" : "(";
  }

  return result;
}
// Test cases
console.log(duplicateEncode("din"));       // Output: "((("
console.log(duplicateEncode("recede"));    // Output: "()()()"
console.log(duplicateEncode("Success"));   // Output: ")())())"
console.log(duplicateEncode("(( @"));      // Output: "))(("