// https://www.acmicpc.net/problem/2562

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const numArr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maximumValue = numArr[0];
let maximumIndexOfValue = 0;
const LENGTH = numArr.length - 1;

for (let i = 0; i < LENGTH; i++) {
  if (maximumValue < numArr[i]) {
    maximumValue = numArr[i];
    maximumIndexOfValue = i + 1;
  }
}

console.log(`${maximumValue}\n${maximumIndexOfValue}`);
