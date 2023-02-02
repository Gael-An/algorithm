// https://www.acmicpc.net/problem/2739

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());

for (let i = 1; i <= 9; i++) console.log(`${input} * ${i} = ${input * i}`);
