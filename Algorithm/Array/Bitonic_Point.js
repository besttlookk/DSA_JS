// !===============Bitonic Point
// * Given an array arr of n elements which is first increasing and then may be decreasing, find the maximum element in the array.

// ! Links========
// * https://practice.geeksforgeeks.org/problems/maximum-value-in-a-bitonic-array3001/1/?page=1&curated[]=8&sortBy=submissions#
// * https://www.geeksforgeeks.org/find-bitonic-point-given-bitonic-sequence/
// !========================Method 1(linear search) =================
// * Time complexity for this approach is O(n)
/*
function findMaximum(arr, n) {
  let i = 0;

  while (i < n) {
    if (arr[i + 1] > arr[i]) i++;
    else break;
  }

  return arr[i];
}
*/

// !=====================Method 2 (Binary) =====================

// * Time complexity: O(Log n)

//* Auxiliary Space: O(1), as no extra space is required
/*

function findMaximum(arr, n, left = 0, right = n - 1) {
  if (left <= right) {
    let mid = parseInt((left + right) / 2);

    //* base condition to check if arr[mid]
    //* is bitonic point or not
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return arr[mid];

    //* We assume that sequence is bitonic. We go to
    //* right subarray if middle point is part of
    //* increasing subsequence. Else we go to left
    //* subarray.

    if (arr[mid] < arr[mid + 1]) return findMaximum(arr, n, mid + 1, right);
    else return findMaximum(arr, n, left, mid - 1);
  }

  return -1;
}
*/
function findMaximum(arr, n) {
  // code here
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    } else if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
console.log(findMaximum([1, 15, 25, 45, 42, 21, 17, 12, 11], 9));
