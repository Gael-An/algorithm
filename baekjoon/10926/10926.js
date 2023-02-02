// https://www.acmicpc.net/problem/10926

const input = require("fs").readFileSync("dev/stdin").toString().trim();
const SIGN = "??!";
if (input === input.toLowerCase() && input.length <= 50) {
  if (input === "joonas") console.log(input + SIGN);
  else if (input === "beakjoon") console.log(input + SIGN);
  else console.log(input);
} else console.log("input error");

/* 
위 코드는 정답으로 되지 않음. 아래 코드가 정답임.
const input = require("fs").readFileSync("dev/stdin").toString().trim();

console.log(`${input}??!`);
 */
