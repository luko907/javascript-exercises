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

function LinkedList() {}

function Node(value) {}

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

function HashTable() {}
