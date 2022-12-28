// Info:
const sampleInput = `[F]         [L]     [M]            
[T]     [H] [V] [G] [V]            
[N]     [T] [D] [R] [N]     [D]    
[Z]     [B] [C] [P] [B] [R] [Z]    
[M]     [J] [N] [M] [F] [M] [V] [H]
[G] [J] [L] [J] [S] [C] [G] [M] [F]
[H] [W] [V] [P] [W] [H] [H] [N] [N]
[J] [V] [G] [B] [F] [G] [D] [H] [G]
 1   2   3   4   5   6   7   8   9 

move 6 from 4 to 3
move 5 from 8 to 9
move 1 from 4 to 5
move 1 from 4 to 5
move 2 from 2 to 7  `;

// const [stackPart, instructionsPart] = sampleInput.split("\n\n");

// const stackRows = stackPart.split("\n").slice(0, -1);
// console.log(stackRows);

// const stackMatrix = stackRows.map((row) => [...row].filter((a, i) => i % 4 === 1));
// console.log(stackMatrix);

// const howManyStacks = stackMatrix[0].length;
// console.log(howManyStacks);

// const stacks = Array(howManyStacks).fill("");
// console.log(stacks);

// This is the primitive way:
// for (let i = 0; i < stackMatrix.length; i++) {
//   for (let j = 0; j < stackMatrix[0].length; j++) {
//     const char = stackMatrix[i][j];
//     if (char !== " ") {
//       stacks[j] += char;
//     }
//   }
// }
// console.log(stacks);

// This is the modern way:
// const stacks2 = stackMatrix.reduce((arr, row) => row.reduce((innerArr, char, j) => (char === " " ? innerArr : innerArr.map((str, k) => (j === k ? str + char : str))), arr), Array(howManyStacks).fill(""));

// console.log(stacks2);

import { readFileSync } from "node:fs";
import { parse } from "node:path";

const lines = readFileSync("info2.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd(); // Remove ending whitespace

// console.log(lines);

const [rawStacks, rawMoves] = lines.split("\n\n").map((x) => x.split("\n"));
// console.log(lines.split("\n\n"));
// console.log(rawStacks);
// console.log(rawMoves);

const parsedStacks = rawStacks.map((line) => [...line].filter((value, index) => index % 4 === 1));
// console.log(parsedStacks);

const indexes = parsedStacks.pop();
console.log(indexes);

const stacks = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      // Add line[i] to the stack indexes[i]
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
    }
  }
}

// console.log(stacks);

const moves = [];
for (const move of rawMoves) {
  const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  moves.push({
    count: parseInt(match[1]),
    from: parseInt(match[2]),
    to: parseInt(match[3]),
  });
}

function part1() {
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    for (let i = 0; i < move.count; i++) {
      const crate = localStacks[move.from].pop();
      localStacks[move.to].push(crate);
    }
  }
  console.log(
    indexes
      .map((value) => {
        const stack = localStacks[value];
        return stack[stack.length - 1];
      })
      .join("")
  );
}

function part2() {
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    const crates = localStacks[move.from].splice(-move.count, move.count);
    localStacks[move.to] = localStacks[move.to].concat(crates);
  }
  console.log(
    indexes
      .map((value) => {
        const stack = localStacks[value];
        return stack[stack.length - 1];
      })
      .join("")
  );
}

// part1();
// part2();
