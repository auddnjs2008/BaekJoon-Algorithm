const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const balls = input[0].split(" ").map(Number);
let max = Number.MIN_SAFE_INTEGER;

const dfs = (beats, energy) => {
  if (beats.length === 2) {
    max = Math.max(max, energy);
    return;
  }

  for (let i = 1; i < beats.length - 1; i++) {
    const plusEnergyCost = beats[i - 1] * beats[i + 1];
    let popedBeats = [...beats];
    popedBeats.splice(i, 1);
    dfs(popedBeats, energy + plusEnergyCost);
  }
};

dfs(balls, 0);

console.log(max);
