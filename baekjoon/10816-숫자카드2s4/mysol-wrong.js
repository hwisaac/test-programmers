// 런타임 에러 (RangeError) ; 아마 상근이가 가진 카드 integers 의 값이 중복될 수 없다고 가정하고 풀었기 때문인듯?
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // 입출력 인터페이스 객체 rl 생성

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = Number(input[0]);
  const numbers = input[1].split(' ').map(Number);
  const M = Number(input[2]);
  const integers = input[3].split(' ').map(Number);

  console.log(solution(N, numbers, M, integers).join(' '));

  process.exit();
});

// const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
// let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(N, numbers, M, integers) {
  const result = [];

  const map = new Map();
  for (number of numbers) {
    map.set(number, (map.get(number) || 0) + 1);
  }

  const sortedNumbers = new Array(...map.keys()).sort((a, b) => a - b);
  sortedNumbers;
  for (integer of integers) {
    const idx = binarySearch(sortedNumbers, integer);

    if (idx !== -1) {
      result.push(map.get(sortedNumbers[idx]));
    } else {
      result.push(0);
    }
  }

  return result;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (arr[mid] === target) return mid;

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
