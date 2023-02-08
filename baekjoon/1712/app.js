// https://www.acmicpc.net/problem/1712
// 시간 초과
// 즉시 실행 함수 / 클로져 활용

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const [fixedCost, variableCost, laptopPrice] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const init = (function () {
  let count = 0;
  let totalCost = fixedCost; // 총 비용
  let income = 0; // 수익

  return function () {
    while (laptopPrice - variableCost > 0) {
      totalCost += variableCost;
      income += laptopPrice;
      count++;
      if (totalCost < income) break;
    }
    return count !== 0 ? count : -1;
  };
})();

console.log(init());
