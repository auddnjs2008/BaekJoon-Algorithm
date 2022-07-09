const input = +require("fs").readFileSync("./input.txt").toString().trim();

const MAX_SIZE = 1000;
const check = Array.from({ length: MAX_SIZE + 1 }, () =>
  Array(MAX_SIZE + 1).fill(0)
);

// 화면에는 1개
// 1. 화면에 있는 이모티콘 복사해서 클립보드 저장 // window  , clipboard = clipboard+window , time+1
// 2. 클립보드에 있는 이모티콘  화면에 붙여넣기 // window  = window + clipboard, clipboard = 0; , time+1;
// 3. 화면에 있는 이모티콘 하나 삭제 // window = window-1, clipboard, time+1;

// window === input 이면 탈출
const bfs = () => {
  const queue = [];
  queue.push([1, 0, 0]); // 큐에 [현재위치, 클립보드, 시간]
  check[1][0] = 1; // 현재위치:! 클립보드 :0

  while (queue.length) {
    const [now, clipBoard, time] = queue.shift();
    if (now === input) return time;
    if (0 >= now || now > MAX_SIZE) continue;

    if (!check[now][now]) {
      // 연산 1. 클립보드에 현재 이모티콘 수 저장
      check[now][now] = 1;
      queue.push([now, now, time + 1]);
    }

    if (clipBoard && now + clipBoard <= MAX_SIZE) {
      if (!check[now + clipBoard][clipBoard]) {
        check[now + clipBoard][clipBoard] = 1;
        queue.push([now + clipBoard, clipBoard, time + 1]);
      }
    }

    if (!check[now - 1][clipBoard]) {
      check[now - 1][clipBoard] = 1;
      queue.push([now - 1, clipBoard, time + 1]);
    }
  }
};

console.log(bfs());
