const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array(100100).fill(0);

const bfs = (number, time) => {
  const queue = [[number, time]];

  while (queue.length) {
    const [curNumber, curTime] = queue.shift();

    if (curNumber === input[1]) {
      return curTime;
    }
    for (const next of [curNumber - 1, curNumber + 1, curNumber * 2]) {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = 1;
        if (next !== curNumber * 2) {
          queue.push([next, curTime + 1]);
        } else {
          queue.unshift([next, curTime]);
        }
      }
    }
  }
};

console.log(bfs(input[0], 0));
