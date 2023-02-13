// https://www.acmicpc.net/problem/2869

const solution = (function () {
  const filePath = process.platform === "linux" ? "dev/stdin" : "input";
  const [steps, slide, distance] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  return function () {
    return Math.ceil((distance - slide) / (steps - slide));
  };
})();

console.log(solution());
