// https://www.acmicpc.net/problem/3052

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const numArr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const remainderArr = [];

for (let i = 0; i < numArr.length; i++) {
  let remainderNum = numArr[i] % 42;
  if (!remainderArr.includes(remainderNum)) remainderArr.push(remainderNum);
}

console.log(remainderArr.length);
