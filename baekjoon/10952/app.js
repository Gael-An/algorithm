// https://www.acmicpc.net/problem/10952

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let input = require("fs").readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
  let num1 = input[i][0];
  let num2 = input[i][1];
  if (num1 !== 0 && num2 !== 0) console.log(num1 + num2);
}
