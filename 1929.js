const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

const result = [];

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = +input[0]; i <= +input[1]; i++) {
  if (isPrime(i)) result.push(i);
}

console.log(result.join("\n").trim());
