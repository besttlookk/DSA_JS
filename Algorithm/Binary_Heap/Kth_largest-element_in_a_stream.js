// !=================Kth largest element in a stream ==================
//* Use of minHeap

// !===============links
// * https://practice.geeksforgeeks.org/problems/kth-largest-element-in-a-stream2220/1?page=1&category[]=Heap&sortBy=submissions
// * https://leetcode.com/problems/kth-largest-element-in-a-stream/
// * https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/

// !==================Solution ===================
class MinHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
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

  insert(x) {
    this.arr.push(x);
    this.size++;

    let curr = this.arr.length - 1;
    // * Percolate Up
    while (curr >= 0 && this.arr[curr] < this.arr[this.getParent(curr)]) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[this.getParent(curr)];
      this.arr[this.getParent(curr)] = temp;

      curr = this.getParent(curr);
    }
  }

  extractMin() {
    if (this.size === 0) return -1;
    else if (this.size === 1) {
      this.size--;
      return this.arr.pop();
    } else {
      const min = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.size--;

      this.heapify(0);

      return min;
    }
  }

  heapify(i) {
    const l = this.getLeftIndex(i);
    const r = this.getRightIndex(i);
    let minIndex = i;

    if (l < this.size && this.arr[minIndex] > this.arr[l]) minIndex = l;
    if (r < this.size && this.arr[minIndex] > this.arr[r]) minIndex = r;

    if (minIndex !== i) {
      const temp = this.arr[minIndex];
      this.arr[minIndex] = this.arr[i];
      this.arr[i] = temp;

      this.heapify(minIndex);
    }
  }

  peek() {
    return this.arr[0];
  }
}

function kthLargest(arr, k, n) {
  const h = new MinHeap();
  const ans = [];

  for (let i = 0; i < n; i++) {
    h.insert(arr[i]);

    if (h.size < k) {
      ans[i] = -1;
    } else if (h.size > k) {
      h.extractMin();
      ans[i] = h.peek();
    } else {
      ans[i] = h.peek();
    }
  }

  return ans;
}

console.log(kthLargest([1, 2, 3, 4, 5, 6], 4, 6));
