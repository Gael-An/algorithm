// https://www.acmicpc.net/problem/10807

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [amount, arr, targetNumber] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.split(" ");
let count = 0;

for (let i = 0; i < amount; i++) {
  if (arr[i] === targetNumber) count++;
}

console.log(count);
