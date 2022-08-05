// !=================Kth smallest element element in Matrix

// !===================Links ============
// * https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1?page=1&category[]=Heap&sortBy=submissions

// !=======================Using MaxHeap ===============

class MaxHeap {
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
    while (curr > 0 && this.arr[curr] > this.arr[this.getParent(curr)]) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[this.getParent(curr)];
      this.arr[this.getParent(curr)] = temp;
      curr = this.getParent(curr);
    }
  }

  extract() {
    if (this.size === 0) return -1;
    else if (this.size === 1) {
      this.size--;
      return this.arr.pop();
    } else {
      const max = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.size--;

      this.heapify(0);

      return max;
    }
  }

  heapify(i) {
    const l = this.getLeftIndex(i);
    const r = this.getRightIndex(i);
    let maxIndex = i;

    if (l < this.size && this.arr[maxIndex] < this.arr[l]) maxIndex = l;
    if (r < this.size && this.arr[maxIndex] < this.arr[r]) maxIndex = r;

    if (maxIndex !== i) {
      const temp = this.arr[maxIndex];
      this.arr[maxIndex] = this.arr[i];
      this.arr[i] = temp;

      this.heapify(maxIndex);
    }
  }

  peek() {
    return this.arr[0];
  }
}

/*
function kthSmallest(mat, n, k) {
  const heap = new MaxHeap();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      heap.insert(mat[i][j]);

      if (heap.size > k) heap.extract;
    }
  }

  return heap.peek;
}
*/

// !=======================Using Binary Search =============
function kthSmallest(mat, n, k) {
  let l = mat[0][0],
    r = mat[n - 1][n - 1];

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let greaterThanOrEqualMid = getElementsGreaterThanOrEqual(mid, n, mat);

    if (greaterThanOrEqualMid >= k) r = mid - 1;
    else l = mid + 1;
  }
  return l;
}

function getElementsGreaterThanOrEqual(num, n, mat) {
  let ans = 0;

  for (let i = 0; i < n; i++) {
    // if num is less than the first element
    // then no more element in matrix
    // further are less than or equal to num
    if (mat[i][0] > num) {
      return ans;
    }
    // if num is greater than last element,
    // it is greater than all elements
    // in that row
    if (mat[i][n - 1] <= num) {
      ans += n;
      continue;
    }
    // This contain the col index of last element
    // in matrix less than of equal
    // to num
    let greaterThan = 0;
    for (let jump = n / 2; jump >= 1; jump /= 2) {
      while (greaterThan + jump < n && mat[i][greaterThan + jump] <= num) {
        greaterThan += jump;
      }
    }

    ans += greaterThan + 1;
  }
  return ans;
}

const arr = [
  [16, 28, 60, 64],
  [22, 41, 63, 91],
  [27, 50, 87, 93],
  [36, 78, 87, 94],
];

// 7 17 27 36 38 14 23 35 38 43 19 26 42 49 50 23 33 48 52 53 30 40 52 56 64
// const arr = [
//   [7, 17, 27, 36, 38],
//   [14, 23, 35, 38, 43],
//   [19, 26, 42, 49, 50],
//   [23, 33, 48, 52, 53],
//   [30, 40, 52, 56, 64],
// ];

console.log(kthSmallest(arr, 4, 3));
