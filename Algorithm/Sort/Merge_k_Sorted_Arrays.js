// !================Merge k Sorted Arrays
// * Given K sorted arrays arranged in the form of a matrix of size K*K. The task is to merge them into one sorted array.

/**
 * @param {number[][]} arr
 * @param {number} K
 * @returns {number[]}
 */
// !===================Links
// * https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1?page=1&sortBy=submissions&searchQuery=merge

// !==========================Method 1 (Using Heap) ==============
// * The process must start with creating a MinHeap and inserting the first element of all the k Linked Lists
// * Remove the root element of Minheap and put it in the output Linked List and insert the next element from the Linked List of removed element.
// * To get the result the step must continue until there is no element left in the MinHeap.
// * Note: Mapping the elements of a heap into an array is trivial, If a node is stored at index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.
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

  extractMin() {
    if (this.size === 0) {
      return -1;
    } else if (this.size === 1) {
      this.size--;
      return this.harr.pop();
    } else {
      // * STEP 1: Save the min value
      const min = this.harr[0];

      // * STEP 2: Copy last to root
      this.harr[0] = this.harr[this.size - 1];

      // * STEP 3: Remove the last element and decreace the heap size
      this.harr.pop();
      this.size--;

      // * STEP 4: Heapify
      this.MinHeapify(0);

      return min;
    }
  }

  insert(data) {
    this.harr.push(data);
    this.size++;

    if (this.size === 1) return;

    let curr = this.size - 1;
    while (
      curr > 0 &&
      this.harr[curr].value < this.harr[this.parent(curr)].value
    ) {
      // * Swap
      const temp = this.harr[curr];
      this.harr[curr] = this.harr[this.parent(curr)];
      this.harr[this.parent(curr)] = temp;

      curr = this.parent(curr);
    }
  }

  MinHeapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (l < this.size && this.harr[l].value < this.harr[i].value) smallest = l;
    if (r < this.size && this.harr[r].value < this.harr[smallest].value)
      smallest = r;
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

class Data {
  constructor(value, arrIndex, valIndex) {
    this.value = value;
    this.arrIndex = arrIndex;
    this.valIndex = valIndex;
  }
}

// * We need t0 store three value in heap: {value, arrayIndex, index of value in that array}
function mergeKArrays(arr, K) {
  const ans = [];
  const heap = new MinHeap();
  // * insert 1st column value in the heap
  for (let i = 0; i < K; i++) {
    heap.insert(new Data(arr[i][0], i, 0));
  }

  while (heap.size) {
    const curr = heap.extractMin();
    ans.push(curr.value);

    const arrIndex = curr.arrIndex;
    const valIndex = curr.valIndex;

    if (valIndex + 1 < arr[arrIndex].length) {
      const newData = new Data(
        arr[arrIndex][valIndex + 1],
        arrIndex,
        valIndex + 1
      );

      heap.insert(newData);
    }
  }

  return ans;
}

const arr = [
  [1, 2, 3, 4],
  [2, 2, 3, 4],
  [5, 5, 6, 6],
  [7, 8, 9, 9],
];
console.log(mergeKArrays(arr, 4));
