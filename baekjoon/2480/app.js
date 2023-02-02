// https://www.acmicpc.net/problem/2480

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const [num1, num2, num3] = input.sort(function (a, b) {
  return a - b;
});

function compare(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) calculation(3, num2);
  else if (num1 === num2 || num2 === num3) calculation(2, num2);
  else calculation(1, num3);
}

function calculation(count, number) {
  if (count === 3) return console.log(10000 + number * 1000);
  else if (count === 2) return console.log(1000 + number * 100);
  else return console.log(number * 100);
}

compare(num1, num2, num3);
