class Heap {
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
    const length = this.data.length;
    if (length < 2) return item;

    this.data.unshift(this.data.pop());

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
      console.log({ swapIndex });
      if (swapIndex === null) break;

      this.swap(index, swapIndex);

      index = swapIndex;
      swapIndex = null;
    }

    return item;
  }
}

const hp = new Heap();

hp.insert(20);
hp.insert(10);
hp.insert(30);
hp.insert(60);
console.log(hp.data);

console.log(hp.delete());
console.log(hp.delete());

console.log(hp.data);
