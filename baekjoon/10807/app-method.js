// https://www.acmicpc.net/problem/10807

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [amount, arr, targetNumber] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(
  arr.split(" ").filter((element) => element === targetNumber).length
);
