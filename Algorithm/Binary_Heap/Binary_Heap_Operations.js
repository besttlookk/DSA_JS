// !=======================Binary Heap Operations ==============

// *========Extrat min algo====
// * 1. Save min value
// * 2.Copy last to Root
// * 3. Remove last and decrease heap size
// * 4. Heapify root

// *=============Decrease key =============
// * On decreasing a node value in a min-heap, node may move up to maintain min-heap property;
// * For max-heap . In case of Decrease key node may move down

// *==============Insert Element ==============
// * In a complete BT insert is done at the last level from left to right
// * STEPS:(Same as decrease key)
// * 1. Insert Node at the end of the heap
// * 2. Percolate up till:
// *  a. parent value < curr
// *  b. curr node is root

//*  List of TC:
// * Find Min : O(1)
// * Delete MIn: O(log n)
// * Insert : O(log n)
// * Increase key : O(log n)
// * Decrease Key: O(log n)
// * Find MAX: O(n)
// * Delete Random element: O(n)
// * Search Tandom Element: O(n)

// !================Links
// * https://practice.geeksforgeeks.org/problems/operations-on-binary-min-heap/1?page=1&category[]=Heap&sortBy=submissions

// !===============Solution
class MinHeap {
  constructor(cap) {
    this.heap_size = 0;
    this.capacity = cap;
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

  // * TC: O(log n)
  // * TC: O(log n)
  /**
   * @return {number}
   */
  extractMin() {
    if (this.heap_size === 0) {
      return -1;
    } else if (this.heap_size === 1) {
      this.heap_size--;
      return this.harr.pop();
    } else {
      // * STEP 1: Save the min value
      const min = this.harr[0];

      // * STEP 2: Copy last to root
      this.harr[0] = this.harr[this.heap_size - 1];

      // * STEP 3: Remove the last element and decreace the heap size
      this.harr.pop();
      this.heap_size--;

      // * STEP 4: Heapify
      this.MinHeapify(0);

      return min;
    }
  }

  // * TC: O(log n)
  //* SC :O(1 )
  /**
   * @param {number} k
   */
  insertKey(k) {
    if (this.heap_size === this.capacity) return -1;
    this.harr.push(k);
    this.heap_size++;

    let curr = this.heap_size - 1;
    // console.log({ curr });
    while (curr >= 0 && this.harr[curr] < this.harr[this.parent(curr)]) {
      // * Swap
      const temp = this.harr[curr];
      this.harr[curr] = this.harr[this.parent(curr)];
      this.harr[this.parent(curr)] = temp;

      curr = this.parent(curr);
    }
  }
  /**
   * @param {number} i
   */
  deleteKey(i) {
    if (i >= this.heap_size || this.heap_size === 0) return -1;
    if (i <= this.heap_size - 1) this.decreaseKey(i, Number.MIN_VALUE);
    this.extractMin();
  }

  // * TC: Log(n)
  // * Sc: O(1)
  // Decrease key operation, helps in deleting the element
  decreaseKey(i, new_val) {
    // * Check if new_val is greater than the current value at i index. If it is no need to do anything
    if (new_val > this.harr[i]) return -1;

    // * STEP 1: change the value
    this.harr[i] = new_val;

    // * STEP 2: PERCULATE UP
    while (i !== 0 && this.harr[this.parent(i)] > this.harr[i]) {
      // * If parent is larger: SWAP
      let temp = this.harr[i];
      this.harr[i] = this.harr[this.parent(i)];
      this.harr[this.parent(i)] = temp;

      i = this.parent(i);
    }
  }

  MinHeapify(i) {
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
      this.MinHeapify(smallest);
    }
  }
}

const h = new MinHeap();

h.insertKey(4);
h.insertKey(2);
console.log(h.extractMin());
// console.log(first)
h.insertKey(6);
console.log(h.harr);
h.deleteKey(0);
console.log(h.harr);
console.log(h.extractMin());
console.log(h.extractMin());
