// A - X = Rock (1pts)
// B - Y = Paper (2pts)
// C - Z = Scissors (3pts)

//  "X" means i need to loose the round
//  "Y" means i need to round to end in draw
//  "Z" means i needd to win the round

const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const data = fs.readFileSync("./file.txt", { encoding: "utf8", flag: "r" });
const dataToArray = [...data];
const cleanedArray = [];

for (let x = 0; x < dataToArray.length; x++) {
  if (
    dataToArray[x] === "A" ||
    dataToArray[x] === "B" ||
    dataToArray[x] === "C" ||
    dataToArray[x] === "X" ||
    dataToArray[x] === "Y" ||
    dataToArray[x] === "Z"
  ) {
    cleanedArray.push(dataToArray[x]);
  }
}

let sumatoria2 = 0;
let contador = 0;

for (let x = 0; x < 2501; x++) {
  // "X" Need to loose:
  if (cleanedArray[1] === "X") {
    switch (cleanedArray[0]) {
      case "A":
        sumatoria2 += 0 + 3;
        contador++;
        cleanedArray.splice(0, 2);
        continue;
      case "B":
        sumatoria2 += 0 + 1;
        contador++;
        cleanedArray.splice(0, 2);
        break;
      case "C":
        sumatoria2 += 0 + 2;
        contador++;
        cleanedArray.splice(0, 2);
        break;
      default:
        break;
    }
  }

  //  "Y" Need to draw:
  if (cleanedArray[1] === "Y") {
    switch (cleanedArray[0]) {
      case "A":
        sumatoria2 += 3 + 1;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "B":
        sumatoria2 += 3 + 2;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "C":
        sumatoria2 += 3 + 3;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      default:
        break;
    }
  }

  //   "Z" need to win
  if (cleanedArray[1] === "Z") {
    switch (cleanedArray[0]) {
      case "A":
        sumatoria2 += 6 + 2;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "B":
        sumatoria2 += 6 + 3;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "C":
        sumatoria2 += 6 + 1;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      default:
        break;
    }
  }
}

console.log(sumatoria2);
console.log(contador);

console.log(12898 + 11767);
