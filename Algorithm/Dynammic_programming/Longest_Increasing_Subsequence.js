// !===================Longest Increasing Subsequence

// !====================Links====================
// * https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/#:~:text=The%20Longest%20Increasing%20Subsequence%20(LIS)%20problem%20is%20to%20find%20the,50%2C%2060%2C%2080%7D.

// !====================================== Recursion ====================

// !===========================Method 2: Dynamic Programming.=====================
// * Input  : arr[] = {3, 10, 2, 11}
//* LIS[] = {1, 1, 1, 1} (initially)

// * arr[2] > arr[1] {LIS[2] = max(LIS [2], LIS[1]+1)=2}
// *arr[3] < arr[1] {No change}
// *arr[3] < arr[2] {No change}
// *arr[4] > arr[1] {LIS[4] = max(LIS [4], LIS[1]+1)=2}
// *arr[4] > arr[2] {LIS[4] = max(LIS [4], LIS[2]+1)=3}
// *arr[4] > arr[3] {LIS[4] = max(LIS [4], LIS[3]+1)=3}

// * Time Complexity: O(n2).
// As nested loop is used.
// Auxiliary Space: O(n).

function lis(arr, n) {
  let lis = new Array(n).fill(1);
  let max = Number.MIN_VALUE;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) lis[i] = lis[j] + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    max = Math.max(max, lis[i]);
  }

  return max;
}

console.log(lis([10, 22, 9, 33, 21, 50, 41, 60], 8));
