// ! ===================== Find Transition Point ==================

// !==============Links
//* https://practice.geeksforgeeks.org/problems/find-transition-point-1587115620/1/?page=1&category[]=Arrays&sortBy=submissions
// * https://www.geeksforgeeks.org/find-transition-point-binary-array/

// !==================Method 1 (Brute force: Linear search) =====================
// * TC : O(n)
/*
function transitionPoint(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) return i;
  }

  return -1;
}
*/

// !===============Method 2 (Binary search) ===================
function transitionPoint(arr, n, left = 0, right = n - 1) {
  if (arr[left] === 1) return left;
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid > 0 && arr[mid] === 1 && arr[mid - 1] === 0) return mid;
    else if (arr[mid] === 1) return transitionPoint(arr, n, left, mid - 1);
    else return transitionPoint(arr, n, mid + 1, right);
  }

  return -1;
}

// console.log(
//   transitionPoint(
//     [
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
//       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     ],
//     49
//   )
// );

console.log(transitionPoint([1], 1));
