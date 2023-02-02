// https://www.acmicpc.net/problem/10950

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let input = require("fs").readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
  let count = input[i].length;
  if (count > 1) console.log(input[i][0] + input[i][1]);
}

return;
