class Stack {
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
    const size = this.getSize();
    if (!size) return null;

    return this.data[size - 1];
  }

  /**
   * Add a new element to the end of the queue.
   * @param {*} value
   * @returns {number}
   */
  push(value) {
    this.data.push(value);

    return this.getSize();
  }

  /**
   * Remove the element at the front of the queue
   * @returns {*}
   */
  pop() {
    const removedElement = this.data.pop();
    return removedElement ? removedElement : null;
  }
}
