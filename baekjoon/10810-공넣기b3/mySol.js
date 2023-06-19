const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [MN, ...methods] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [M, N] = MN.split(' ').map(Number);

const baskets = new Array(M).fill(0);

for (method of methods) {
  splicing(method, baskets);
}
console.log(baskets.join(' '));

function splicing(method, baskets) {
  const [i, j, k] = method.split(' ').map(Number);
  const start = i - 1;
  const delNum = j - i + 1; //?
  const fillArr = new Array(delNum).fill(k);
  baskets.splice(start, delNum, ...fillArr);
}
