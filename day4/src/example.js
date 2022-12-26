import { readFileSync } from "node:fs";

const lines = readFileSync("info.txt", { encoding: "utf-8" }) // read day??.txt content
  // remove all \r characters to avoid issues on Windows
  .replace(/\r/g, "")
  // Remove starting/ending whitespace
  .trim() // Split on newline
  .split("\n");

// function part1() {
//   const res = lines.map((line) => {
//     const [interval1, interval2] = line
//       .split(",")
//       .map((interval) => interval.split("-").map(Number))
//       .sort((a, b) => {
//         const oneSize = a[1] - a[0];
//         const twoSize = b[1] - b[0];
//         return twoSize - oneSize;
//       });

//     const oneFullContainsTwo = interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

//     return oneFullContainsTwo ? 1 : 0;
//   });
//   console.log(res.reduce((a, b) => a + b, 0));
// }

const res = lines.map((line) => {
  const [interval1, interval2] = line
    .split(",")
    .map((interval) => interval.split("-").map(Number))
    .sort((a, b) => {
      const oneSize = a[1] - a[0];
      const twoSize = b[1] - b[0];
    });
  //   console.log({ interval1, interval2 });

  const oneFullContainsTwo = interval1[0] <= interval2[0] && interval1[1] >= interval2[1];
});
// console.log(res);
// console.log(interval1);
