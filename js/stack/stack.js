/**
 * Stack implementation in JS.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    return this.items.pop();
  }

  push(el) {
    this.items.push(el);
  }

  peek() {
    return this.items[this.size() - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

