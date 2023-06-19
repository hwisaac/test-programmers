const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [NM, ...commands] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);

function solution(N, M, commands) {
  const result = new Array(N);

  for (let i = 0; i < N; i++) result[i] = i + 1;

  for (let i = 0; i < M; i++) {
    const [x, y] = commands[i].split(' ').map(Number);

    swapElts(x - 1, y - 1, result);
  }

  return result;
}

function swapElts(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(solution(N, M, commands).join(' '));
