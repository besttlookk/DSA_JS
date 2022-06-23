// !============== Links ===========================
// * https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/stack-data-structure-introduction-program/

// ! IMORTANT POINTS
// * Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
// *  Some of its main operations are: push(), pop(), top(), isEmpty(), size(), etc
// * Pros: Easy to implement. Memory is saved as pointers are not involved.
// * Cons: It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.

// !Time Complexities of operations on the stack:
// * push(), pop(), isEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.

let t = -1; //* it represt top of the stack
const MAX = 1000;
const stack = Array(MAX).fill(0); //* Max size of stack

function isEmpty() {
  return t < 0;
}

function push(val) {
  // * First check if stack is full of not
  if (t >= MAX - 1) return false;

  t++;
  stack[t] = val;
  return true;
}

function pop() {
  // * First check if stack is empty or not
  if (t < 0) return null;
  const removed = stack[t];
  t--;
  return removed;
}

function peek() {
  if (t < 0) return null;
  return stack[t];
}

function print() {
  for (i = t; i >= 0; i--) {
    console.log(stack[t]);
  }
}
