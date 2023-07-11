const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N , ...datas ] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
  // Run by Node.js


  function pingpong(n) {
    function helper(i, val, direction) {
      if (i > n) {
        return val;
      } else if (i % 7 == 0 || i.toString().includes('7')) {
        return helper(i + 1, val - direction, -direction);
      } else {
        return helper(i + 1, val + direction, direction);
      }
    }

    return helper(1, 1, 1);
  }

pingpong(100) //?