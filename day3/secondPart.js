// Define the values of all the letters, Uppercase and Lowercase, crear dos arrays con clave:valor para cada uno de los caracteres, tanto en mayuscula como en minuscula.
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabetLowercase = [];

for (let x = 0; x < alphabet.length; x++) {
  let letter = "";
  letter = alphabet[x].toLowerCase();
  alphabetLowercase.push(letter);
}

// Put all the rusucks inside an array:
const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const data = fs.readFileSync("./file.txt", { encoding: "utf8", flag: "r" });
const dataToArray = [...data];

// Function that separate the different rucksucks in an array:
let rucksuck = [];
let arrayOfRucksucks = [];
let rucksuck2;
function separateRucksucks() {
  for (let x = 0; x < dataToArray.length; x++) {
    if (dataToArray[x] != "\n") {
      rucksuck.push(dataToArray[x]);
      // rucksuck2 = rucksuck.toString();
    }
    if (dataToArray[x] === "\n" || x == dataToArray.length - 1) {
      rucksuck2 = rucksuck.join("");
      arrayOfRucksucks.push(rucksuck2);
      rucksuck = [];
    }
  }
  return arrayOfRucksucks;
}
separateRucksucks();

// Setting Lowercase letters values:
function lowercaseValues(v) {
  let findindex = alphabetLowercase.findIndex((x) => x === v);
  let valueLowercase = findindex + 1;
  return valueLowercase;
}

// Setting Uppercase letters values:
function uppercaseValues(V) {
  let findindexUpper = alphabet.findIndex((x) => x === V);
  let valueUppercase = findindexUpper + 1 + 26;
  return valueUppercase;
}

// Now we have to go through 3 arrays, and find the only letter that is repeated:
const arrayOfBadges = [];
function findingBadge(arrayPosition1, arrayPosition2, arrayPosition3) {
  for (let x = 0; x < arrayPosition1.length; x++) {
    for (let i = 0; i < arrayPosition2.length; i++) {
      if (arrayPosition1[x] === arrayPosition2[i]) {
        for (let m = 0; m < arrayPosition3.length; m++) {
          if (arrayPosition2[i] === arrayPosition3[m]) {
            return arrayPosition3[m];
          }
        }
      }
    }
  }
}

for (let j = 0; j < arrayOfRucksucks.length; j = j + 3) {
  arrayOfBadges.push(findingBadge(arrayOfRucksucks[j], arrayOfRucksucks[j + 1], arrayOfRucksucks[j + 2]));
}

let sum = 0;
for (let r = 0; r < arrayOfBadges.length; r++) {
  if (arrayOfBadges[r] === arrayOfBadges[r].toUpperCase()) {
    sum += uppercaseValues(arrayOfBadges[r]);
  } else sum += lowercaseValues(arrayOfBadges[r]);
}

console.log(sum);
