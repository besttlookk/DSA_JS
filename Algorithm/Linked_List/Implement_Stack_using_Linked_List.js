// !=======Links==
// * https://practice.geeksforgeeks.org/problems/implement-stack-using-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !==========Method 1

class StackNode {
  constructor(a) {
    this.data = a;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.top = null;
  }

  //Function to push an integer into the stack.
  push(a) {
    const newNode = new StackNode(a);
    newNode.next = this.top;
    this.top = newNode;
  }

  /**
   */

  //Function to remove an item from top of the stack.
  pop() {
    if (!this.top) return -1;
    const removedNode = this.top;
    this.top = removedNode.next;

    return removedNode.data;
  }
}
