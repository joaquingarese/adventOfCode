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
    }
    if (dataToArray[x] === "\n" || x == dataToArray.length - 1) {
      rucksuck2 = rucksuck.join("");
      arrayOfRucksucks.push(rucksuck2);
      rucksuck = [];
    }
  }
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

// Function that divide the rucksuck into two compartments, and finds the only letter that is repeated in both compartments:
// Find the letter that appears in both compartments:
function repeatedLetter(comp1, comp2) {
  for (let i = 0; i < comp1.length; i++) {
    for (let x = 0; x < comp2.length; x++) {
      if (comp1[i] === comp2[x]) {
        return comp1[i];
      }
    }
  }
}

let testArray1 = ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", "ttgJtRGJQctTZtZT", "CrZsJsPPZsGzwwsLwLmpwMDw"];

// Returns an array with all the letters that are repeated:
let arrayWithLetters = [];
function arrayOfRepeatedLetters(testArray) {
  for (let x = 0; x < testArray.length; x++) {
    let actualRucksuck = testArray[x];
    let rucksuckLength = actualRucksuck.length;
    let compartment1 = actualRucksuck.slice(0, rucksuckLength / 2);
    let compartment2 = actualRucksuck.slice(rucksuckLength / 2, rucksuckLength);
    let repeatedLetter1 = repeatedLetter(compartment1, compartment2);
    arrayWithLetters.push(repeatedLetter1);
  }
}
arrayOfRepeatedLetters(arrayOfRucksucks);

// Function that sum all the values of all the repeated letters:
function summationOfLetters() {
  let summation = 0;
  for (let x = 0; x < arrayWithLetters.length; x++) {
    let isUppercase = arrayWithLetters[x].toUpperCase() === arrayWithLetters[x] ? true : false;
    if (isUppercase) {
      summation += uppercaseValues(arrayWithLetters[x]);
    } else {
      summation += lowercaseValues(arrayWithLetters[x]);
    }
  }
  console.log(summation);
}

// summationOfLetters();
