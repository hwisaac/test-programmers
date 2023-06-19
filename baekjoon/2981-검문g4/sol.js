const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...numbers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(N, numbers) {
  // 주어진 수들의 차이를 계산하여 저장
  const differences = [];
  for (let i = 1; i < N; i++) {
    const abs = Math.abs(numbers[i] - numbers[i - 1]);
    differences.push(abs);
  }

  // 차이들의 최대공약수를 구함
  let gcd = differences[0];
  for (let i = 1; i < differences.length; i++) {
    gcd = getGCD(gcd, differences[i]);
  }
  // 가능한 M 값들을 구함
  const result = [];
  for (let i = 1; i * i <= gcd; i++) {
    if (gcd % i === 0) {
      result.push(i);
      if (i * i !== gcd) {
        result.push(gcd / i);
      }
    }
  }

  // 결과를 오름차순으로 정렬하여 반환
  return result.sort((a, b) => a - b).slice(1);
}

// 최대공약수를 계산하는 함수
function getGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 결과 출력
console.log(solution(N, numbers).join(' '));
