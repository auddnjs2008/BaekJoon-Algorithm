const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input.shift().split(" ").map(Number);

const map = input.map((row) => row.split(""));

const isValid = (x, y) => x >= 0 && y >= 0 && x < C && y < R;
const isVisited = Array.from({ length: R }, () => Array(C).fill(false));
const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
// . 비어있는 곳,  * 물이 차 있는 곳 , x 돌이 있는곳
// D 비버의 굴,  S 고슴도치의 위치

const waterPoints = [];
let start;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] === "*") {
      waterPoints.push([j, i]);
    }

    if (map[i][j] === "S") {
      start = [j, i];
    }
  }
}

console.log(waterPoints, start);
