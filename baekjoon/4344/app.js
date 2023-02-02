// https://www.acmicpc.net/problem/4344

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [lineCount, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < lineCount; i++) {
  input[i] = input[i].split(" ").map(Number);
  let sum = 0;
  let count = 0;

  let grades = input[i][0];

  for (let j = 1; j <= grades; j++) {
    sum += input[i][j];
  }
  const avg = sum / grades;

  for (let k = 1; k <= grades; k++) {
    if (input[i][k] > avg) {
      count++;
    }
  }
  console.log(((count / grades) * 100).toFixed(3) + "%");
}
