// https://www.acmicpc.net/problem/5597

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const attendanceArr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= 30; i++) {
  let temp = false;
  for (let target = 0; target < attendanceArr.length; target++) {
    if (attendanceArr[target] === i) {
      temp = true;
      break;
    }
  }
  if (!temp) console.log(i);
}
