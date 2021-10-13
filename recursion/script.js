"use strict";

function nFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * nFactorial(n - 1);
}

function nFibonacci(n) {
  // Sequence Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Returns the nth number of the series
  // nFibonacci(0) // 0  // element 0 is 0
  // nFibonacci(1) // 1 // element 1 is 1
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

//enqueue: Add a value to the queue. Respect the existing order.
//dequeue: Removes a value from the queue. It obeys FIFO and respects the underflow (it returns undefined when the queue has size zero, that is, when it has no element).
//size: Returns the number of elements that the queue contains.

function Queue() {}
