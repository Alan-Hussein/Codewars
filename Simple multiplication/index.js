// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}

//    Test Case :
console.log(simpleMultiplication(2)); //16
console.log(simpleMultiplication(1)); //9
console.log(simpleMultiplication(4)); //32
console.log(simpleMultiplication(3)); //27
