// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"


// return masked string
function maskify(cc) {
    // Check if the string is empty or has length less than 5
    if (cc.length <= 4) {
        return cc;
    } else {
        // Mask all characters except the last four
        return '#'.repeat(cc.length - 4) + cc.slice(-4);
    }
}




// Test cases
console.log(maskify("4556364607935616"));  // Output: "############5616"
console.log(maskify("64607935616"));       // Output: "#######5616"
console.log(maskify("1"));                 // Output: "1"
console.log(maskify(""));                  // Output: ""
console.log(maskify("Skippy"));            // Output: "##ippy"
console.log(maskify("Nananananananananananananananana Batman!"));  // Output: "####################################man!"