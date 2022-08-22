// !=====================================Merge k sorted linked lists
/**
 * @param {Node[]} arr
 * @param {number} N
 * @returns {Node}
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// !====================links ===============
// * https://www.geeksforgeeks.org/merge-k-sorted-linked-lists-set-2-using-min-heap/
// * https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1
// * https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/
// *

// !===================Solution 1(Using Min-heap) ===============
// * Solution is similat to merging k sorted array

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
    while (
      curr > 0 &&
      this.arr[curr].data < this.arr[this.getParent(curr)].data
    ) {
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

    if (l < this.size && this.arr[minIndex].data > this.arr[l].data)
      minIndex = l;
    if (r < this.size && this.arr[minIndex].data > this.arr[r].data)
      minIndex = r;

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

// * Time Complexity: O(nk Log k)
// * K is number of sorted list
function mergeKLists(arr, K) {
  const mheap = new MinHeap();
  let head = new Node(-1);
  let tail = head;

  // *  insert the first element of all the ‘k’ linked lists.That is head of all the list
  for (let i = 0; i < K; i++) {
    if (arr[i] !== null) {
      mheap.insert(arr[i]);
    }
  }

  if (mheap.size === 0) return null;

  // * As long as the min-heap is not empty,
  // * Remove the top element of the min-heap (which is the current minimum among all the elements in the min-heap) and add it to the result list.
  while (mheap.size) {
    const curr = mheap.extractMin();

    // Add the top element of 'queue'
    // to the resultant merged list

    tail.next = curr;

    tail = tail.next;

    if (curr.next !== null) {
      mheap.insert(curr.next);
    }
  }

  return head.next;
}

// !======================Method 2: Divide and Conquer [incomplete]==================.
// * This approach doesn’t require extra space for heap and works in O(nk Log k)

function mergeKLists(arr, K, sIndex = 0, eIndex = K - 1) {
  // * base case
  if (K === 0) return null;
  else if (K === 1) return arr[0];

  let h1 = null;
  let h2 = null;
  let head = null;
  const mid = Math.floor(K / 2);

  h1 = mergeKLists(arr, mid + 1, sIndex, mid);

  if (mid + 1 <= eIndex) {
    h2 = mergeKLists(arr, mid, mid + 1, eIndex);
  }

  // * merge two link list
  if (!h1 && !h2) return null;
  else if (!h2) return h1;
  else if (!h1) return h2;
}
