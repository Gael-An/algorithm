// https://www.acmicpc.net/problem/1330

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

if (a === b) {
  console.log("==");
} else if (a > b) {
  console.log(">");
} else {
  console.log("<");
}
