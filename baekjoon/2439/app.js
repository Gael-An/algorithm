// https://www.acmicpc.net/problem/2439

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let input = parseInt(require("fs").readFileSync(filePath).toString().trim());

for (let i = 1; i <= input; i++) {
  let star = "";
  for (let j = i + 1; j <= input; j++) {
    star += " ";
  }
  for (let k = 1; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}
