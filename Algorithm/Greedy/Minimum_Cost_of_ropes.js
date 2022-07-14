// ! =============== Minimum Cost of ropes ===================
// * Based on OPTIMAL MERGE PATTERN
// *  we can notice that the lengths of the ropes which are picked first are included more than once in total cost.
// * Therefore, the idea is to connect the smallest two ropes first and recur for the remaining ropes
// * This approach is similar to Huffman Coding

// !================Links =================
// * https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/
// * https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/0/?page=1&category[]=Queue&sortBy=submissions

// !=================Method 1(Heap) ===================
// * Create a min-heap and insert all lengths into the min-heap.
// * Do following while the number of elements in min-heap is not one.
// *  # Add the above two extracted values and insert the added value to the min-heap.
// *  # Maintain a variable for total cost and keep incrementing it by the sum of extracted values.

class MinHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  insert(x) {
    this.data.push(x);

    if (this.size() > 1) this.heapify();
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  heapify() {
    let parentIndex;
    let index = this.size() - 1;

    while (index >= 0) {
      parentIndex = this.getParentIndex(index);

      if (this.data[parentIndex] > this.data[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  remove() {
    const item = this.data.shift();
    const length = this.size();
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

      if (leftChildIndex < length && leftChild < parent) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        ((swapIndex === null && rightChild < parent) ||
          (swapIndex !== null && rightChild < leftChild))
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

/*
function minCost(arr, n) {
  const minHeap = new MinHeap();
  let res = 0;

  for (let i = 0; i < n; i++) {
    minHeap.insert(arr[i]);
  }

  while (minHeap.size() !== 1) {
    const min1 = minHeap.remove();
    const min2 = minHeap.remove();
    const sum = min1 + min2;

    res += sum;

    minHeap.insert(sum);
  }

  return res;
}
*/
// !=========================Method 2(Priority Queue)==============

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // *  here element acts as priority
  enqueue(element) {
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > element) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }

    //* if the element have the highest priority
    //* it is added at the end of the queue

    if (!added) {
      this.items.push(element);
    }
  }

  dequeue() {
    // !remove element with priortiy value low
    if (this.isEmpty()) return "Underflow";

    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No item in the Queue";

    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return "No item in the Queue";

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
/*
function minCost(arr, n) {
  const pq = new PriorityQueue();
  let res = 0;

  for (let i = 0; i < n; i++) {
    pq.enqueue(arr[i]);
  }

  while (pq.size() !== 1) {
    const min1 = pq.dequeue();
    const min2 = pq.dequeue();
    const sum = min1 + min2;

    res += sum;

    pq.enqueue(sum);
  }

  return res;
}
*/

// !======================Method 3(sort) =====================
function minCost(arr, n) {
  // Create a priority queue
  let pq = [];

  // Adding items to the pQueue
  for (let i = 0; i < n; i++) {
    pq.push(arr[i]);
  }

  pq.sort(function (a, b) {
    return a - b;
  });

  // Initialize result
  let res = 0;

  // While size of priority queue
  // is more than 1
  while (pq.length > 1) {
    // Extract shortest two ropes from pq
    let first = pq.shift();
    let second = pq.shift();

    // Connect the ropes: update result
    // and insert the new rope to pq
    res += first + second;
    pq.push(first + second);
    pq.sort(function (a, b) {
      return a - b;
    });
  }

  return res;
}
console.log(minCost([4, 3, 2, 6], 4));
