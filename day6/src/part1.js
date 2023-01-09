import fs from "fs";

const data = fs.readFileSync("./data.txt", { encoding: "utf8", flag: "r" });
console.log(data.length);
