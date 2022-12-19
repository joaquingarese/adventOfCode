// Put all the rusucks inside an array:
const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const data = fs.readFileSync("./file.txt", { encoding: "utf8", flag: "r" });
const dataToArray = [...data];
// console.log(dataToArray);

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
function findingbadge() {
  let contador = 0;
  for (let f = 0; f < 101; f++) {
    for (let x = 0; x < arrayOfRucksucks[0].length; x++) {
      if (contador >= 2) {
        contador = 0;
      }
      for (let i = 0; i < arrayOfRucksucks[1].length; i++) {
        if (contador >= 2) {
          break;
        }
        if (arrayOfRucksucks[0][x] === arrayOfRucksucks[1][i]) {
          contador++;
          for (let m = 0; m < arrayOfRucksucks[2].length; m++) {
            if (arrayOfRucksucks[1][i] === arrayOfRucksucks[2][m]) {
              contador++;
              if (contador >= 2) {
                arrayOfBadges.push(arrayOfRucksucks[2][m]);
                arrayOfRucksucks.splice(0, 3);
                break;
              }
            }
          }
        }
      }
    }
  }
}

findingbadge();

// console.log(arrayOfRucksucks[0].length);
console.log(arrayOfBadges);
