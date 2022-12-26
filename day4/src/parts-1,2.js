import fs from "fs";

const data = fs.readFileSync("./info.txt", { encoding: "utf8", flag: "r" });
const dataToArray = [...data];

// Putting numbers together:
const numbersTogether = [];
function togetherNumbers() {
  let transforming = "";
  let contador = 0;
  for (let i = 0; i < dataToArray.length; i++) {
    if (dataToArray[i] != "-" && dataToArray[i] != "," && dataToArray[i] != "\n" && contador === 0) {
      contador++;
      transforming = dataToArray[i];
    } else if (dataToArray[i] != "-" && dataToArray[i] != "," && dataToArray[i] != "\n" && contador === 1) {
      transforming = transforming + dataToArray[i];
      contador = 0;
    }
    if (dataToArray[i] === "-") {
      numbersTogether.push(Number(transforming));
      numbersTogether.push(dataToArray[i]);
      transforming = "";
      contador = 0;
    }
    if (dataToArray[i] === ",") {
      numbersTogether.push(Number(transforming));
      numbersTogether.push(dataToArray[i]);
      transforming = "";
      contador = 0;
    }
    if (dataToArray[i] === "\n" || i === 11366) {
      numbersTogether.push(Number(transforming));
      numbersTogether.push("*");
      transforming = "";
      contador = 0;
    }
  }
}
togetherNumbers();
console.log("dataToArray.length: ");
console.log(dataToArray[11366]);

function containsTheOther() {
  let sumatoria = 0;
  for (let x = 0; x < numbersTogether.length; x = x + 8) {
    let min1 = numbersTogether[x];
    let max1 = numbersTogether[x + 2];
    let min2 = numbersTogether[x + 4];
    let max2 = numbersTogether[x + 6];
    if (min1 <= min2 && max1 >= max2) {
      sumatoria++;
    } else if (min2 <= min1 && max2 >= max1) {
      sumatoria++;
    }
  }
}
containsTheOther();

function doOverlap() {
  let sumatoria = 0;
  for (let x = 0; x < numbersTogether.length; x = x + 8) {
    let min1 = numbersTogether[x];
    let max1 = numbersTogether[x + 2];
    let min2 = numbersTogether[x + 4];
    let max2 = numbersTogether[x + 6];
    if (max1 >= min2 && min2 > min1 && max2 > max1) {
      sumatoria++;
    } else if (min1 <= max2 && min2 < min1 && max1 > max2) {
      sumatoria++;
    } else if (min1 <= min2 && max1 >= max2) {
      sumatoria++;
    } else if (min2 <= min1 && max2 >= max1) {
      sumatoria++;
    }
  }
  console.log(sumatoria);
}
doOverlap();
