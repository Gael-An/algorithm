// https://www.acmicpc.net/problem/9498

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());
if (90 <= input && 100 >= input) console.log("A");
else if (80 <= input && 89 >= input) console.log("B");
else if (70 <= input && 79 >= input) console.log("C");
else if (60 <= input && 69 >= input) console.log("D");
else console.log("F");
