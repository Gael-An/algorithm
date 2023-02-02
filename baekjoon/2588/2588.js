// https://www.acmicpc.net/problem/2588

const [operand1, operand2] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");
const LENGTH = operand1.length; // == operand2.length

for (let i = 1; i <= LENGTH; i++) {
  console.log(operand1 * operand2.charAt(LENGTH - i));
  if (i === LENGTH) console.log(operand1 * operand2);
}

/* 다르게 구현한 코드
https://velog.io/@wiostz98kr/%EB%B0%B1%EC%A4%80-2588%EB%B2%88-%EA%B3%B1%EC%85%88 */
