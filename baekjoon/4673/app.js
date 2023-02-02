// https://www.acmicpc.net/problem/4673

function d(n) {
  const numberToString = String(n);
  let result = 0;
  for (let i = 0; i < numberToString.length; i++) {
    result += parseInt(numberToString[i]);
  }
  result += n;

  return result;
}

function solution(setNumber) {
  let selfNum = [];
  for (let i = 1; i <= setNumber; i++) {
    let index = d(i);
    selfNum[index] = true;
  }
  for (let j = 1; j <= setNumber; j++) {
    if (!selfNum[j]) {
      console.log(j);
    }
  }
}

solution(10000);
