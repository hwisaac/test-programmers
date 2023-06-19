const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function goodIntervals(L, S, n) {
  S.sort((a, b) => a - b); // 정렬

  // n이 집합 S에 있으면 좋은 구간이 존재할 수 없음
  if (S.includes(n)) {
    return 0;
  }

  // 좌, 우측 '좋은 구간'을 위한 변수들
  let left = 0;
  let right = S[0];
  let count = 0;

  // 집합 S의 각 원소에 대해 좋은 구간을 계산
  for (let i = 0; i < L; i++) {
    right = S[i];

    // n이 현재 구간에 있을 경우 좋은 구간을 찾음
    if (left < n && n < right) {
      count += (n - left) * (right - n) - 1;
    }

    left = right;
  }

  right = 1001;
  if (left < n && n < right) {
    // 마지막 구간에 n이 있을 경우
    count += (n - left) * (right - n) - 1;
  }

  return count;
}

const L = parseInt(input[0]); //?
const S = input[1].split(' ').map(Number); //?
const n = parseInt(input[2]); //?

const result = goodIntervals(L, S, n);
console.log(result);
