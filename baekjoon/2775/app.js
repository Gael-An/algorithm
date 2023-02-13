// https://www.acmicpc.net/problem/2775

const solution = (function () {
  const filePath = process.platform === "linux" ? "dev/stdin" : "input";
  const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map(Number);
  const testCase = input.shift();

  return function () {
    for (let i = 0; i < testCase; i++) {
      const k = input.shift();
      const n = input.shift();
      const building = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
      for (let i = 1; i <= n; i++) {
        building[0][i] = i;
      }
      for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
          building[i][j] = building[i - 1][j] + building[i][j - 1];
        }
      }
      console.log(building[k][n]);
    }
  };
})();

solution();
