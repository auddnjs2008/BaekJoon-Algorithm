const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const schedule = input
  .map((plan) => plan.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let result = 0;
let recentEnd = 0;

schedule.forEach(([start, end]) => {
  if (start < recentEnd) return;
  result++;
  recentEnd = end;
});

console.log(result);
