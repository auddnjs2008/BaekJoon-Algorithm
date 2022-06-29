const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
];

while (input.length !== 1) {
  const [w, h] = input.shift().split(" ").map(Number);
  const map = input.splice(0, h).map((v) => v.split(" ").map(Number));
  const isValid = (x, y) => x >= 0 && y >= 0 && x < w && y < h;
  const visited = Array.from({ length: h }, (v) => Array(w).fill(false));
  let island = 0;
  const cnt = [];
  const bfs = (node) => {
    const queue = [node];

    while (queue.length) {
      const [curX, curY] = queue.shift();
      island++;
      for (let i = 0; i < directions.length; i++) {
        const [mX, mY] = directions[i];
        const afterX = mX + curX;
        const afterY = mY + curY;
        if (
          isValid(afterX, afterY) &&
          !visited[afterY][afterX] &&
          map[afterY][afterX]
        ) {
          visited[afterY][afterX] = true;
          queue.push([afterX, afterY]);
        }
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && map[i][j]) {
        bfs([j, i]);
        cnt.push(island);
        island = 0;
      }
    }
  }

  console.log(cnt.length);
}
