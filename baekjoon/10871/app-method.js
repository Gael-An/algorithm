// https://www.acmicpc.net/problem/10871

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [input, numArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
input = input.split(" ");
numArr = numArr.split(" ").map(Number);

// const AMOUNT = input[0];
const COMPARISON_TARGET = input[1];

console.log(numArr.filter((elememt) => COMPARISON_TARGET > elememt).join(" "));
