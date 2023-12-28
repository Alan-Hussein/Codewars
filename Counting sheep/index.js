// Consider an array/list of sheep where some sheep may be missing from their place.

// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
  if (!sheep || sheep.length === 0) {
    return 0;
  }
  const numberOfSheep = sheep.filter((value) => value === true).length;

  return numberOfSheep;
}

const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const result = countSheeps(sheepArray);

console.log("Number of sheep: " + result); //16
