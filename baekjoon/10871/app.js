// https://www.acmicpc.net/problem/10871

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [input, numArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
input = input.split(" ");
numArr = numArr.split(" ").map(Number);
let resultArr = [];

const AMOUNT = input[0];
const COMPARISON_TARGET = input[1];

for (let i = 0; i < AMOUNT; i++) {
  if (COMPARISON_TARGET > numArr[i]) resultArr.push(numArr[i]);
}

console.log(resultArr.join(" "));
