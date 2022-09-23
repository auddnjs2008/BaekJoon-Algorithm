const input = require("fs").readFileSync("./input.txt").toString().trim();

const stoneGroup = input.split(" ").map(Number);

let isPossible = 0;

const isValidNumber = (num) => num >= 1 && num <= 500;

const getStoneGropus = (target) => {
  const result = [];
  for (let i = 0; i < target.length - 1; i++) {
    for (let j = i + 1; j < target.length; j++) {
      if (target[i] !== target[j]) {
        const X = target[j] > target[i] ? target[i] : target[j];
        const Y = target[j] > target[i] ? target[j] : target[i];
        if (
          isValidNumber(X * 2) &&
          isValidNumber(Y - X) &&
          isValidNumber(target[3 - (i + j)])
        ) {
          const newResult = [X * 2, Y - X, target[3 - (i + j)]].sort(
            (a, b) => a - b
          );
          if (JSON.stringify(target) === JSON.stringify(newResult)) continue;
          result.push(newResult);
        }
      }
    }
  }
  return result;
};

const bfs = () => {
  const queue = [stoneGroup.sort((a, b) => a - b)];
  while (queue.length) {
    const firstgroup = queue.shift();
    console.log(firstgroup);
    const set = new Set(firstgroup);
    if (set.size === 1) {
      isPossible = 1;
      break;
    }
    getStoneGropus(firstgroup).forEach((group) => queue.push(group));
  }
};

bfs();
console.log(isPossible);
