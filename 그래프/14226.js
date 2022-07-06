const input = +require("fs").readFileSync("./input.txt").toString().trim();

const visited = Array(1100).fill(0);

// 화면에는 1개
// 1. 화면에 있는 이모티콘 복사해서 클립보드 저장
// 2. 클립보드에 있는 이모티콘  화면에 붙여넣기
// 3. 화면에 있는 이모티콘 하나 삭제

//원래 화면 개수 + 화면개수 *2  => 2초

const bfs = (sticker) => {
  const queue = [[sticker, 0]];

  while (queue.length) {
    const [curSticker, time] = queue.shift();
    console.log(curSticker, time);
    if (curSticker === input) {
      return time;
    }

    for (const next of [
      [curSticker * 2, 2],
      [curSticker - 1, 1],
    ]) {
      if (!visited[next] && next[0] >= 1 && next[0] <= 1100) {
        visited[next] = 1;
        queue.push([next[0], time + next[1]]);
      }
    }
  }
};

console.log(bfs(1));
