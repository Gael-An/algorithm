// https://www.acmicpc.net/problem/10250

const solution = (function () {
  const filePath = process.platform === "linux" ? "dev/stdin" : "input";
  const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

  const t = parseInt(input[0]);

  return function () {
    for (let i = 1; i <= t; i++) {
      const [h, w, n] = input[i].split(" ");
      let count = 0;

      for (let j = 1; j <= w; j++) {
        for (let k = 1; k <= h; k++) {
          count++;
          if (n <= count) {
            console.log(String(k) + String(j < 10 ? "0" + String(j) : j));
            break;
          }
        }
        if (n <= count) break;
      }
    }
  };
})();

solution();
