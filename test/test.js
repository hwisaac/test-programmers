const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function testSlicePerformance() {
  const emergency = Array.from({ length: 10000000 }, (_, index) => index + 1);

  console.time('slice');
  const copiedArray = emergency.slice();
  console.timeEnd('slice');
}
  
  function testSpreadOperatorPerformance() {
    const emergency = Array.from({ length: 10000000 }, (_, index) => index + 1);

    console.time('spread');
    const copiedArray = [...emergency];
    console.timeEnd('spread');
  }

  testSlicePerformance();
  testSpreadOperatorPerformance(); 
  
   