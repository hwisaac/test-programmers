# 이진 검색 트리

## 코드
```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}

```

위의 코드에서는 Node 클래스와 BinarySearchTree 클래스를 정의하고 있습니다. Node 클래스는 이진 트리의 각 노드를 나타내며, BinarySearchTree 클래스는 이진 탐색 트리를 구성하는 데 사용됩니다. BinarySearchTree 클래스에는 다양한 메서드가 있습니다.

- `insert(value)`: 주어진 값을 이진 탐색 트리에 삽입합니다.
- `search(value)`: 주어진 값을 이진 탐색 트리에서 검색합니다. 값이 존재하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
- `remove(value)`: 주어진 값을 이진 탐색 트리에서 제거합니다.
- `getRootNode()`: 이진 탐색 트리의 루트 노드를 반환합니다.
- `inorder(node)`: 중위 순회(inorder traversal)를 수행하여 이진 탐색 트리의 모든 노드 값을 출력합니다.
- `preorder(node)`: 전위 순회(preorder traversal)를 수행하여 이진 탐색 트리의 모든 노드 값을 출력합니다.
- `postorder(node)`: 후위 순회(postorder traversal)를 수행하여 이진 탐색 트리의 모든 노드 값을 출력합니다.

이 예시 코드를 사용하여 이진 탐색 트리를 생성하고 작업을 수행할 수 있습니다. 예를 들어:

```javascript
const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log("Inorder traversal:");
bst.inorder(bst.getRootNode());

console.log("Preorder traversal:");
bst.preorder(bst.getRootNode());

console.log("Postorder traversal:");
bst.postorder(bst.getRootNode());

console.log("Searching for value 6:", bst.search(6));
console.log("Searching for value 12:", bst.search(12));

bst.remove(6);

console.log("Inorder traversal after removing 6:");
bst.inorder(bst.getRootNode());
```

위의 코드를 실행하면 생성한 이진 탐색 트리에 대해 중위, 전위, 후위 순회를 수행한 결과와 값 6을 검색한 결과, 그리고 6을 제거한 후 중위 순회를 수행한 결과가 출력됩니다.

이진 탐색 트리는 삽입, 검색, 제거 작업에 대해 매우 효율적인 성능을 제공합니다. 그러나 이 예시 코드는 단순히 기본적인 구현을 보여주는 것이며, 실제 상황에 따라 추가적인 기능이 필요할 수 있습니다. 필요에 따라 코드를 수정하고 확장하여 사용하시면 됩니다.

