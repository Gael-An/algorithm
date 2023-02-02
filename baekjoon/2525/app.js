// https://www.acmicpc.net/problem/2525

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
let [currentTime, setTime] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n");
currentTime = currentTime.split(" ").map(Number);
setTime = currentTime[0] * 60 + currentTime[1] + +setTime;

function calculation(endHour, endMin) {
  if (endHour >= 24) {
    endHour = endHour % 24;
  } else endHour;

  return console.log(endHour, endMin);
}

calculation(Math.floor(setTime / 60), setTime % 60);
