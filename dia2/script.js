// A - X = Rock (1pts)
// B - Y = Paper (2pts)
// C - Z = Scissors (3pts)
// AY => "In this case scenario, my opponent chose Rock and I chose paper, so i won the match, and score 8, 2 because of the paper and 6 because of the won".
// In case it is a draw, the score is 3pts plus the value of what a chose in that opportunity.

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

console.log(cleanedArray);

const testArray = [1, 2, 3, 4];

let sumatoria = 0;
for (let x = 0; x < testArray.length; x++) {}
