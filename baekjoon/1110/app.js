// https://www.acmicpc.net/problem/1110

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let number = input;
let result;
let count = 0;

while (1) {
  count++;

  result = Math.floor(number / 10) + (number % 10);
  number = (number % 10) * 10 + (result % 10);

  if (input === number) break;
}

console.log(count);
