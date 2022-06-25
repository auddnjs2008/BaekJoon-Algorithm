const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

const candies = input.map((v) => v.split(""));
let maxValue = 0;

const searchCandies = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let result = [1];
    for (let j = 1; j < arr[i].length; j++) {
      result[j] = arr[i][j] === arr[i][j - 1] ? result[j - 1] + 1 : 1;
    }
    maxValue = Math.max(maxValue, Math.max(...result));
  }

  for (let j = 0; j < arr[0].length; j++) {
    let result = [1];
    for (let i = 1; i < arr.length; i++) {
      result[i] = arr[i][j] === arr[i - 1][j] ? result[i - 1] + 1 : 1;
    }
    maxValue = Math.max(maxValue, Math.max(...result));
  }
};

for (let i = 0; i < candies.length; i++) {
  for (let j = 0; j < candies[i].length; j++) {
    if (j !== candies[i].length - 1 && candies[i][j] !== candies[i][j + 1]) {
      let temp = candies[i][j];
      candies[i][j] = candies[i][j + 1];
      candies[i][j + 1] = temp;
      // 사탕 조사
      searchCandies(candies);

      // 원래대로 돌리기
      temp = candies[i][j];
      candies[i][j] = candies[i][j + 1];
      candies[i][j + 1] = temp;
    }

    if (i !== candies.length - 1 && candies[i][j] !== candies[i + 1][j]) {
      let temp = candies[i][j];
      candies[i][j] = candies[i + 1][j];
      candies[i + 1][j] = temp;
      //사탕 조사
      searchCandies(candies);
      //원래대로 돌리기
      temp = candies[i][j];
      candies[i][j] = candies[i + 1][j];
      candies[i + 1][j] = temp;
    }
  }
}

console.log(maxValue);
