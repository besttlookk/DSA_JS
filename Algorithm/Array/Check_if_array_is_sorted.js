// !============ Check if array is sorted in acending order (Iterative & recursive)===============

// !================Links =================
// * https://www.geeksforgeeks.org/program-check-array-sorted-not-iterative-recursive/
// * https://practice.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1/

// !===================Method 1(Iterative) ================
/*
function arraySortedOrNot(arr, n) {
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }

  return true;
}
*/

// !=================Method 2 (Recursive) ============
function arraySortedOrNot(arr, n) {
  if (n === 1 || n === 0) return true;

  return arr[0] <= arr[1] && arraySortedOrNot(arr.slice(1), n - 1);
}
