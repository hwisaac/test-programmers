const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...commands] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

N = Number(N);

const stack = [];
const result = [];
for (let i = 0; i < N; i++) {
  const log = run(commands[i]);
  if (log !== undefined) result.push(log);
}

function run(command) {
  let [cmd, elt] = command.split(' ');

  switch (cmd) {
    case 'push':
      stack.push(elt);
      break;
    case 'pop':
      return run('empty') ? -1 : stack.pop();
    case 'size':
      return stack.length;
    case 'empty':
      return stack.length === 0 ? 1 : 0;
    case 'top':
      return run('empty') ? -1 : stack[stack.length - 1];
  }
}

console.log(result.join(' '));
