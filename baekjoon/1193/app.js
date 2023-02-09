// https://www.acmicpc.net/problem/1193

const solution = (function () {
  const filePath = process.platform === "linux" ? "dev/stdin" : "input";
  let input = require("fs").readFileSync(filePath).toString().trim();
  input = +input;
  let molecule = 1;
  let denominator = 1;
  let repeatCount = 1;
  let count = 1;

  return function () {
    while (true) {
      if (molecule === 0) {
        molecule = ++repeatCount;
        denominator = 1;
        continue;
      }
      if (input === count) break;

      molecule--;
      denominator++;
      count++;
    }
    return `${molecule}/${denominator}`;
  };
})();

console.log(solution());
