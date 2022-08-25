const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);

const learningWords = ["a", "n", "t", "c", "i"];
const afterWords = [];
const dict = {};

let limitWords = k - 5;
let possibleWords = 0;

const words = input.map((word) => word.slice(4, word.length - 4));

const fixWords = words.map((word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (!learningWords.includes(word[i])) {
      result += word[i];
    }
  }
  return result;
});

fixWords.forEach((word) => {
  for (let i = 0; i < word.length; i++) {
    dict[word[i]] = dict[word[i]] ? dict[word[i]] + 1 : 1;
  }
});

Object.keys(dict)
  .sort((a, b) => dict[b] - dict[a])
  .forEach((word) => {
    if (limitWords > 0) {
      afterWords.push(word);
      limitWords--;
    }
  });

fixWords.forEach((word) => {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    if (!afterWords.includes(word[i])) {
      result = false;
      break;
    }
  }

  possibleWords = result ? possibleWords + 1 : possibleWords;
});

console.log(possibleWords);
