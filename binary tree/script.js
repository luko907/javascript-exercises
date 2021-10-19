"use strict";

// Binary Seach Tree
// 'has methods called `insert`,` contains`, `depthFirstForEach`,' breadthFirstForEach 'and' size '
// run depth-first (in "in-order" traversal) when depthFirstForEach () is executed without any option or with the "in-order option
// run depth-first (in "pre-order" path) when depthFirstForEach () is executed with the "pre-order" option
// run depth-first (in "post-order" traversal when depthFirstForEach () is executed with the "post-order" option
// run breadth-first when breadthFirstForEach () is executed

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
var arbol = new BinarySearchTree(20);

BinarySearchTree.prototype.insert = function (data) {
  if (data > this.value) {
    if (this.right === null) return (this.right = new BinarySearchTree(data));
    else {
      this.right.insert(data);
    }
  } else if (data < this.value) {
    if (this.left === null) return (this.left = new BinarySearchTree(data));
    else {
      this.left.insert(data);
    }
  }
};

BinarySearchTree.prototype.contains = function (argumento) {
  if (this.value === argumento) {
    return true;
  }
  if (argumento < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(argumento);
  }
  if (argumento > this.value) {
    if (this.right === null) {
      return false;
    }

    return this.right.contains(argumento);
  }
};
