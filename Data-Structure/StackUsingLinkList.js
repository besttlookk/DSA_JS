const LinkedList = require("./LinkList");

class Stack {
  constructor() {
    this.linkedlist = new LinkedList();
  }

  getSize() {
    return this.linkedList.getSize();
  }

  /**
   * To check if the queue is empty or not
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Read the element at the front pf the queue without removing it.
   * @returns {*}
   */
  peek() {
    if (!this.getSize()) return null;

    return this.linkedList.tail.value;
  }

  /**
   * Add a new element to the end of the queue.
   * @param {*} value
   * @returns {number}
   */
  enqueue(value) {
    this.linkedList.append(value);

    return this.getSize();
  }

  /**
   * Remove the element at the front of the queue
   * @returns {*}
   */
  dequeue() {
    const removedElement = this.linkedList.deleteTail();
    return removedElement ? removedElement : null;
  }
}
