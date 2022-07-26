const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const numbers = input[1].split(" ").map(Number);

const operator = input[2].split(" ").map(Number);

const operObj = {
  0: (oper1, oper2) => oper1 + oper2,
  1: (oper1, oper2) => oper1 - oper2,
  2: (oper1, oper2) => oper1 * oper2,
  3: (oper1, oper2) => {
    if (oper1 < 0) {
      return -Math.floor(-oper1 / oper2);
    }
    return Math.floor(oper1 / oper2);
  },
};

const temp = [];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const dfs = (L) => {
  if (L === n - 1) {
    let oper1 = numbers[0];
    for (let i = 0; i < temp.length; i++) {
      const oper2 = numbers[i + 1];
      const idx = temp[i];
      oper1 = operObj[idx](oper1, oper2);
    }

    if (oper1 > max) max = oper1;
    if (oper1 < min) min = oper1;
  }

  for (let i = 0; i < 4; i++) {
    if (!operator[i]) continue;
    operator[i] -= 1;
    temp.push(i);
    dfs(L + 1);
    operator[i] += 1;
    temp.pop();
  }
};
