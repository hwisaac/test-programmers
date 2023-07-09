# 최대 이진 힙(Max Binary Heap)

> 삽입 `O(logN)`, 삭제 `O(logN)`, 검색 `O(N)`


최대 이진 힙(Max Binary Heap)은 이진 트리의 한 종류로, 각 노드의 값이 해당 노드의 자식 노드들의 값보다 크거나 같은 특성을 갖습니다. 즉, 최대 이진 힙에서는 부모 노드의 값이 자식 노드의 값보다 항상 크거나 같습니다.

최대 이진 힙은 일반적으로 배열로 구현되며, 배열의 인덱스 0부터 시작합니다. 노드의 인덱스 i에 대해, 왼쪽 자식 노드의 인덱스는 2i+1이 되고, 오른쪽 자식 노드의 인덱스는 2i+2가 됩니다.

최대 이진 힙은 주로 우선순위 큐(Priority Queue)와 함께 사용되며, 효율적인 데이터 삽입, 삭제 연산을 제공합니다. 최대 이진 힙에서는 최대값(루트 노드)을 쉽게 얻을 수 있고, 삭제 연산을 통해 최대값을 효율적으로 제거할 수 있습니다. 또한, 새로운 값을 삽입할 때도 힙의 특성을 유지하면서 적절한 위치에 삽입할 수 있습니다.

새로운 값을 삽입하는 경우, 우선순위 큐에서는 새로운 값이 힙의 맨 끝에 추가됩니다. 그런 다음, 새로운 값을 부모 노드들과 비교하여 힙의 특성을 만족시키는 위치로 값을 올려줍니다(상향식 호출). 삭제 연산의 경우, 최대값은 루트 노드에 위치하므로 루트 노드를 제거하고, 힙의 맨 끝에 있는 값을 루트로 옮깁니다. 그런 다음, 자식 노드들과 비교하여 힙의 특성을 만족시키는 위치로 값을 내려줍니다(하향식 호출).

이러한 방식으로 최대 이진 힙은 효율적인 우선순위 큐의 구현을 제공하며, 다양한 응용 분야에서 사용될 수 있습니다.

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
```

주어진 코드는 최대 이진 힙(Max Binary Heap)을 구현하는 JavaScript 클래스입니다. 클래스는 `MaxBinaryHeap`이라는 이름으로 정의되며, 다음과 같은 기능을 제공합니다:

1. 생성자(constructor): `MaxBinaryHeap` 클래스의 인스턴스를 생성할 때 호출됩니다. 이 생성자는 `values`라는 빈 배열을 인스턴스 변수로 초기화합니다.

2. insert(element): 주어진 `element`를 최대 이진 힙에 삽입하는 메서드입니다. 삽입은 다음과 같은 단계로 이루어집니다:
   - `element`를 `values` 배열에 추가합니다.
   - `bubbleUp()` 메서드를 호출하여 `element`를 적절한 위치로 올려줍니다.
   - `bubbleUp()`: 새로운 요소가 삽입될 때, 해당 요소를 올바른 위치로 이동시키는 메서드입니다. 다음과 같은 단계로 작동합니다:

3. `idx` 변수를 배열의 마지막 인덱스로 초기화합니다.
   - `element` 변수에 `values[idx]` 값을 할당합니다.
   - 반복문을 사용하여 `element`를 부모 노드와 비교하고, 값이 부모보다 크다면 위치를 교환합니다.
   - `element`를 부모 노드로 이동시키고, idx를 부모 노드의 인덱스로 업데이트합니다.
   - `element`가 더 이상 부모보다 크지 않거나 루트 노드에 도달할 때까지 반복합니다.
이렇게 구현된 `MaxBinaryHeap` 클래스는 요소를 삽입하고, 이진 힙의 특성을 유지하는 메서드를 제공합니다. 이를 통해 최대값을 효율적으로 찾거나 제거할 수 있습니다.

# 우선순위 큐(Priority Queue)

우선순위 큐(Priority Queue)는 데이터를 저장하고 관리하는 추상 자료형(Abstract Data Type)입니다. 이 자료구조는 각 요소에 우선순위를 할당하고, 우선순위가 높은 요소에 먼저 접근할 수 있도록 합니다. 즉, 가장 높은 우선순위를 가진 요소가 항상 먼저 나오는 큐 형태를 가지고 있습니다.

우선순위 큐는 다양한 응용 분야에서 유용하게 활용될 수 있습니다. 예를 들어, 작업 스케줄링, 이벤트 처리, 그래프 알고리즘 등에서 사용될 수 있습니다.

일반적으로 우선순위 큐는 다음과 같은 연산을 지원합니다:

1. 삽입(Insertion): 요소를 큐에 삽입합니다. 각 요소는 우선순위 값과 함께 저장됩니다.

2. 삭제(Deletion): 가장 높은 우선순위를 가진 요소를 큐에서 제거합니다. 일반적으로 우선순위가 동일한 경우, 먼저 삽입된 요소가 우선적으로 제거됩니다.

3. 최대/최소 검색: 가장 높은 우선순위를 가진 요소를 검색합니다. 최대 우선순위 큐인 경우에는 최대값을, 최소 우선순위 큐인 경우에는 최소값을 검색합니다. 검색 연산은 요소를 제거하지 않습니다.

우선순위 큐는 다양한 방법으로 구현될 수 있습니다. 이진 힙(Binary Heap)은 효율적이고 널리 사용되는 구현 방법 중 하나입니다. 이진 힙을 사용하여 우선순위 큐를 구현할 경우, 요소의 삽입과 삭제 연산의 시간 복잡도는 O(log n)입니다. 이는 대부분의 상황에서 효율적인 동작을 제공합니다.

MaxBinaryHeap 클래스는 주어진 코드에서 우선순위 큐를 최대 이진 힙으로 구현한 예시입니다. 이 클래스를 사용하여 요소를 우선순위 큐에 삽입하고, 최대값을 효율적으로 검색하거나 삭제할 수 있습니다.

```js
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)

```

- PriorityQueue 클래스는 values라는 빈 배열을 인스턴스 변수로 가지고 있습니다.
- enqueue(val, priority) 메서드는 값을 우선순위 큐에 삽입합니다. Node 클래스의 인스턴스를 생성하여 값을 저장하고, bubbleUp() 메서드를 호출하여 적절한 위치로 요소를 이동시킵니다.
- bubbleUp() 메서드는 요소가 삽입될 때, 해당 요소를 올바른 위치로 이동시킵니다. 이진 힙의 bubbleUp() 메서드와 동일한 방식으로 동작합니다.
- dequeue() 메서드는 우선순위가 가장 높은 요소를 큐에서 제거하고 반환합니다. 가장 작은 우선순위 값을 가진 요소는 배열의 맨 앞에 위치하므로, 이를 제거하고 sinkDown() 메서드를 호출하여 힙의 특성을 유지합니다.
- sinkDown() 메서드는 요소를 아래로 내려가며 올바른 위치로 이동시킵니다. 이진 힙의 sinkDown() 메서드와 동일한 방식으로 동작합니다.
- Node 클래스는 값을 담고 있는 노드를 생성하는데 사용됩니다. 각 노드는 val과 priority를 속성으로 가집니다.

