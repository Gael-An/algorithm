// https://www.acmicpc.net/problem/2562

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const numArr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maximumValue = numArr.reduce((previous, current) =>
  previous > current ? previous : current
);

let maximumIndexOfValue = numArr.indexOf(maximumValue) + 1;

console.log(`${maximumValue}\n${maximumIndexOfValue}`);
