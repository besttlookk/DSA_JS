// !==========================K’th smallest element in an unsorted array

// !==================================Links========================================
// * https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/

// !==============Method 1 : K’th smallest element in an unsorted array using sorting:================================
// * Sort the given array and return the element at index K-1 in the sorted array.

// !==========================Method 2: binary search[NOT OPTIMIZED]================================
// * The idea to solve this problem is that the Kth smallest element would be the element at the kth position if the array was sorted in increasing order.
// * Using this logic, binary search can be used to predict the index of an element as if the array was sorted but without actually sorting the array.

//* Find low and high that is the range where our answer can lie.
//* Apply Binary Search on this range.
//* If the selected element which would be mid has less than K elements lesser to it then increase the number that is low = mid + 1.
// Otherwise, Decrement the high pointer, i.e high = mid
// The Binary Search will end when only one element remains in the answer space which would be the answer.

function findKthSmallest(nums, k) {
  let low = Number.MAX_VALUE;
  let high = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    low = Math.min(low, nums[i]);
    high = Math.max(high, nums[i]);
  }

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (count(nums, mid) < k) low = mid + 1;
    else high = mid;
  }

  return low;
}

function count(nums, mid) {
  // function to calculate number of elements less than equal to mid
  let cnt = 0;

  for (var i = 0; i < nums.length; i++) if (nums[i] <= mid) cnt++;

  return cnt;
}

// !=============================Method 2:  using heap data structure: MIN-HEAP==========================
// * Min-Heap can be used to find the kth smallest element, by inserting all the elements into Min-Heap and then and call extractMin() function K times.

// !==============================Method 3: using heap data structure: MAX-HEAP ==========================
// * Max-Heap can be used to find the kth smallest element, by inserting first K elements into Max-Heap and then compare remaining elements with the root of the Max-Heap and if the element is less than the root then remove the root and insert this element into the heap and finally return root of the Max-Heap

// !=============================Method 4: using Priority Queue: ====================================
// !================Method 4(Quick select) ==========================
// * The algorithm is similar to QuickSort. The difference is, instead of recurring for both sides (after finding pivot), it recurs only for the part that contains the k-th smallest element.
// * The logic is simple, if index of partitioned element is more than k, then we recur for left part. If index is same as k, we have found the k-th smallest element and we return. If index is less than k, then we recur for right part.
// * This reduces the expected complexity from O(n log n) to O(n), with a worst case of O(n^2).
// * Like quicksort, it is fast in practice, but has poor worst-case performance. It is used in
// * The partition process is same as QuickSort, only recursive code differs.
// * There exists an algorithm that finds k-th smallest element in O(n) in worst case, but QuickSelect performs better on average. https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array-set-3-worst-case-linear-time/

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

//! Recursive implementation of quick-select
let findKthSmallest = function (nums, k, low = 0, high = nums.length - 1) {
  let pi = partition(nums, low, high);

  if (pi === k - 1) return nums[pi];
  // * if partition value is less than kth position, search right side of the array.
  else if (pi < k - 1) return findKthSmallest(nums, k, pi + 1, high);
  // * if partition value is more than kth position, search left side of the array.
  else return findKthSmallest(nums, k, low, pi - 1);
};

// ! Iterative implementation of qucik- select
let findKthSmallest_iter = function (nums, k, low = 0, high = nums.length - 1) {
  while (low <= high) {
    let pi = partition(nums, low, high);

    if (pi === k - 1) return nums[pi];
    else if (pi < k - 1) low = pi + 1;
    else high = pi - 1;
  }

  return -1;
};

console.log(findKthSmallest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
