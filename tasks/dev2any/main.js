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

/**
 * Convert decimal to any basis.
 * @param {number} decNum
 * @param {number} base 2-36
 */
function convert(decNum, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNum;
  let rem = 0;
  let baseStr = '';

  if (base < 2 || base > 36) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEMpty) {
    baseStr += digits[remStack.pop()];
  }

  return baseStr;
}

console.log(convert(10, 4));