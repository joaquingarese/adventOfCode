import fs from "fs";

const one = ["J", "H", "G", "M", "Z", "N", "T", "F"];
const two = ["V", "W", "J"];
const three = ["G", "V", "L", "J", "B", "T", "H"];
const four = ["B", "P", "J", "N", "C", "D", "V", "L"];
const five = ["F", "W", "S", "M", "P", "R", "G"];
const six = ["G", "H", "C", "F", "B", "N", "V", "M"];
const seven = ["D", "H", "G", "M", "R"];
const eight = ["H", "N", "M", "V", "Z", "D"];
const nine = ["G", "N", "F", "H"];

const data = fs.readFileSync("./info.txt", { encoding: "utf8", flag: "r" }).trim().split("\n");
console.log(data);

// Watch the example of day 4, try to use those functions (map, etc)
