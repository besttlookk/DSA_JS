class MyQueue {
  constructor() {
    this.front = null; // QueueNode
    this.rear = null; // QueueNode
  }

  /**
   * @param {number} x
   */
  //Function to push an element into the queue.
  push(x) {
    const newNode = new QueueNode(x);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  /**
   * @returns {number}
   */
  //Function to pop front element from the queue.
  pop() {
    if (!this.front) return -1;

    const temp = this.front;
    this.front = temp.next;

    return temp.data;
  }
}
