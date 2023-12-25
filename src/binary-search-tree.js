const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return this.searchNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  remove(data) {
  this.rootNode = this.removeNode(this.rootNode, data);
}

removeNode(node, key) {
  if (node === null) {
    return null;
  } else if (key < node.data) {
    node.left = this.removeNode(node.left, key);
    return node;
  } else if (key > node.data) {
    node.right = this.removeNode(node.right, key);
    return node;
  } else {
    // Node with only one child or no child
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

    // Node with two children
    const minRight = this.findMinNode(node.right);
    node.data = minRight.data;
    node.right = this.removeNode(node.right, minRight.data);
    return node;
  }
}

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }
  
  max() {
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};