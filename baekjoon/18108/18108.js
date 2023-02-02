// https://www.acmicpc.net/problem/18108

const input = require("fs").readFileSync("dev/stdin").toString().trim();

if (input >= 1000 && input <= 3000) {
  console.log(input - 543);
}
