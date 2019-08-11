/**
 * JS implementation of tree.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.rootNode = null;
  }
}

class BST extends Tree {
  _insert(node, value) {
    if (node.value > value) {
      if (node.left == null) {
        node.left = new Node(value);
      } else {
        this._insert(node.left, value);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(value);
      } else {
        this._insert(node.right, value);
      }
    }
  }
  add(value) {
    const node = new Node(value);
    if (this.rootNode == null) {
      this.rootNode = node;
    } else {
      this._insert(this.rootNode, value);
    }
  }
  getMinHeight(node = this.rootNode) {
    if (node == null) {
      return -1;
    }
    const left = this.getMinHeight(node.left);
    const right = this.getMinHeight(node.right);
    return left < right ? left + 1 : right + 1;
  }
  getMaxHeight(node = this.rootNode) {
    if (node == null) {
      return -1;
    }
    const left = this.getMaxHeight(node.left);
    const right = this.getMaxHeight(node.right);
    return left > right ? left + 1 : right + 1;
  }
  isBalanced() {
    return this.getMaxHeight() - this.getMinHeight() <= 1;
  }
  inOrder() {
    function _inOrder(node) {
      node.left && _inOrder(node.left);
      resutls.push(node.value);
      node.right && _inOrder(node.right);
    }

    if (this.rootNode == null) {
      return null;
    }
    const resutls = [];
    _inOrder(this.rootNode);
    return resutls;
  }
  preOrder() {
    function _inOrder(node) {
      resutls.push(node.value);
      node.left && _inOrder(node.left);
      node.right && _inOrder(node.right);
    }

    if (this.rootNode == null) {
      return null;
    }
    const resutls = [];
    _inOrder(this.rootNode);
    return resutls;
  }
  postOrder() {
    function _inOrder(node) {
      node.left && _inOrder(node.left);
      node.right && _inOrder(node.right);
      resutls.push(node.value);
    }

    if (this.rootNode == null) {
      return null;
    }
    const resutls = [];
    _inOrder(this.rootNode);
    return resutls;
  }
  levelOrder() {
    const results = [];
    const Q = []; // Queue;
    if (this.rootNode == null) {
      return null;
    }
    Q.push(this.rootNode);
    while (Q.length > 0) {
      let node = Q.shift();
      results.push(node.value);
      node.left && Q.push(node.left);
      node.right && Q.push(node.right);
    }
    return results;
  }
}

// BST instanciate.
const bst = new BST();

// add new values.
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(12);
bst.add(14);
// console.log(bst);

// Height and balancing.
// console.log(bst.getMinHeight());
// console.log(bst.getMaxHeight());
// console.log(bst.isBalanced());

// Oerder.
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());
