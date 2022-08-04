const input = +require("fs").readFileSync("./input.txt").toString().trim();

const row = new Array(input).fill(0);
let cnt = 0;

const isPossible = (L, X) => {
  // L행 X열에 퀸을 둘 수 있는지
  for (let i = 0; i < L; i++) {
    if (X === row[i]) return false;
    if (Math.abs(X - row[i]) === L - i) return false;
  }
  return true;
};

const dfs = (L) => {
  if (L === input) {
    cnt++;
    return;
  }

  for (let i = 0; i < input; i++) {
    if (isPossible(L, i)) {
      row[L] = i;
      dfs(L + 1);
    }
  }
};

dfs(0);

console.log(cnt);
