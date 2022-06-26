const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

// 현재 채널 100에서 목표 채널까지 이동하는것
// 버튼을 누르고 목표채널까지 이동하는 것 두개 비교

const target = +input[0];
const N = +input[1];
let brokenButton = [];

if (N > 0) {
  brokenButton = input[2].split(" ").map((v) => +v);
}

function check(num, brokenButton) {
  while (true) {
    if (brokenButton.includes(num % 10)) {
      return false;
    } else {
      num = Math.floor(num / 10);
    }

    if (num === 0) {
      break;
    }
  }
  return true;
}

// 부숴진 버튼이 포함되어 있는 숫자인지 아닌지
// true가 나온 경우 내가 눌러서 갈 수 있는 숫자 인것.

function solution(brokenButton, target) {
  let min1 = Math.abs(target - 100);
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= 999999; i++) {
    if (check(i, brokenButton)) {
      // i가 내가 누를 수 있는 수자라면
      let tmp = i.toString().length + Math.abs(target - i);

      if (tmp < min2) {
        min2 = tmp;
      } else if (tmp > min2) {
        break;
      }
    }
  }

  let answer = Math.min(min1, min2);
  return answer;
}

console.log(solution(brokenButton, target));
