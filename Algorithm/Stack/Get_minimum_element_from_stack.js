// !============= Design a stack that supports getMin() in O(1) time and O(1) extra space

// !================= Links ===============
// * https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/

// !=============Solution
// * We define a variable minEle that stores the current minimum element in the stack.
// * the interesting part is, how to handle the case when minimum element is removed. To handle this, we push “2x – minEle” into the stack instead of x so that previous minimum element can be retrieved using current minEle and its value stored in stack.

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.top = null;
    this.count = 0;
    this.minimum = null;
  }

  /**
   * @param {number} x
   */

  /* The method push to push element into the stack */
  push(x) {
    // * If stack is empty, insert x into the stack and make minEle equal to x.
    if (!this.top) {
      const newNode = new Node(x);
      this.top = newNode;
      this.minimum = newNode.data;
    }
    // * If stack is not empty, compare x with minEle. Two cases arise
    // * If x is greater than or equal to minEle, simply insert x.
    // * If x is less than minEle, insert (2*x – minEle) into the stack and make minEle equal to x. For example, let previous minEle was 3. Now we want to insert 2. We update minEle as 2 and insert 2*2 – 3 = 1 into the stack.
    else if (x < this.minimum) {
      const temp = 2 * x - this.minimum;
      const newNode = new Node(temp);
      newNode.next = this.top;
      this.top = newNode;
      this.minimum = x;
    } else {
      const newNode = new Node(x);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  /**
   * @returns {number}
   */

  /*The method pop which return the element poped out of the stack*/
  pop() {
    //* Remove element from top. Let the removed element be y. Two cases arise:
    // * If y is greater than or equal to minEle, the minimum element in the stack is still minEle.
    // * If y is less than minEle, the minimum element now becomes (2*minEle – y), so update (minEle = 2*minEle – y). This is where we retrieve previous minimum from current minimum and its value in stack. For example, let the element to be removed be 1 and minEle be 2. We remove 1 and update minEle as 2*2 – 1 = 3.
    if (!this.top) return null; //* stack empty
    else {
      let removedEl = this.top;
      this.top = this.top.next;

      // * Since removedEl is less than the minimum element the original number being removed is minEle
      if (removedEl.data < this.minimum) {
        const oldMin = this.minimum;
        this.minimum = 2 * this.minimum - removedEl.data;
        return oldMin;
      }

      return removedEl.data;
    }
  }

  /**
   * @returns {number}
   */

  /*The method getMin() which return the minimum element of the stack*/
  getMin() {
    if (!this.top) return -1;
    else return this.minimum;
  }
}
