const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [NM, ...commands] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);

const result = new Array(N);

for (let i = 0; i < N; i++) {
  result[i] = i + 1;
}

for (let i = 0; i < M; i++) {
  const [x, y] = commands[i].split(' ').map(Number);
  replace(x - 1, y - 1, result);
}

function replace(x, y, arr) {
  const start = x; //?
  const end = y + 1; //?
  const deletes = y - x + 1; //?

  const tempArr = arr.slice(start, end);

  arr.splice(start, deletes, ...tempArr.reverse());
}

console.log(result.join(' '));
