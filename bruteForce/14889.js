const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

const players = Array.from({ length: n }, (v, i) => i + 1);
const info = input.map((v) => v.split(" ").map(Number));

const plusStore = (player1, player2) =>
  info[player1 - 1][player2 - 1] + info[player2 - 1][player1 - 1];

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, selectNumber - 1);

    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });
  return results;
};

const eachTeamScoreDifference = (team1, team2) => {
  const team1Score = getCombinations(team1, 2).reduce((before, curr) => {
    return before + plusStore(curr[0], curr[1]);
  }, 0);

  const team2Score = getCombinations(team2, 2).reduce((before, curr) => {
    return before + plusStore(curr[0], curr[1]);
  }, 0);
  return Math.abs(team1Score - team2Score);
};

const teams = getCombinations(players, n / 2);
let result = Infinity;
for (let i = 0; i < teams.length / 2; i++) {
  result = Math.min(
    result,
    eachTeamScoreDifference([...teams[i]], [...teams[teams.length - i - 1]])
  );
}

console.log(result);
