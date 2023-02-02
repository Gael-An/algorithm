// https://www.acmicpc.net/problem/10818

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [ea, numArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numArr = numArr.split(" ").map(Number);

let maximumValue = numArr[0];
let minimumValue = numArr[0];

for (let i = 0; i < ea; i++) {
  if (maximumValue < numArr[i]) maximumValue = numArr[i];
  if (minimumValue > numArr[i]) minimumValue = numArr[i];
}

console.log(minimumValue, maximumValue);
