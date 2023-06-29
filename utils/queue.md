## 배열을 이용한 큐

```js
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getSize() {
    return this.queue.length;
  }
}

```

위의 코드는 Queue 클래스를 사용하여 배열을 이용한 큐를 구현합니다. enqueue 메서드는 배열의 끝에 요소를 추가하고, dequeue 메서드는 배열의 첫 번째 요소를 제거하고 반환합니다. peek 메서드는 큐의 첫 번째 요소를 반환합니다. isEmpty 메서드는 큐가 비어 있는지 확인하고, getSize 메서드는 큐의 현재 크기를 반환합니다.

이 구현은 배열을 사용하여 큐를 구현하므로, **요소를 추가하고 제거하는 작업의 시간 복잡도는 O(1)입니다.** 따라서 배열을 이용한 큐는 우수한 성능을 제공합니다.



## slightly linked list 를 이용한 큐

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

```

> 위의 코드는 `Node` 클래스를 사용하여 각 요소를 표현하고, `Queue` 클래스를 사용하여 큐를 구현합니다. 

`enqueue` 메서드는 큐의 끝에 요소를 추가하고, 
`dequeue` 메서드는 큐의 맨 앞에서 요소를 제거하고 반환합니다. 
`peek` 메서드는 큐의 맨 앞에 있는 요소를 반환합니다. 
`isEmpty` 메서드는 큐가 비어 있는지 확인하고, 
`getSize` 메서드는 큐의 현재 크기를 반환합니다.

이 구현은 Slightly Linked List를 사용하여 큐를 구현하므로, **큐의 양쪽 끝에서 요소를 추가하고 제거하는 작업의 시간 복잡도는 O(1)입니다.** 따라서 우수한 성능을 제공합니다.

