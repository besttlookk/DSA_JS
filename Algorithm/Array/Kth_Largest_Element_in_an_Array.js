//! LC 215 : https://leetcode.com/problems/kth-largest-element-in-an-array/

// !====================Method 1 (Brute Force - Sort the elements and return (array lenght - k))=====================
// * The Time Complexity of this solution is O(N log N)
/*
let findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};
*/

// !====================== Method 2 (Using Min Heap) ====================
// * For largest elemet use min-heap bcoz we dont care about min element..we can pop it any time.
// * O(nlog(k))
/*
class MinHeap {
  constructor() {
    this.heap = [];
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

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    let parentIndex, parent, child;

    while (index >= 0) {
      parentIndex = this.getParentIndex(index);
      parent = this.heap[parentIndex];
      child = this.heap[index];

      if (parent > child) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  remove() {
    const item = this.heap.shift();
    this.heap.unshift(this.heap.pop());

    if (this.heap.length < 2) return item;

    let index = 0;
    let swapIndex = null;
    let leftChildIndex, rightChildIndex, leftChild, rightChild, parent;

    while (true) {
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
      leftChild = this.heap[leftChildIndex];
      rightChild = this.heap[rightChildIndex];
      parent = this.heap[index];

      if (leftChildIndex > 0 && leftChild < parent) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex > 0 &&
        ((swapIndex === null && rightChild < parent) ||
          (swapIndex !== null && rightChild < leftChild))
      ) {
        swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this.swap(index, swapIndex);

      index = swapIndex;
      swapIndex = null;
    }

    return item;
  }

  peek() {
    return this.heap[0];
  }
}

let findKthLargest = function (nums, k) {
  const hp = new MinHeap();
  for (let num of nums) {
    hp.insert(num);

    if (hp.heap.length > k) {
      hp.remove();
    }
    //  Another condition we can check is: if new element > hp.top: extractMin && then insert new ele
  }

  return hp.peek();
};

*/

// !================Method 3 (Quick select) ==========================
// * The algorithm is similar to QuickSort. The difference is, instead of recurring for both sides (after finding pivot), it recurs only for the part that contains the k-th larget element.
// * This reduces the expected complexity from O(n log n) to O(n), with a worst case of O(n^2).
// * Like quicksort, it is fast in practice, but has poor worst-case performance. It is used in
// ! The partition process is same as QuickSort, only recursive code differs.
// * for kth largest , comarare partition with (n - k),
// * for kth smallest, compare partition with (k - 1)

function partition(arr, low, high) {
  // * First select pivot
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // * place the pivot at its correct position: i + 1;
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

let findKthLargest = function (nums, k, low = 0, high = nums.length - 1) {
  let pi = partition(nums, low, high);

  if (pi === nums.length - k) return nums[pi];
  //* place of kth largest element in sorted arr is [nums.length - k]
  // * if partition value is less than kth position, search right side of the array.
  else if (pi < nums.length - k) return findKthLargest(nums, k, pi + 1, high);
  // * if partition value is more than kth position, search left side of the array.
  else return findKthLargest(nums, k, low, pi - 1);
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
