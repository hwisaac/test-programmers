const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [n, ...logs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function getCurrentEmployees(logs) {
  const employees = new Set();

  for (let i = 0; i < logs.length; i++) {
    const [name, action] = logs[i].split(' ');

    if (action === 'enter') {
      employees.add(name);
    } else if (action === 'leave') {
      employees.delete(name);
    }
  }

  const sortedEmployees = Array.from(employees).sort().reverse();

  return sortedEmployees;
}

function solution(n, logs) {
  let result = '';
  const currentEmployees = getCurrentEmployees(logs);

  for (let i = 0; i < currentEmployees.length; i++) {
    result += `${currentEmployees[i]}\n`;
  }
  return result;
}

console.log(solution(n, logs));
