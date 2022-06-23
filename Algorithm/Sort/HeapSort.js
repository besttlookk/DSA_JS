//! It is a two step process: 1. Create heap from the given array | 2. Remove element from heap

class Heap {
  constructor() {
    this.data = [];
  }

  swap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(parentindex) {
    return 2 * parentindex + 1;
  }

  getRightChildIndex(parentindex) {
    return 2 * parentindex + 2;
  }

  insert(element) {
    this.data.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.data.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.data[parentIndex] > this.data[index]) return;

      // swap
      this.swap(index, parentIndex);

      index = parentIndex;
    }
  }

  delete() {
    const max = this.data[0];
    const end = this.data.pop();

    if (this.data.length > 0) {
      this.data[0] = end;

      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    const length = this.data.length;
    const element = this.data[0];

    while (true) {
      let leftIndex = this.getLeftChildIndex(index);
      let rightIndex = this.getRightChildIndex(index);
      let right, left;
      let swapIndex = null;

      if (leftIndex < length) {
        left = this.data[leftIndex];
        // if left is greater than than current element...swap
        if (left > element) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        right = this.data[rightIndex];

        if (
          (swapIndex === null && right > element) ||
          (swapIndex !== null && right > left)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;
      this.swap(index, swapIndex);

      index = swapIndex;
    }
  }
}

// ! convert Array into heap
function arrayToHeap(arr) {
  const heap = new Heap();
  arr.forEach((el) => heap.insert(el));

  return heap;
}

function heapSort(arr) {
  const sortedArr = [];
  const heap = arrayToHeap(arr);

  while (heap.data.length !== 0) {
    sortedArr.unshift(heap.delete());
  }

  return sortedArr;
}

console.log(heapSort([10, 20, 30, 4, 1, 100]));
