// ! Min Heap is a COMPLETE-BINARY_TREE with each node having the value lowest to all its desecdent
class MinBinaryHeap {
  constructor() {
    this.heapContainer = [];
  }

  /**
   *
   * @param {number} parentIndex
   * @returns {number}
   */
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  /**
   *
   * @param {number} parentIndex
   * @returns {number}
   */
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  /**
   * @param {number} childIndex
   * @return {number}
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * @param {number} childIndex
   * @return {boolean}
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasLeftChild(parentIndex) {
    const leftIndex = this.getLeftChildIndex(parentIndex);
    return this.heapContainer.length > leftIndex;
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasRightChild(parentIndex) {
    const rightIndex = this.getRightChildIndex(parentIndex);
    return this.heapContainer.length > rightIndex;
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  getLeftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  getRightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  /**
   * @param {number} childIndex
   * @return {*}
   */
  getParent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  /**
   * Helper function
   * @param {*} value
   */
  bubbleUp(value) {
    let index = this.heapContainer.length - 1;
    while (index > 0) {
      const parent = this.getParent(index);
      if (parent <= value) break;
      const parentIndex = this.getParentIndex(index);

      this.swap(index, parentIndex);

      index = parentIndex;
    }
  }

  /**
   *
   * @param {*} value
   * @returns
   */
  insert(value) {
    this.heapContainer.push(value);
    this.bubbleUp(value);
    return this;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heapContainer.length;
    const element = this.heapContainer[0];

    while (true) {
      let leftIndex = this.getLeftChildIndex(index);
      let rightIndex = this.getRightChildIndex(index);
      let right, left;
      //! First we have to find with which index we have to swap(i.e with right child or left child)
      let swapIndex = null;

      if (leftIndex < length) {
        left = this.heapContainer[leftIndex];
        // if left is greater than than current element...swap
        if (left < element) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        right = this.heapContainer[rightIndex];

        if (
          (swapIndex === null && right < element) ||
          (swapIndex !== null && right < left)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;
      // if swapindex is found..swap with the current index
      this.swap(index, swapIndex);

      index = swapIndex;
    }
  }

  extractMin() {
    const min = this.heapContainer[0];
    const end = this.heapContainer.pop();

    if (this.heapContainer.length > 0) {
      this.heapContainer[0] = end;

      this.bubbleDown();
    }
    return min;
  }
}

const heap = new MinBinaryHeap();

heap.insert(19);
heap.insert(40);
heap.insert(10);
heap.insert(2);
heap.insert(50);
heap.insert(100);

console.log(heap.heapContainer);
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.heapContainer);
