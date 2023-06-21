const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [_, ...papers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(papers) {
  const BG_SIZE = 100;

  const background = new Array(BG_SIZE);
  for (let i = 0; i < BG_SIZE; i++) {
    background[i] = new Array(BG_SIZE).fill(0);
  }

  const paperSize = 10;
  let blackArea = 0;

  for (paper of papers) {
    const [a, b] = paper.split(' ').map(Number);
    for (let i = a; i < a + paperSize; i++) {
      for (let j = b; j < b + paperSize; j++) {
        if (background[i][j] === 0) {
          background[i][j] = 1;
          blackArea++;
        }
      }
    }
  }

  return blackArea;
}

console.log(solution(papers));
