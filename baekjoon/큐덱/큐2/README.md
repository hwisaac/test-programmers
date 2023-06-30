## 문제
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

- `push X`: 정수 `X`를 큐에 넣는 연산이다.
- `pop`: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 `-1`을 출력한다.
- `size`: 큐에 들어있는 정수의 개수를 출력한다.
- `empty`: 큐가 비어있으면 `1`, 아니면 `0`을 출력한다.
- `front`: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
- `back`: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

## 입력
첫째 줄에 주어지는 명령의 수 `N` (`1 ≤ N ≤ 2,000,000`)이 주어진다. 둘째 줄부터 `N`개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 `1`보다 크거나 같고, `100,000`보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

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
> 배열을 이용한 큐 (속도 초과)


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

## 개선된 풀이
[큐(Queue) 구현 vs Array 메서드(shift, splice) 사용했을때 속도 비교](https://velog.io/@grap3fruit/JS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84-%ED%81%90Queue-%EA%B5%AC%ED%98%84%ED%96%88%EC%9D%84%EB%95%8C-vs-Array-%EB%A9%94%EC%84%9C%EB%93%9Cshift-splice-%EC%82%AC%EC%9A%A9%ED%96%88%EC%9D%84%EB%95%8C-%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90)

> slightly linked list 를 이용한 큐


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

주어진 코드에서 사용된 구현은 링크드 리스트를 이용한 큐입니다. `push` 메서드에서는 노드를 생성하고, 해당 노드를 현재 큐의 `tail`에 연결합니다. `popLeft` 메서드에서는 `head`를 한 칸 앞으로 이동시키고, `size`를 감소시킵니다.

반면, 제가 작성한 코드는 배열을 이용한 큐입니다. `push` 메서드에서는 주어진 값을 배열에 추가하고, `pop` 메서드에서는 배열의 첫 번째 요소를 제거합니다. `size` 메서드는 배열의 길이를 반환합니다.

두 구현의 속도 차이는 다음과 같은 이유로 설명할 수 있습니다:

- 메모리 할당: Slightly linked list의 큐는 노드를 동적으로 할당하며, 필요에 따라 노드를 생성하고 삭제합니다. 반면에 배열을 사용한 큐는 초기에 정적으로 배열을 할당하고, 큐의 크기가 변경되더라도 메모리 재할당이 필요합니다. 동적 메모리 할당은 메모리 관리의 오버헤드가 발생할 수 있기 때문에, Slightly linked list의 큐가 더 비효율적일 수 있습니다. 그러나 이는 일반적인 경우이며, 특정한 상황에서는 Slightly linked list로 구현된 큐가 배열로 구현된 큐보다 빠를 수 있습니다. 예를 들어, 큐의 크기가 자주 변하거나 큐의 크기가 매우 큰 경우에는 동적 메모리 할당의 오버헤드가 상대적으로 미미해질 수 있습니다.

- 캐시 효율성: Slightly linked list는 요소들이 메모리에 연속적으로 저장되지 않습니다. 그러나 Slightly linked list는 노드들이 동적으로 생성되고 삭제되므로, CPU 캐시의 효율성을 높일 수 있습니다. 반면에 배열은 연속적으로 요소가 저장되어 있기 때문에 CPU 캐시 메모리의 효율성이 더 높을 수 있습니다. 따라서 실제 하드웨어 환경과 사용 패턴에 따라 Slightly linked list의 큐가 더 빠를 수도 있습니다.

- 요소 삽입/제거: Slightly linked list의 큐에서는 요소를 삽입하거나 제거할 때, 노드의 연결을 조정하는 작업만 수행하면 됩니다. 반면에 배열을 사용한 큐에서는 요소를 삽입 또는 제거할 때, 배열의 요소를 이동시키는 작업이 필요합니다. 이러한 작업은 배열의 길이에 비례하여 시간이 소요되므로, Slightly linked list의 큐가 요소 삽입/제거 작업에서 더 빠를 수 있습니다.

- Slightly linked list로 구현된 큐가 배열로 구현된 큐보다 더 빠를 수 있는 상황은 위와 같은 이유로 설명될 수 있습니다. 그러나 일반적인 상황에서는 배열을 사용한 큐가 메모리 효율성과 캐시 효율성에서 우수하며, 요소의 접근과 추가/제거 작업에 있어서도 일반적으로 빠릅니다.

- 배열은 인덱스를 사용하여 요소에 직접 접근할 수 있습니다. 이에 반해 링크드 리스트는 요소에 접근하기 위해 순차적으로 탐색해야 합니다. 따라서 배열을 사용한 구현은 요소 접근에 있어서 더 빠릅니다.

- 배열은 메모리 상에 연속적으로 요소를 저장하므로 CPU 캐시 메모리의 효율을 높일 수 있습니다. 반면 링크드 리스트는 메모리의 임의의 위치에 노드가 존재하므로 CPU 캐시 메모리를 더 자주 접근해야 합니다.

- 배열을 사용한 구현은 요소의 추가와 제거가 상수 시간(`O(1)`)에 이루어집니다. 링크드 리스트는 요소의 추가와 제거가 `O(1)` 시간이지만, 요소에 접근하기 위해 `O(n)` 시간이 소요됩니다.

따라서, 배열을 이용한 큐 구현은 링크드 리스트를 이용한 구현보다 요소의 접근과 추가/제거에 있어서 더 효율적이며, 속도에서 우월합니다.