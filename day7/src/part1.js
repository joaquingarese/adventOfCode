import fs from "fs";

const data = fs.readFileSync("./data.txt", { encoding: "utf-8", flag: "r" }).split("\n");
// console.log(data);

// Wich are the different commands that may appear in the strings of the array
//     - $ cd /
//     - $ cd ed
//     - $ cd ..
//     - $ ls
//     - 1231422314 cdacddc
//     - dir jsdjd
//     - dir sdnsd

const dataExample = [
  "$ cd /",
  // 1
  "$ ls",
  "150961 cmnwnpwb",
  "28669 hhcp.jzd",
  "dir jssbn",
  "dir lfrctthp",
  "133395 lfrctthp.tlv",
  "dir ltwmz",
  "dir nmzntmcf",
  "dir vhj",
  "256180 wbs.vmh",
  "257693 zsntdzf",
  "$ cd jssbn",
  // 11
  "$ ls",
  "89372 dvlb",
  "dir lfrctthp",
  "dir pjzpjjq",
  "dir rbtbtt",
  "203148 sppmmj",
  "130200 sppmmj.bmm",
  "dir tlhttrgs",
  "248929 vsbvlr",
  "$ cd lfrctthp",
  // 111
  "$ ls",
  "dir lfrctthp",
  "dir srf",
  "165285 vlfc",
  "202701 wbs.vmh",
  "$ cd lfrctthp",
  // 1111
  "$ ls",
  "25083 gsb.flc",
  "$ cd ..",
  // 111
  "$ cd srf",
  // 1112
  "$ ls",
  "20386 hcnjd.nsq",
  // "143480 jjlz.mtq",
  "dir rwvdvvsf",
  // "88782 sbmhf",
  // "143464 wbs.vmh",
  "dir wvhhr",
  "$ cd rwvdvvsf",
  // 11121
  "$ ls",
  "20009 bqz",
  // "133188 czdm",
  "$ cd ..",
  // 1112
  "$ cd wvhhr",
  // 11122
  "$ ls",
  "60445 vrwdvnh.jhf",
  // "10445 vrwdvnh.jhf",
  "$ cd ..",
  // 1112
  "$ cd ..",
  // 111
  "$ cd ..",
  // 11
  "$ cd pjzpjjq",
  // 112
  "$ ls",
  "14329 chgbd.zjf",
  "dir dvlb",
  "212284 pjc",
  "dir qlrn",
  "225566 rhzgmnb.nhd",
  "145766 sppmmj.dzz",
  "dir vpltwcs",
  "125853 wbs.vmh",
];

const hardCodedResult = 60445 + 20009 + 25083; // 105537

let dataObject = {};
let counter = 0;
// let cd = 0;
let summation = 0;
let value = 0;
let sliced;
for (let x = 0; x < dataExample.length; x++) {
  sliced = dataExample[x].slice(0, 4);
  if (sliced === "$ cd") {
    sliced = dataExample[x].slice(0, 6);
    if (sliced === "$ cd .") {
      counter = counter.slice(0, counter.length - 1);
    } else {
      if (counter === 0) {
        counter++;
      } else if (counter) {
        counter = counter + "1";
      } else {
        counter = counter + "2";
      }
      dataObject[counter] = 0;
    }
  }
  if (Number(Number(sliced))) {
    value = Number(dataExample[x].split(" ")[0]);
    dataObject[counter] += value;
  }
}

for (let i = counter; i > 0; i--) {
  if (dataObject[i] <= 100000) {
    summation = summation + dataObject[i];
  }
}
console.log(dataObject);
console.log(counter);
console.log(summation);
