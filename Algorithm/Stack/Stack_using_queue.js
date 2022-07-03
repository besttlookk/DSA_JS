// !==========Links
// * https://www.geeksforgeeks.org/implement-stack-using-queue/

// !========== Stack using two queues ==========

class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
  }

  push(a) {
    this.arr.push(a);
  }

  pop() {
    if (this.arr.length != this.front) {
      let x = this.arr[this.front];
      this.front++;
      return x;
    } else return -1;
  }

  front_ele() {
    return this.arr[this.front];
  }

  empty() {
    if (this.arr.length != this.front) return false;
    else return true;
  }
}

// !============Links
// * https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1/?page=1&category[]=Stack&sortBy=submissions

// !===============Method 1 ==============

class QueueStack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  //Function to push an element into stack using two queues.
  push(x) {
    while (!this.q1.empty()) {
      this.q2.push(this.q1.pop());
    }

    this.q1.push(x);

    while (!this.q2.empty()) {
      this.q1.push(this.q2.pop());
    }
  }

  //Function to pop an element from stack using two queues.
  pop() {
    return this.q1.pop();
  }
}
