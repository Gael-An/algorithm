// https://www.acmicpc.net/problem/2562

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const numArr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maximumIndexOfValue = numArr.indexOf(Math.max(...numArr));

console.log(`${numArr[maximumIndexOfValue]}\n${maximumIndexOfValue + 1}`);
