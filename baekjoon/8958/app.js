// https://www.acmicpc.net/problem/8958

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const amount = parseInt(input[0]);

for (let i = 1; i <= amount; i++) {
  let score = 0;
  let provisionalScore = 0;
  for (let j = 0; j <= input[i].length; j++) {
    switch (input[i][j]) {
      case "O":
        provisionalScore++;
        break;
      default:
        provisionalScore = 0;
        break;
    }
    score += provisionalScore;
  }
  console.log(score);
}
