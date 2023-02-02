// https://www.acmicpc.net/problem/14681

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const [x, y] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);
if (x > 0 && y > 0) console.log("1");
else if (x < 0 && y > 0) console.log("2");
else if (x < 0 && y < 0) console.log("3");
else console.log("4");
