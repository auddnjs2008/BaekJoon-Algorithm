const input = require("fs").readFileSync("./input.txt").toString();

let queue = [];
let tagSw = false;
let result = "";

for (let i = 0; i < input.length; i++) {
  if (tagSw) {
    if (input[i] === ">") tagSw = false;
    result += input[i];
    continue;
  } else {
    if (input[i] === "<") {
      result += queue.join("");
      result += input[i];
      queue = [];
      tagSw = true;
      continue;
    } else if (input[i] === " ") {
      result += queue.join("");
      result += " ";
      queue = [];
      continue;
    } else {
      queue = [input[i], ...queue];
      if (i === input.length - 1) {
        result += queue.join("");
      }
      continue;
    }
  }
}

console.log(result);
