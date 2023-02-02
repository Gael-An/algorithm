// https://www.acmicpc.net/problem/25304

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let input = require("fs").readFileSync(filePath).toString().split("\n");

function calculate() {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map(Number);
    if (input[i].length > 1) sum += input[i][0] * input[i][1];
  }
  return input[0][0] === sum ? console.log("Yes") : console.log("No");
}

calculate();
