const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [MN, ...commands] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(M, N, commands) {
  const baskets = new Array(M).fill(0); // 바구니 초기화

  for (let i = 0; i < N; i++) {
    commands[0];
    const [start, end, number] = commands[i].split(' ').map(Number);

    for (let j = start - 1; j <= end - 1; j++) {
      baskets[j] = number; // 바구니에 공 번호 저장
    }
  }

  return baskets;
}

const [M, N] = MN.split(' ').map(Number);
console.log(solution(M, N, commands).join(' '));
