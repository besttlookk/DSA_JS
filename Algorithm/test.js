class MaxHeap {
  constructor() {
    this.data = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  swap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  insert(val) {
    this.data.push(val);

    let index = this.data.length - 1;
    while (index >= 0) {
      let parentIndex = this.getParentIndex(index);

      if (this.data[index] > this.data[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  delete() {
    // ! takeout first element and replace it with last element
    const item = this.data.shift();
    this.data.unshift(this.data.pop());
    const length = this.data.length;

    if (length < 2) return item;

    let index = 0;
    let swapIndex = null;
    let leftChildIndex, rightChildIndex, leftChild, rightChild, parent;

    while (true) {
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
      parent = this.data[index];
      leftChild = this.data[leftChildIndex];
      rightChild = this.data[rightChildIndex];

      if (leftChildIndex < length && leftChild > parent) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        ((swapIndex === null && rightChild > parent) ||
          (swapIndex !== null && rightChild > leftChild))
      ) {
        swapIndex = rightChildIndex;
      }
      if (swapIndex === null) break;

      this.swap(index, swapIndex);

      index = swapIndex;
      swapIndex = null;
    }

    return item;
  }
}

function kthSmallest(arr, l, r, k) {
  const heap = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);

    if (heap.data.length > k) {
      heap.delete();
    }
  }

  return heap.data[0];
}

console.log(kthSmallest([7, 10, 4, 20, 15], 0, 0, 4));
