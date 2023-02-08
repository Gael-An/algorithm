// https://www.acmicpc.net/problem/1712
// 마진 구하는 식이 존재했다니... 삽질하면서 코딩했는데... ㅠㅠ; (./app.js 참고)

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const [fixedCost, variableCost, laptopPrice] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const margin = laptopPrice - variableCost;
const count = Math.floor(fixedCost / margin) + 1;

console.log(margin <= 0 ? -1 : count);
