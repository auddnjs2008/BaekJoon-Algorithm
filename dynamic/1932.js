const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((i) => +i));

const N = inputs.shift()[0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < inputs[i].length; j++) {
    if (j === 0) inputs[i][j] += inputs[i - 1][0];
    else if (j > 0 && j < inputs[i].length - 1)
      inputs[i][j] += Math.max(inputs[i - 1][j - 1], inputs[i - 1][j]);
    else if (j === inputs[i].length - 1) inputs[i][j] += inputs[i - 1][j - 1];
  }
}

console.log(Math.max(...inputs[N - 1]));
