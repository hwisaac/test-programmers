const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function countNumbers(N, numbers, M, integers) {
  const resultMap = new Map();
  const result = [];

  // 상근이가 가지고 있는 숫자 카드 개수 세기
  for (let i = 0; i < N; i++) {
    const num = numbers[i];
    if (resultMap.has(num)) {
      resultMap.set(num, resultMap.get(num) + 1);
    } else {
      resultMap.set(num, 1);
    }
  }

  // 주어진 수가 상근이가 가지고 있는 카드인지 확인하여 개수 출력
  for (let i = 0; i < M; i++) {
    const num = integers[i];
    const count = resultMap.get(num) || 0;
    result.push(count);
  }

  return result;
}

// 입력 예시
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const M = Number(input[2]);
const integers = input[3].split(' ').map(Number);

// 결과 출력
console.log(countNumbers(N, numbers, M, integers).join(' '));
// 출력: [3, 0, 0, 1, 2, 0, 0, 2]
