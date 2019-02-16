/**
 * Stack implementation in JS.
 * With protected _items.
 */
class Stack {
  constructor() {
    this._items = Symbol('StackItems');
  }

  pop() {
    return this[_items].pop();
  }

  push(el) {
    this[_items].push(el);
  }

  peek() {
    return this[_items][this.size() - 1];
  }

  isEmpty() {
    return this[_items].length == 0;
  }

  clear() {
    this[_items] = [];
  }

  size() {
    return this[_items].length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

