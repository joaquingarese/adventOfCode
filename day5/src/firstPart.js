import fs from "fs";
// move 6 from 4 to 3

const stacks = {
  0: ["Start!"],
  1: ["J", "H", "G", "M", "Z", "N", "T", "F"],
  2: ["V", "W", "J"],
  3: ["G", "V", "L", "J", "B", "T", "H"],
  4: ["B", "P", "J", "N", "C", "D", "V", "L"],
  5: ["F", "W", "S", "M", "P", "R", "G"],
  6: ["G", "H", "C", "F", "B", "N", "V", "M"],
  7: ["D", "H", "G", "M", "R"],
  8: ["H", "N", "M", "V", "Z", "D"],
  9: ["G", "N", "F", "H"],
};

const data = fs.readFileSync("./info.txt", { encoding: "utf8", flag: "r" }).trim().split("\n");

// Clean information:
// - Put inside an array each statement
const cleanedArray = [];
for (let x = 0; x < data.length; x++) {
  let newArray = data[x].split(",");
  let anotherArray = newArray[0].split(" ");
  for (let i = 0; i < anotherArray.length; i++) {
    if (anotherArray[i] === "move" || anotherArray[i] === "from" || anotherArray[i] === "to") {
      anotherArray.splice(i, 1);
    }
  }
  cleanedArray.push(anotherArray);
}

// Read instructions
function readInstructions() {
  let origin;
  let destiny;
  let quantity;
  for (let x = 0; x < cleanedArray.length; x++) {
    origin = Number(cleanedArray[x][1]);
    destiny = Number(cleanedArray[x][2]);
    quantity = Number(cleanedArray[x][0]);
    // Movement:
    for (let i = 1; i < quantity + 1; i++) {
      let toMove = stacks[origin].pop();
      stacks[destiny].push(toMove);
    }
  }
}

// readInstructions();

function readInstructions2() {
  let origin;
  let destiny;
  let quantity;
  for (let x = 0; x < cleanedArray.length; x++) {
    let actualStackLength = 0;
    origin = Number(cleanedArray[x][1]);
    destiny = Number(cleanedArray[x][2]);
    quantity = Number(cleanedArray[x][0]);
    actualStackLength = stacks[origin].length;
    // Movement:
    // Conditional to see if the large of the array we are going to cut is same or more bigger than the part of the array we want to pass to the other stack:

    let toMove = stacks[origin].splice(actualStackLength - quantity, quantity);
    for (let f = 0; f < quantity; f++) {
      stacks[destiny].push(toMove[f]);
    }
  }
}

readInstructions2();
console.log(stacks);
