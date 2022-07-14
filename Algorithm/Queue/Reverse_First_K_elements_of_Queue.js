// !==================Reverse First K elements of Queue ===========

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

// !====================Links ====================
// * https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/reversing-first-k-elements-queue/

// !================Method 1 ===================
// * The idea is to use an auxiliary stack.
//* # Create an empty stack.
//* # One by one dequeue first K items from given queue and push the dequeued items to stack.
//* # Enqueue the contents of stack at the back of the queue
//* # Dequeue (size-k) elements from the front and enqueue them one by one to the same queue.

// * Time Complexity: O(n+k).
// Where ‘n’ is the total number of elements in the queue and ‘k’ is the number of elements to be reversed. This is because firstly the whole queue is emptied into the stack and after that first ‘k’ elements are emptied and enqueued in the same way.
//* Auxiliary Space :Use of stack to store values for the purpose of reversing-: O(n)
function modifyQueue(q, k) {
  let size = q.arr.length - q.front;

  if (size === 0 || k > size) return;

  if (k <= 0) return;

  const s = [];
  let count = 0;

  while (count < k) {
    s.push(q.pop());
    count++;
  }

  while (s.length !== 0) {
    q.push(s.pop());
  }

  size = q.arr.length - q.front;

  count = 0;

  while (count < size - k) {
    q.push(q.pop());
    count++;
  }

  return q;
}
