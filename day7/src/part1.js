import fs from "fs";

const data = fs
  .readFileSync("./data.txt", { encoding: "utf-8", flag: "r" })
  .split("\n");
console.log(data);
