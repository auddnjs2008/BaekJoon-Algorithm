const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];

const isPrime = (n) => {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

input.forEach((i) => {
  if (i === "0") return;
  let find = false;
  for (let j = +i - 2; j > 1; j--) {
    const first = j;
    const second = i - j;

    if (isPrime(first) && isPrime(second)) {
      answer.push(`${i} = ${second} + ${first}`);
      find = true;
      break;
    }
  }

  if (!find) answer.push("Goldbach's conjecture is wrong.");
});

console.log(answer.join("\n").trim());
