// https://www.acmicpc.net/problem/3003

const KING = 1;
const QUEEN = 1;
const ROOK = 2;
const BISHOP = 2;
const KNIGHT = 2;
const PAWN = 8;
const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

console.log(
  KING - input[0],
  QUEEN - input[1],
  ROOK - input[2],
  BISHOP - input[3],
  KNIGHT - input[4],
  PAWN - input[5]
);

/* 다르게 구현한 코드
https://overcome-the-limits.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-3003-%ED%82%B9-%ED%80%B8-%EB%A3%A9-%EB%B9%84%EC%88%8D-%EB%82%98%EC%9D%B4%ED%8A%B8-%ED%8F%B0-with-nodejs */
