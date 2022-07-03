// !============ Queue using two Stacks ====================
// * We are given a stack data structure with push and pop operations, the task is to implement a queue using instances of stack data structure and operations on them.
// * A queue can be implemented using two stacks
// !============Links ================
// * https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/queue-using-stacks/

// !================Method 1 (By making enQueue operation costly):===================
// *  This method makes sure that oldest entered element is always at the top of stack 1, so that deQueue operation just pops from stack1.
// * To put the element at top of stack1, stack2 is used.

// * enQueue(q, x):
// *  # While stack1 is not empty, push everything from stack1 to stack2.
// *  # Push x to stack1 (assuming size of stacks is unlimited).
// *  # Push everything back to stack1.
// * Here time complexity will be O(n)

// *  deQueue(q):
// *  # If stack1 is empty then error
// *  # Pop an item from stack1 and return it
//* Here time complexity will be O(1)

// *Note : pop() method does not return anything. Take the help of front( method)

// * Time Complexity:
// * Push operation: O(N).
// In the worst case we have empty whole of stack 1 into stack 2.
// * Pop operation: O(1).
// Same as pop operation in stack.
// * Auxiliary Space: O(N).
/*
class StackQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }



  //Function to push an element in queue by using 2 stacks.
  push(B) {
    while (!this.s1.empty()) {
      const temp = this.s1.front();
      this.s1.pop();
      this.s2.push(temp);
    }

    this.s1.push(B);

    while (!this.s2.empty()) {
      const temp = this.s2.front();
      this.s2.pop();
      this.s1.push(temp);
    }
  }


  //Function to pop an element from queue by using 2 stacks.
  pop() {
    if (this.s1.empty()) return -1;

    const poppedItem = this.s1.front();
    this.s1.pop();
    return poppedItem;
  }
}

*/

// !=====================Method 2(By making deQueue operation costly) ===============
// * Time Complexity:
//* Push operation: O(1).
// Same as pop operation in stack.
// *Pop operation: O(N).
// In the worst case we have empty whole of stack 1 into stack 2
// *Auxiliary Space: O(N).

class StackQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  //Function to push an element in queue by using 2 stacks.
  push(B) {
    this.s1.push(B);
  }

  //Function to pop an element from queue by using 2 stacks.
  pop() {
    if (this.s1.empty()) return -1;

    while (!this.s1.empty()) {
      const temp = this.s1.front();
      this.s1.pop();
      this.s2.push(temp);
    }

    const poppedEl = this.s2.front();
    this.s2.pop();

    while (!this.s2.empty()) {
      const temp = this.s2.front();
      this.s2.pop();
      this.s1.push(temp);
    }

    return poppedEl;
  }
}
