const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...numbers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(N, numbers) {
  // 1. 산술평균 계산
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const mean = Math.round(sum / N);

  // 2. 중앙값 계산
  const sorted = numbers.sort((a, b) => a - b);
  const median = sorted[Math.floor(N / 2)];

  // 3. 최빈값 계산
  const frequency = new Map();

  for (let i = 0; i < N; i++) {
    const num = numbers[i];
    frequency.set(num, frequency.has(num) ? frequency.get(num) + 1 : 1);
  }
  const maxFrequency = Math.max(...frequency.values());
  const modes = [];
  for (const [key, value] of frequency) {
    if (value === maxFrequency) {
      modes.push(key);
    }
  }
  const mode = modes.length > 1 ? modes[1] : modes[0];

  // 4. 범위 계산
  const range = Math.max(...numbers) - Math.min(...numbers);

  // 결과 반환
  return [mean, median, mode, range];
}

// 결과 출력
console.log(solution(N, numbers).join(' '));
