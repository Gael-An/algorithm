// https://www.acmicpc.net/problem/2438

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let star = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  if (i !== input - 1) star += "\n";
}

console.log(star);
