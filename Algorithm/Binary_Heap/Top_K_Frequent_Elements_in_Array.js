// !======Top K Frequent Elements in Array

/**
 * @param {Number[]} arr
 * @param {Number} k
 * @returns {Number}
 */

// !=============links ============
// * https://practice.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1
// * https://www.geeksforgeeks.org/find-k-most-frequent-in-linear-time/
// * https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/

// !=====================Method 1(Hashmap + sorting) =============
/*
function topK(arr, k) {
  const mp = new Map();
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (!mp.has(arr[i])) mp.set(arr[i], 1);
    else {
      const oldVal = mp.get(arr[i]);
      mp.set(arr[i], oldVal + 1);
    }
  }

  const list = [...mp]; //* array of [ele, freq]

  // * sort list according to freq
  list.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let count = 0;
  const ans = [];

  while (count < k) {
    const ele = list.pop();
    ans.push(ele[0]);
    count++;
  }

  return ans;
}
*/
// !===============Method 1(min heap)

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

    if (this.size === 1) return;
    let curr = this.size - 1;

    // * Percolate Up
    while (curr > 0 && this.arr[curr][1] < this.arr[this.getParent(curr)][1]) {
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

    if (l < this.size && this.arr[minIndex][1] > this.arr[l][1]) minIndex = l;
    if (r < this.size && this.arr[minIndex][1] > this.arr[r][1]) minIndex = r;

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

function topK(arr, k) {
  const mp = new Map();
  const n = arr.length;
  const heap = new MinHeap();

  for (let i = 0; i < n; i++) {
    if (!mp.has(arr[i])) mp.set(arr[i], 1);
    else {
      const oldVal = mp.get(arr[i]);
      mp.set(arr[i], oldVal + 1);
    }
  }

  for (let ele of mp) {
    heap.insert(ele);

    if (heap.size > k) {
      heap.extractMin();
    }
  }
  const ans = [];

  while (heap.arr.length) {
    const item = heap.arr.pop();
    ans.push(item[0]);
  }

  return ans;
}
console.log(topK([1, 1, 1, 2, 2, 3], 2));
