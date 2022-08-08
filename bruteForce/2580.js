const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const map = input.map((item) => item.split(" ").map(Number));

const zero = findZeroBoard();
let n = zero.length;
let answer = [];

sudoku(0);

function findZeroBoard() {
  const zeros = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 0) zeros.push([i, j]);
    }
  }
  return zeros;
}

function sudoku(count) {
  if (count === n) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        answer.push(map[i][j]);
      }
      console.log(answer.join(" "));
      answer = [];
    }
    process.exit(0);
  }

  let zeroX = zero[count][0];
  let zeroY = zero[count][1];

  for (let i = 1; i <= map.length; i++) {
    if (isPossible(zeroX, zeroY, i)) {
      map[zeroX][zeroY] = i;
      sudoku(count + 1);
      map[zeroX][zeroY] = 0;
    }
  }
}

function isPossible(x, y, value) {
  //가로줄 확인
  for (let i = 0; i < map.length; i++) {
    if (map[x][i] === value) return false;
  }

  //세로줄 확인
  for (let i = 0; i < map.length; i++) {
    if (input[i][y] === value) return false;
  }

  // 3*3 확인

  let threeX = Math.floor(x / 3) * 3;
  let threeY = Math.floor(y / 3) * 3;
  for (let i = threeX; i < threeX + 3; i++) {
    for (let j = threeY; j < threeY + 3; j++) {
      if (map[i][j] === value) return false;
    }
  }

  return true;
}
