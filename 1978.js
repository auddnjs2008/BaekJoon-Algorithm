const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ");
let result = 0;
// 에라토스테네스의 체
// 소수를 구할려면   루트 n 이하의 수의 배수만 지우면 된다.

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

for (let i = 0; i < numbers.length; i++) {
  if (isPrime(+numbers[i])) result++;
}

console.log(result);
