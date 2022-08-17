// !=================Maximum sum increasing subsequence
// *  This problem is a variation of the standard Longest Increasing Subsequence (LIS) problem.

// !===================Links===============
// * https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1
// *

// !=====================Method 1==================

function maxSumIS(arr, n) {
  let max = 0;
  let msis = new Array(n);

  //* Initialize msis values for all indexes
  for (i = 0; i < n; i++) msis[i] = arr[i];

  // Compute maximum sum values in bottom up manner
  for (let i = 1; i < n; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] > arr[j] && msis[i] < msis[j] + arr[i])
        msis[i] = msis[j] + arr[i];

  // Pick maximum of
  // all msis values
  for (let i = 0; i < n; i++) if (max < msis[i]) max = msis[i];

  return max;
}
