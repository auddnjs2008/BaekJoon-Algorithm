const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const inequality = input[0].split(" ");
const visit = Array(10).fill(0);
let max = String(Number.MIN_SAFE_INTEGER);
let min = String(Number.MAX_SAFE_INTEGER);

function dfs(L, prev, result) {
  if (L === N) {
    // L=N 이라면 모든 부등호가 사용 된것
    max = result > max ? result : max;
    min = result < min ? result : min;
    return;
  }

  if (inequality[L] === "<") {
    for (let i = prev + 1; i < 10; i++) {
      if (visit[i]) continue;
      visit[i] = 1;
      dfs(L + 1, i, result + i); // result + i는 문자열
      visit[i] = 0;
    }
  } else {
    for (let i = prev - 1; i > -1; i--) {
      if (visit[i]) continue;
      visit[i] = 1;
      dfs(L + 1, i, result + i);
      visit[i] = 0;
    }
  }
  return;
}

for (let i = 0; i < 10; i++) {
  visit[i] = 1;
  dfs(0, i, `${i}`);
  visit[i] = 0;
}

console.log(`${max}\n${min}`);
