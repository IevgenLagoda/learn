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

  }

  getElementAt(position) {

  }

  remove(element) {

  }

  indexOf(element) {

  }

  removeAt(position) {
    if (position >= 0 && position <= this.count) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let previous;
        for(let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }
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

  toString() {

  }
}

// Test.
const ll = new LinkedList();
ll.push(10);
ll.push(15);
ll.removeAt(0);
console.log(ll);