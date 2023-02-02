// https://www.acmicpc.net/problem/1065

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const inputNumber = require("fs").readFileSync(filePath).toString().trim();

function solution() {
  let count = 0;
  for (let i = 1; i <= inputNumber; i++) {
    if (i < 100) {
      count++;
    } else {
      let target = String(i);
      let diff = target[0] - target[1];
      let status = false;
      for (let j = 1; j < target.length - 1; j++) {
        if (diff === target[j] - target[j + 1]) {
          status = true;
        } else {
          break;
        }
      }
      if (status) count++;
    }
  }
  console.log(count);
}

solution();
