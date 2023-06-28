## 문제
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

- push X: 정수 X를 큐에 넣는 연산이다.
- pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
- size: 큐에 들어있는 정수의 개수를 출력한다.
- empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
- front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
- back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

## 입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 2,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

## 출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

## 예제 입력 1 
```
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front
```
## 예제 출력 1 
```
1
2
2
0
1
2
-1
0
1
-1
0
3
```

## 알고리즘 분류
- 자료 구조
- 큐

## 풀이

```js
const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

class Queue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.empty()) {
      return -1;
    }
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  empty() {
    return this.queue.length === 0 ? 1 : 0;
  }

  front() {
    if (this.empty()) {
      return -1;
    }
    return this.queue[0];
  }

  back() {
    if (this.empty()) {
      return -1;
    }
    return this.queue[this.queue.length - 1];
  }
}

function processCommands(commands) {
  let result = '';

  const queue = new Queue();

  for (const command of commands) {
    const [op, value] = command.split(' ');

    switch (op) {
      case 'push':
        queue.push(parseInt(value));
        break;
      case 'pop':
        result += `${queue.pop()}\n` ;
        break;
      case 'size':
        result += `${queue.size()}\n` ;
        break;
      case 'empty':
        result += `${queue.empty()}\n` ;
        break;
      case 'front':
        result += `${queue.front()}\n` ;
        break;
      case 'back':
        result += `${queue.back()}\n`;
        break;
    }
  }

  return result;
}

const numCommands = parseInt(input[0]);
const commands = input.slice(1);

// 명령 처리 및 출력
const output = processCommands(commands);
console.log(output);

```

> 이 풀이는 속도초과가 뜬다

## 개선된 풀이

```js
class Node{
  constructor(item){
    this.item = item;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item){
    const node = new Node(item)
    if(this.head===null){
      this.head= node;
      this.head.next = null;
    }else{
      this.tail.next = node;
    }

    this.tail = node;
    this.length +=1;
  }

  pop(){
      if(this.empty()==1) return -1
    const popItem = this.head;
    this.head = this.head.next;
    this.length -=1;
    return popItem.item;
  }

  size(){
    return this.length;
  }

  empty(){
    if(this.length==0){
      return 1;
    }else{
      return 0;
    }
  }

  front(){
    if(this.empty()==1) return -1;
    return this.head.item; 
  }

  back(){
    if(this.empty()==1) return -1;
    return this.tail.item; 
  }
}


let answer = [];
let queue = new Queue(); 
const command = arr.map(v=>v.split(' '));
command.forEach(v=>{
  switch(v[0]){
      case 'push':
          queue.push(v[1])
          break;
      case 'pop':
          answer.push(queue.pop());
          break;
      case 'size':
          answer.push(queue.size())
          break;
      case 'empty':
          answer.push(queue.empty())
          break;
      case 'front':
          answer.push(queue.front())
          break;
      case 'back':
          answer.push(queue.back())
          break;
  }
})

console.log(answer.join('\n'))
```

주어진 코드에서 사용된 구현은 링크드 리스트를 이용한 큐입니다. push 메서드에서는 노드를 생성하고, 해당 노드를 현재 큐의 tail에 연결합니다. popLeft 메서드에서는 head를 한 칸 앞으로 이동시키고, size를 감소시킵니다.

반면, 제가 작성한 코드는 배열을 이용한 큐입니다. push 메서드에서는 주어진 값을 배열에 추가하고, pop 메서드에서는 배열의 첫 번째 요소를 제거합니다. size 메서드는 배열의 길이를 반환합니다.

두 구현의 속도 차이는 다음과 같은 이유로 설명할 수 있습니다:

배열은 인덱스를 사용하여 요소에 직접 접근할 수 있습니다. 이에 반해 링크드 리스트는 요소에 접근하기 위해 순차적으로 탐색해야 합니다. 따라서 배열을 사용한 구현은 요소 접근에 있어서 더 빠릅니다.

배열은 메모리 상에 연속적으로 요소를 저장하므로 CPU 캐시 메모리의 효율을 높일 수 있습니다. 반면 링크드 리스트는 메모리의 임의의 위치에 노드가 존재하므로 CPU 캐시 메모리를 더 자주 접근해야 합니다.

배열을 사용한 구현은 요소의 추가와 제거가 상수 시간(O(1))에 이루어집니다. 링크드 리스트는 요소의 추가와 제거가 O(1) 시간이지만, 요소에 접근하기 위해 O(n) 시간이 소요됩니다.

따라서, 배열을 이용한 큐 구현은 링크드 리스트를 이용한 구현보다 요소의 접근과 추가/제거에 있어서 더 효율적이며, 속도에서 우월합니다.