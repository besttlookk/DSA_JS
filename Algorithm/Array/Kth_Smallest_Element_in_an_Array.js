// !================Method 3 (Quick select) ==========================
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
