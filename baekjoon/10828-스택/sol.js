const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...commands] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

N = Number(N);

function solution(N, commands) {
  const stack = [];
  const answer = [];

  for (let i = 0; i < N; i++) {
    const command = commands[i].split(' ');

    switch (command[0]) {
      case 'push':
        stack.push(Number(command[1]));
        break;
      case 'pop':
        answer.push(stack.length ? stack.pop() : -1);
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length ? 0 : 1);
        break;
      case 'top':
        answer.push(stack.length ? stack[stack.length - 1] : -1);
        break;
    }
  }

  return answer;
}

// 결과 출력
console.log(solution(N, commands).join(' '));
