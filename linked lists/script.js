"use strict";
//Implement the LinkedList class
//has `add`,` remove`, and `search` methods
//add: Add a new node at the end of the list
//Ex: Head -> null
//add (1): Head -> 1 -> null
//add (2): Head -> 1 -> 2 -> null
//remove: Removes the last node from the list and returns its value. (Take into account the particular case of a single node list and an empty list)
//Ex: Head -> 1
//remove (): Head -> null and returns 1
//search: Search for a value within the list. It can receive a value or a function. If there are no results, it returns null.

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = function (val) {
  var current = this.head;
  var node = new Node(val);
  if (!current) {
    this.head = node;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};
LinkedList.prototype.remove = function () {
  var current = this.head;
  var size = this._length;
  var count = 0;

  if (!current) {
    return null;
  }
  while (current) {
    if (size === 0) {
      var del = current.value;
      this.head = null;
      return del;
    }
    if (count === size - 1) {
      var del = current.next.value;
      current.next = null;
      this._length = this._length - 1;
      return del;
    }
    if (size === 1 && !current) {
      var del = current.next.value;
      this.head = null;
      return del;
    }
    current = current.next;
    count = count + 1;
  }
};
LinkedList.prototype.search = function (arg) {
  var current = this.head;
  //entrar en el nodo
  if (!current) {
    return null;
  }
  while (current) {
    if (typeof arg === "function") {
      if (arg(current.value)) {
        return current.value;
      }
    } else {
      if (current.value === arg) {
        return arg;
      }
    }

    current = current.next;
  }
  return null;
};
//Hash Table (see information at: https: es.wikipedia.org/wiki/Tabla_hash)
//A hash table contains an array of "containers" or buckets where you can store information.
//For this exercise, generate 35 buckets for the Hash Table, and perform the methods, get, hasKey
//To store a value associated with a key (string):
//  - This value is passed to the hash function (Hint: use the charCodeAt function), which determines the position it should go in the array.
//  - Then the element is inserted (by calling the set method) at the returned position (index).
//To find the value by its key:
//- You will only have to pass the key of the element to search to the hash function and this will determine the position
// where it is.
// - Use the number obtained, to search (by calling the get method) the container or bucket where the value is.
//- Return said value.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (value) {
  var result = 0;

  for (let i = 0; i < value.length; i++) {
    result += value.charCodeAt(i);
  }
  return (result = result % this.numBuckets);
};
HashTable.prototype.set = function (key1, value1) {
  if (typeof key1 !== "string") throw new TypeError("Keys must be strings");
  var result = this.hash(key1);
  if (!this.buckets[result]) {
    this.buckets[result] = {};
  }
  this.buckets[result][key1] = value1;
};
HashTable.prototype.get = function (key1) {
  var result = this.hash(key1);
  return this.buckets[result][key1];
};
HashTable.prototype.hasKey = function (key1) {
  var result = this.hash(key1);
  if (this.buckets[result][key1]) {
    return true;
  } else {
    return false;
  }
};
