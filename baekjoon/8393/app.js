// https://www.acmicpc.net/problem/8393

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());

for (let i = 1, sum = 0; i <= input; i++) {
  sum = sum + i;

  if (i === input) return console.log(sum);
}
