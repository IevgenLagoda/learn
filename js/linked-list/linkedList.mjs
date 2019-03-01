import {defaultEquals} from './util.mjs';
import {Node} from './node.mjs';

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      if (position === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let previous = this.getElementAt(position - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    } else {
      return false;
    }
  }

  getElementAt(position) {
    if (position >= 0 && position <= this.count) {
      let node = this.head;
      for(let i = 0; i < position && node != null; i++) {
        node = node.next;
      }
      return node;
    } else {
      return undefined;
    }
  }

  remove(element) {
    this.removeAt(this.indexOf(element));
  }

  indexOf(element) {
    let current = this.head;
    for(let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(position) {
    if (position >= 0 && position <= this.count) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (!this.head) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for(let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

// Test.
const ll = new LinkedList();
ll.push(10);
ll.push(15);
ll.removeAt(0);
ll.push(20);
ll.insert(25, 0);
//ll.remove(25);
console.log(ll.toString());

