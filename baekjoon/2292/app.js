// https://www.acmicpc.net/problem/2292

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = require("fs").readFileSync(filePath).toString().trim();

const solution = (function () {
  let currentNumber = 1;
  let range = 1;
  const interval = 6;

  return function () {
    while (input > currentNumber) {
      currentNumber += interval * range;
      range++;
    }
    return range;
  };
})();

console.log(solution());
