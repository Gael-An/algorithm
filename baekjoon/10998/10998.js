// https://www.acmicpc.net/problem/10998

const [a, b] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
console.log(a * b);
