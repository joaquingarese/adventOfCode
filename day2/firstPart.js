// A - X = Rock (1pts)
// B - Y = Paper (2pts)
// C - Z = Scissors (3pts)
// AY => "In this case scenario, my opponent chose Rock and I chose paper, so i won the match, and score 8, 2 because of the paper and 6 because of the won".
// In case it is a draw, the score is 3pts plus the value of what a chose in that opportunity.
// woon = 6, draw = 3, loose = 0.

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

// Condicionales para ir sumando los puntos dependiendo de que letra se enfrente a cual otra.
let sumatoria2 = 0;
let contador = 0;
for (let x = 0; x < 2501; x++) {
  if (cleanedArray[0] === "A") {
    switch (cleanedArray[1]) {
      case "X":
        sumatoria2 += 4;
        contador++;
        cleanedArray.splice(0, 2);
        continue;
      // break;
      case "Y":
        sumatoria2 += 8;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "Z":
        sumatoria2 += 3;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      default:
        break;
    }
  }

  if (cleanedArray[0] === "B") {
    switch (cleanedArray[1]) {
      case "X":
        sumatoria2 += 1;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "Y":
        sumatoria2 += 5;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "Z":
        sumatoria2 += 9;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      default:
        break;
    }
  }

  if (cleanedArray[0] === "C") {
    switch (cleanedArray[1]) {
      case "X":
        sumatoria2 += 7;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "Y":
        sumatoria2 += 2;
        contador++;
        cleanedArray.splice(0, 2);
        // continue;
        break;
      case "Z":
        sumatoria2 += 6;
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
