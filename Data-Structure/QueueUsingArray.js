class Queue {
  constructor() {
    this.data = [];
  }

  getSize() {
    return this.data.length;
  }

  /**
   * To check if the queue is empty or not
   * @returns {boolean}
   */
  isEmpty() {
    return !this.data.length;
  }

  /**
   * Read the element at the front pf the queue without removing it.
   * @returns {*}
   */
  peek() {
    if (!this.getSize()) return null;

    return this.data[0];
  }

  /**
   * Add a new element to the end of the queue.
   * @param {*} value
   * @returns {number}
   */
  enqueue(value) {
    this.data.push(value);

    return this.getSize();
  }

  /**
   * Remove the element at the front of the queue
   * @returns {*}
   */
  dequeue() {
    const removedElement = this.data.shift();
    return removedElement ? removedElement : null;
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

console.log(q);
console.log(q.peek());
