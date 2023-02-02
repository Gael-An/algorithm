// https://www.acmicpc.net/problem/10869

const [a, b] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
