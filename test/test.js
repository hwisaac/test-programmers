const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [a, b, c, d, e, f] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(my_string, overwrite_string, s) {
  const arrMyString = my_string.split('');
  arrMyString.splice(s, overwrite_string.length, ...overwrite_string);
  return arrMyString.join('');
}

solution('Program29b8UYP', 'merS123', 7); //?

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);