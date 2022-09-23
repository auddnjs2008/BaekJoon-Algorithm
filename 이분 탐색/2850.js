const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const trees = input[0].split(" ").map(Number);

const maxTree = Math.max(...trees);

let answer = Number.MIN_SAFE_INTEGER;

const binarySearch = () => {
  let start = 0;
  let end = maxTree;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let allGetTrees = trees.reduce(
      (acc, cur) => acc + (cur - mid > 0 ? cur - mid : 0),
      0
    );

    if (allGetTrees < M) {
      end = mid - 1;
    } else if (allGetTrees >= M) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    }
  }
};

binarySearch();
console.log(answer);
