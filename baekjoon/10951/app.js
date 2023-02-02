// https://www.acmicpc.net/problem/10951

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
  console.log(input[i][0] + input[i][1]);
}
