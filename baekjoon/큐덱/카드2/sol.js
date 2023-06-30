const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.empty() == 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  get size() {
    return this.length;
  }

  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() == 1) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty() == 1) return -1;
    return this.tail.item;
  }
}

function findLastCard(N) {
  const queue = new Queue();
  // 카드 초기화
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  // 카드 처리
  while (queue.size > 1) {
    // 제일 위에 있는 카드 버리기
    queue.pop();
    // 그 다음 제일 위에 있는 카드를 제일 아래로 옮기기
    queue.push(queue.pop());
  }

  // 남은 카드 번호 반환
  return queue.front();
}

console.log(findLastCard(N));
