const inputs = require("fs").readFileSync("./input.txt").toString().split("\n");

const [n, expression, ...nums] = inputs;
const numbers = nums.map((i) => Number(i));

function solution(n, expression, numbers) {
  let ASCII = 65;
  const stack = [];
  const operators = ["-", "/", "+", "*"];
  const transformer = {};

  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (let i = 0; i < n; i++) {
    const alphabet = String.fromCharCode(ASCII++);
    transformer[alphabet] = numbers[i];
  }

  const transformExpression = expression
    .split("")
    .map((value) => (!operators.includes(value) ? transformer[value] : value));

  for (let i = 0; i < transformExpression.length; i++) {
    let pushValue = transformExpression[i];
    if (operators.includes(pushValue)) {
      const secondValue = stack.pop();
      const firstValue = stack.pop();
      const calculateFunction = calculator[pushValue];
      pushValue = calculateFunction(firstValue, secondValue);
    }

    stack.push(pushValue);
  }

  return (Math.floor(stack[0] * 100) / 100).toFixed(2);
}

const answer = solution(n, expression, numbers);

console.log(answer);
