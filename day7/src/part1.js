import fs from "fs";

const dataExample2 = fs.readFileSync("./data.txt", { encoding: "utf-8", flag: "r" }).split("\n");
// console.log(data);

// Wich are the different commands that may appear in the strings of the array
//     - $ cd /
//     - $ cd ed
//     - $ cd ..
//     - $ ls
//     - 1231422314 cdacddc
//     - dir jsdjd
//     - dir sdnsd

const dataExample4 = [
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
  // "1386 hcnjd.nsq", // The one on top is the real one
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

const dataExample3 = fs.readFileSync("./data2.txt", { encoding: "utf-8", flag: "r" }).split("\n");

// const dataExample4 = [
// $ cd /
// --------------------------- 1
// $ ls
// 150961 cmnwnpwb
// 28669 hhcp.jzd
// dir jssbn
// dir lfrctthp
// 133395 lfrctthp.tlv
// dir ltwmz
// dir nmzntmcf
// dir vhj
// 256180 wbs.vmh
// 257693 zsntdzf
// $ cd jssbn
// --------------------------- 11
// $ ls
// 89372 dvlb
// dir lfrctthp
// dir pjzpjjq
// dir rbtbtt
// 203148 sppmmj
// 130200 sppmmj.bmm
// dir tlhttrgs
// 248929 vsbvlr
// $ cd lfrctthp
// --------------------------- 111
// $ ls
// dir lfrctthp
// dir srf
// 165285 vlfc
// 202701 wbs.vmh
// $ cd lfrctthp
// --------------------------- 1111
// $ ls
// 25083 gsb.flc
// $ cd ..
// $ cd srf
// --------------------------- 1112
// $ ls
// 20386 hcnjd.nsq
// 143480 jjlz.mtq
// dir rwvdvvsf
// 88782 sbmhf
// 143464 wbs.vmh
// dir wvhhr
// $ cd rwvdvvsf
// --------------------------- 11121
// $ ls
// 20009 bqz
// 133188 czdm
// $ cd ..
// $ cd wvhhr
// --------------------------- 11122
// $ ls
// 10445 vrwdvnh.jhf
// $ cd ..
// $ cd ..
// $ cd ..
// $ cd pjzpjjq
// --------------------------- 112
// $ ls
// 14329 chgbd.zjf
// dir dvlb
// 212284 pjc
// dir qlrn
// 225566 rhzgmnb.nhd
// 145766 sppmmj.dzz
// dir vpltwcs
// 125853 wbs.vmh
// $ cd dvlb
// --------------------------- 1121
// $ ls
// dir bjfqsb
// dir fnwsmj
// 154127 gplzm
// 264923 qcp.qvc
// dir wlhfvwl
// dir wrgqqts
// dir zhj
// $ cd bjfqsb
// ---------------------------11211
// $ ls
// dir jgltcw
// $ cd jgltcw
// ---------------------------112111
// $ ls
// 264579 shmqqjf.fwd
// $ cd ..
// $ cd ..
// $ cd fnwsmj
// --------------------------- 11212
// $ ls
// dir lfrctthp
// dir rddpmj
// $ cd lfrctthp
// --------------------------- 11213
// $ ls
// dir qdgqdtn
// 198919 qhjbh.fbc
// dir sgddcfdn
// $ cd qdgqdtn
// --------------------------- 112131
// $ ls
// 230357 lbcgfp.vzq
// $ cd ..
// $ cd sgddcfdn
// --------------------------- 112132
// $ ls
// 110212 cwjbzd.npb
// dir lnjln
// 207550 wlvdsjj
// $ cd lnjln
// --------------------------- 1121321
// $ ls
// 28970 tdw
// $ cd ..
// $ cd ..
// $ cd ..
// $ cd rddpmj
// --------------------------- 11214
// $ ls
// dir fhlnmw
// $ cd fhlnmw
// --------------------------- 11215
// $ ls
// 228871 mcgdrzg
// $ cd ..
// $ cd ..
// $ cd ..
// $ cd wlhfvwl
// --------------------------- 113
// $ ls
// dir rbwq
// $ cd rbwq
// --------------------------- 1131
// $ ls
// 139444 jdczdlwb
// 66039 mnbq.sdq
// $ cd ..
// $ cd ..
// $ cd wrgqqts
// --------------------------- 114
// $ ls
// 124869 dvlb.cfl
// $ cd ..
// $ cd zhj
// --------------------------- 115
// $ ls
// dir hww
// 192363 lqn
// dir nqv
// $ cd hww
// --------------------------- 1151
// $ ls
// 14681 czhd.bdn
// 232222 fgcfbrs.wqt
// dir pnsbrd
// 155416 vsw.npv
// 199792 wbs.vmh
// 44877 znpdrr.rmd
// $ cd pnsbrd
// --------------------------- 11511
// $ ls
// 179442 vsbvlr
// 55431 zbhj.wnh
// $ cd ..
// $ cd ..
// $ cd nqv
// --------------------------- 1152
// $ ls
// 262693 hnz.czd
// 259429 lptljbz
// dir rjgbm
// dir tlhttrgs
// 76496 tlhttrgs.jlv
// 260003 vsbvlr
// $ cd rjgbm
// --------------------------- 11521
// $ ls
// 45885 fgfh.tch
// 42899 lfrctthp.fbc
// 159401 nnmg.tvz
// 144595 trzgtn.scg
// $ cd ..
// $ cd tlhttrgs
// --------------------------- 11522
// $ ls
// dir cqtnvzn
// 220458 wbs.vmh
// $ cd cqtnvzn
// --------------------------- 115221
// $ ls
// 49609 czdm
// $ cd ..
// $ cd ..
// $ cd ..
// $ cd ..
// $ cd ..
// $ cd qlrn
// --------------------------- 12
// $ ls
// 150270 bflnzt
// 203988 bgq
// dir jwgd
// 256702 sppmmj
// dir wbgvqpc
// $ cd jwgd
// --------------------------- 121
// $ ls
// 57414 lmlbtpg.wdp
// $ cd ..
// $ cd wbgvqpc
// --------------------------- 122
// $ ls
// dir dvlb
// dir qfhvjtv
// dir tpcwhmv
// $ cd dvlb
// --------------------------- 1221
// $ ls
// 118388 hhcp.jzd
// $ cd ..
// $ cd qfhvjtv
// --------------------------- 1222
// $ ls
// 82966 lfrctthp
// dir mhbbpdpj
// 139234 wbs.vmh
// $ cd mhbbpdpj
// --------------------------- 12221
// $ ls
// dir ghrbbh
// ]

const dataExample = fs.readFileSync("./data2copy.txt", { encoding: "utf-8", flag: "r" }).split("\n");

let dataObject = {};
let counter = 0;
let cd = 0;
let summation = 0;
let value = 0;
let sliced;
for (let x = 0; x < dataExample.length; x++) {
  // console.log("counter start: " + counter);
  sliced = dataExample[x].slice(0, 4);
  if (sliced === "$ cd") {
    sliced = dataExample[x].slice(0, 6);
    if (sliced === "$ cd .") {
      cd++;
      if (dataExample[x + 1].slice(0, 6) != "$ cd .") {
        console.log("cd: " + cd);
        counter = counter.toString();
        counter = counter.slice(0, counter.length - cd + 1);
      }
    }
  } else if (dataExample[x].slice(0, 4) === "$ ls") {
    console.log("counter: " + counter);
    if (counter === 0) {
      counter++;
    } else if (cd != 0) {
      counter = Number(counter) + 1;
      counter = counter.toString();
      cd = 0;
      dataObject[counter] = 0;
      continue;
    } else if (cd === 0) {
      counter = counter + "1";
      dataObject[counter] = 0;
    }
  }
  if (Number(Number(sliced))) {
    value = Number(dataExample[x].split(" ")[0]);
    // console.log("counter end: " + counter);
    dataObject[counter] += value;
  }
}

let newObjectArray = Object.entries(dataObject);

for (let i = newObjectArray.length - 1; i > -1; i--) {
  if (newObjectArray[i][1] <= 100000) {
    summation = summation + newObjectArray[i][1];
  }
}

// Function that checks if the directories are father and son or grandchild or whatever:
// Will check if member 1 is father of member 2
function familyMembers(member1, member2) {
  let counter = 0;
  let member1Length = member1.length;
  let member2Length = member2.length;
  if (member1Length > member2Length) return false;
  member2 = member2.slice(0, member1Length);
  return member1 === member2 ? true : false;
}

// console.log(familyMembers("11", "111"));

// Function that checks wich directory is included in the others:
let coincidences = 0; // It represents how many times the directory is father.
let partialSummation = 0;
let finalArray = [];
for (let x = 0; x < newObjectArray.length; x++) {
  for (let i = 0; i < newObjectArray.length; i++) {
    if (familyMembers(newObjectArray[x][0], newObjectArray[i][0]) && x != i) {
      coincidences++;
      partialSummation = partialSummation + newObjectArray[i][1];
    }
    if (newObjectArray[x][1] <= 100000 && i === newObjectArray.length - 1) {
      partialSummation = partialSummation + newObjectArray[x][1];
      if (partialSummation > 0) {
        partialSummation <= 100000 ? finalArray.push(partialSummation) : false;
        partialSummation = 0;
        coincidences = 0;
      }
    }
    if (newObjectArray[x][1] > 100000 && i === newObjectArray.length - 1) {
      if (partialSummation > 0) {
        partialSummation <= 100000 ? finalArray.push(partialSummation) : false;
        partialSummation = 0;
        coincidences = 0;
      }
    }
    if (i === newObjectArray.length - 1) {
      partialSummation = 0;
      coincidences = 0;
    }
  }
}

console.log(newObjectArray);
console.log(finalArray);

const finalResult = finalArray.reduce((a, b) => (a += b), 0);
console.log(finalResult);

// [ '1', 826898 ],
// [ '11', 671649 ],
// [ '111', 367986 ],
// [ '112', 723798 ],
// [ '1111', 25083 ],
// [ '1112', 20386 ],
// [ '11121', 20009 ],
// [ '11122', 60445 ]
