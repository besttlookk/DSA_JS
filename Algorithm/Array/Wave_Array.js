// !++++++++++++++++++++++ Sort an array in wave form =====================

// !Links ========
// * https://www.geeksforgeeks.org/sort-array-wave-form-2/
// * https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1/?page=1&curated[]=2&sortBy=submissions

// !================== Method 1
// * A Simple Solution is to use sorting. First sort the input array, then swap all adjacent elements.
//* For example, let the input array be {3, 6, 5, 10, 7, 20}. After sorting, we get {3, 5, 6, 7, 10, 20}. After swapping adjacent elements, we get {5, 3, 7, 6, 20, 10}.

// * Time Complexity: O(nlogn)

//*  Auxiliary Space: O(1)
/*
function sortInWave(arr, n) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  return arr;
}
*/

// ! ==========Method 2
// * This can be done in O(n) time by doing a single traversal of the given array.
// * The idea is based on the fact that if we make sure that all even positioned (at index 0, 2, 4, ..) elements are greater than their adjacent odd elements, we don’t need to worry about oddly positioned elements.

//* The following are simple steps.
//* 1) Traverse all even positioned elements of the input array, and do the following.
//* ….a) If the current element is smaller than the previous odd element, swap previous and current.
//* ….b) If the current element is smaller than the next odd element, swap next and current.

//* Time Complexity: O(nlogn)

//*  Auxiliary Space: O(1)
function sortInWave(arr, n) {
  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }

    if (i < n - 1 && arr[i + 1] > arr[i]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
  }

  return arr;
}

console.log(sortInWave([10, 90, 49, 2, 1, 5, 23], 7));
