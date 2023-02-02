// https://www.acmicpc.net/problem/11022

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let input = require("fs").readFileSync(filePath).toString().split("\n");
let result = "";

for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].split(" ").map(Number);
  result +=
    "Case #" +
    i +
    ": " +
    input[i][0] +
    " + " +
    input[i][1] +
    " = " +
    (input[i][0] + input[i][1]) +
    "\n";
}
console.log(result);
