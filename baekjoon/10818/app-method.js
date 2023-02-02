// https://www.acmicpc.net/problem/10818

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [ea, numArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numArr = numArr
  .split(" ")
  .map(Number)
  .sort(function (a, b) {
    return a - b;
  });

console.log(numArr[0], numArr[numArr.length - 1]);
