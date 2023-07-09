const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N , ...datas ] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
  // Run by Node.js


  class Stack {
    constructor() {
      this.maxSize = 10;
      this.stack = [];
    }

    push(data) {
      if (this.stack.length >= this.maxSize) {
        console.log('overflow');
      } else {
        this.stack.push(data);
      }
    }
    pop(data) {
      if (this.stack.length === 0) {
        console.log('underflow');
      }
      return this.stack.pop();
    }
    printStack() {
      console.log(this.stack.join(' '));
    }
  }
  
  const stack = new Stack();

