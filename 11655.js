const input = require("fs").readFileSync("./input.txt").toString();
let answer = "";
for (let i = 0; i < input.length; i++) {
  const char = input[i].charCodeAt(0);

  if (char >= 65 && char <= 90) {
    const upper = char + 13;
    if (upper > 90) {
      answer += String.fromCharCode(upper - 26);
    } else {
      answer += String.fromCharCode(upper);
    }
  } else if (char >= 97 && char <= 122) {
    const upper = char + 13;
    if (upper > 122) {
      answer += String.fromCharCode(upper - 26);
    } else {
      answer += String.fromCharCode(upper);
    }
  } else if (char === 32) {
    answer += " ";
  } else {
    answer += input[i];
  }
}

console.log(answer);
