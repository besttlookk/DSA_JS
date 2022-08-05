// !=================Last Stone Weight

/**
 * @param {number[]} stones
 * @return {number}
 */

// !==================Links =============
// * https://leetcode.com/problems/last-stone-weight/

// !==============Solution

class MaxHeap {
  constructor() {
    this.arr = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  extractMax() {
    if (this.arr.length === 0) return -1;
    else if (this.arr.length === 1) return this.arr.pop();
    else {
      const max = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.maxHeapify(0);

      return max;
    }
  }

  maxHeapify(i) {
    const l = this.getLeftIndex(i);
    const r = this.getRightIndex(i);
    let maxIndex = i;

    if (l < this.arr.length && this.arr[l] > this.arr[maxIndex]) maxIndex = l;
    if (r < this.arr.length && this.arr[r] > this.arr[maxIndex]) maxIndex = r;

    if (maxIndex !== i) {
      const temp = this.arr[maxIndex];
      this.arr[maxIndex] = this.arr[i];
      this.arr[i] = temp;

      this.maxHeapify(maxIndex);
    }
  }

  insert(x) {
    this.arr.push(x);

    let currIndex = this.arr.length - 1;

    while (
      currIndex >= 0 &&
      this.arr[currIndex] > this.arr[this.getParent(currIndex)]
    ) {
      const temp = this.arr[currIndex];
      this.arr[currIndex] = this.arr[this.getParent(currIndex)];
      this.arr[this.getParent(currIndex)] = temp;

      currIndex = this.getParent(currIndex);
    }
  }
}

var lastStoneWeight = function (stones) {
  const heap = new MaxHeap();
  let n = stones.length;

  for (let i = 0; i < n; i++) {
    heap.insert(stones[i]);
  }

  while (n > 1) {
    const first = heap.extractMax();
    const second = heap.extractMax();

    if (first - second > 0) {
      heap.insert(first - second);
      n++;
    }
    n -= 2;
  }

  if (heap.arr.length > 0) return heap.extractMax();

  return 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
