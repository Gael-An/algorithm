// https://www.acmicpc.net/problem/1546

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [amount, numArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

numArr = numArr.split(" ").map(Number);
let sum = 0;

const maximumValue = Math.max(...numArr);

numArr.forEach((element) => (sum += (element / maximumValue) * 100));

console.log(sum / amount);
