// !==========Find median in a stream

// !=============links ==============
// * https://practice.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1?page=1&category[]=Heap&sortBy=submissions

class MinHeap {
  constructor() {
    this.size = 0;
    this.harr = new Array();
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  extract() {
    if (this.size === 0) {
      return -1;
    } else if (this.size === 1) {
      this.size--;
      return this.harr.pop();
    } else {
      const min = this.harr[0];
      this.harr[0] = this.harr[this.size - 1];
      this.harr.pop();
      this.size--;

      this.heapify(0);

      return min;
    }
  }

  insert(k) {
    this.harr.push(k);
    this.size++;

    if (this.size === 1) return;

    let curr = this.size - 1;
    while (curr > 0 && this.harr[curr] < this.harr[this.parent(curr)]) {
      // * Swap
      const temp = this.harr[curr];
      this.harr[curr] = this.harr[this.parent(curr)];
      this.harr[this.parent(curr)] = temp;

      curr = this.parent(curr);
    }
  }

  heapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (l < this.heap_size && this.harr[l] < this.harr[i]) smallest = l;
    if (r < this.heap_size && this.harr[r] < this.harr[smallest]) smallest = r;
    if (smallest != i) {
      // * SWAP
      let temp = this.harr[i];
      this.harr[i] = this.harr[smallest];
      this.harr[smallest] = temp;
      // * Recursive call
      this.heapify(smallest);
    }
  }

  top() {
    return this.harr[0];
  }
}

class MaxHeap {
  constructor() {
    this.size = 0;
    this.harr = new Array();
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  extract() {
    if (this.size === 0) {
      return -1;
    } else if (this.size === 1) {
      this.size--;
      return this.harr.pop();
    } else {
      const max = this.harr[0];
      this.harr[0] = this.harr[this.size - 1];
      this.harr.pop();
      this.size--;

      this.heapify(0);

      return max;
    }
  }

  insert(k) {
    this.harr.push(k);
    this.size++;

    if (this.size === 1) return;

    let curr = this.size - 1;
    while (curr > 0 && this.harr[curr] > this.harr[this.parent(curr)]) {
      // * Swap
      const temp = this.harr[curr];
      this.harr[curr] = this.harr[this.parent(curr)];
      this.harr[this.parent(curr)] = temp;

      curr = this.parent(curr);
    }
  }

  heapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let largest = i;
    if (l < this.heap_size && this.harr[l] > this.harr[i]) largest = l;
    if (r < this.heap_size && this.harr[r] > this.harr[smallest]) largest = r;
    if (largest != i) {
      // * SWAP
      let temp = this.harr[i];
      this.harr[i] = this.harr[largest];
      this.harr[largest] = temp;
      // * Recursive call
      this.heapify(largest);
    }
  }

  top() {
    return this.harr[0];
  }
}

class Solution {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }
  // Function to insert heap
  insertHeap(x) {
    // * If no item yet added
    if (this.maxHeap.size === 0) {
      this.maxHeap.insert(x);
      return;
    }

    if (this.maxHeap.size > this.minHeap.size) {
      if (x < this.maxHeap.top()) {
        this.minHeap.insert(this.maxHeap.top());
        this.maxHeap.extract();
        this.maxHeap.insert(x);
      } else {
        this.minHeap.insert(x);
      }
    }

    // When size is equal
    else {
      if (x < this.maxHeap.top()) {
        this.maxHeap.insert(x);
      } else {
        this.minHeap.insert(x);
        this.maxHeap.insert(this.minHeap.top());
        this.minHeap.extract();
      }
    }
  }

  // function to getMedian
  getMedian() {
    if (this.maxHeap.size === this.minHeap.size) {
      return (this.maxHeap.top() + this.minHeap.top()) / 2;
    }

    return this.maxHeap.top();
  }
}

// const arr = [5, 15, 1, 3];
// const n = 4;

const arr = [5, 10, 15];
const n = 3;
const s = new Solution();
for (let i = 0; i < n; i++) {
  s.insertHeap(arr[i]);
  console.log(s.getMedian());
}
