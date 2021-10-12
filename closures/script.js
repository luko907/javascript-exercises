"use strict";

function counter() {
  //Returns a function that when invoked returns an increasing value.
  //the first value should be 1.
  //You are going to have to use closures.
  //example: const newCounter = counter ();
  //newCounter (); // 1
  //newCounter (); // 2
}

function cacheFunction(cb) {
  //Use closures to create a cache for the cb function.
  //the function you return must accept a single argument and invoke cb with that argument
  //when the function you returned is invoked again, it should save the argument and the result of the invocation
  //when the function you returned is invoked again with an argument with which it was previously invoked, it should not invoke cb again
  //should return the result (previously saved)
  //Example:
  //cb -> function (x) {return x * x; }
  //If you invoke the function that you returned with 5, inside it should invoke cb (5) and return 25.
  //if you invoke it again with 5, it should return 25 (previously cached)
  //Tips, use an object where each property is an argument, and the value is the result.
  //use hasOwnProperty!
}

// Bind

var carBrand = {
  name: "Ford",
  employees: 500,
};

var model = {
  name: "Mustang",
  engine: "3.0, turbo",
};

function getName() {
  return this.name;
}

let getNameCarBrand = "";
let getNameModel = "";

/* Save in the next three variables a function that returns a string using the "createString" function
and the specified delimiter. The idea is to do it with the bind function to be able to use it again multiple times later:

1. textAsterisk
2. textScript
3. textUnderscore

This will allow us to call, for example, the "textAsterisk" method, only passing it one argument instead of the three that "createString" receives.
*/
function createString(left, right, string) {
  return left + string + right;
}

let textAsterisk = "";

let textScript = "";

let textUnderscore = "";
