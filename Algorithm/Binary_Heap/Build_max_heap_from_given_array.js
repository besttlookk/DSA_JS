// !=============Build Max heap from given array ===========

// !==================Solution
// * Heapify all the internal nodes from bottom up order
// * Bcoz in order to heapify any node both its children must be a heap

// * TC : O(n)
// * SC: O(logn)
function buildMaxHeap(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i <= 0; i--) {
    heapify(arr, n, i);
  }
}
