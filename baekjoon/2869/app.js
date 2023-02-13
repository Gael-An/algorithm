// https://www.acmicpc.net/problem/2869
// 시간복잡도 시간초과 실패 정답 => app-2.js

const solution = (function () {
  const filePath = process.platform === "linux" ? "dev/stdin" : "input";
  const [steps, slide, distance] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let currentHeight = 0;
  let count = 0;

  return function () {
    while (true) {
      count++;
      currentHeight += steps;
      if (currentHeight >= distance) break;
      currentHeight -= slide;
    }
    return console.log(count);
  };
})();

solution();
