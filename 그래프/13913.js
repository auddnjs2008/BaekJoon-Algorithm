const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

const [start, goal] = input.map(Number);
const visit = Array.from({ length: 100100 }, () => 0);
const path = Array.from({ length: 100100 }, () => 0);

const bfs = (N) => {
  const queue = [[N, 0]];
  visit[N] = 1;
  while (queue.length) {
    const [cur, time] = queue.shift();

    if (cur === goal) {
      return time;
    }

    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        path[next] = cur;
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
};

const time = bfs(start);
let ans = [];
let before = path[goal];
ans.push(goal);

for (let i = 0; i < time; i++) {
  ans.push(before);
  before = path[before];
}

console.log(time);
console.log(ans.reverse().join(" "));
