// https://www.acmicpc.net/problem/2884

const filePath = process.platform === "linux" ? "dev/stdin" : "input";
const [hour, minute] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);
const ALARM_INTERVAL = 45;

function time_converter(hour, minute) {
  if (hour < 0 && minute < 0) return console.log(24 - -hour, 60 - -minute);
  else if (hour < 0) return console.log(24 - -hour, minute);
  else if (minute < 0) return console.log(hour, 60 - -minute);
  else return console.log(hour, minute);
}

function calculation(subtrahendMinute) {
  if (subtrahendMinute < 0) return time_converter(hour - 1, subtrahendMinute);
  else return time_converter(hour, subtrahendMinute);
}

calculation(minute - ALARM_INTERVAL);
