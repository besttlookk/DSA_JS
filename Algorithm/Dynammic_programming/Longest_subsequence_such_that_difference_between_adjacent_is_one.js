// !================Longest subsequence such that difference between adjacent is one
// * This problem is based upon the concept of Longest Increasing Subsequence Problem.

// !=========================Links==========================
// * https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1
// * https://www.geeksforgeeks.org/longest-subsequence-such-that-difference-between-adjacents-is-one/

// !========================Method 1=======================

// * Time Complexity: O(n2)
// * Auxiliary Space: O(n)
function longestSubsequence(n, arr) {
  // Initialize the dp[] array with 1 as a
  // single element will be of 1 length
  let dp = [];
  for (let i = 0; i < n; i++) dp[i] = 1;

  // Start traversing the given array
  for (let i = 1; i < n; i++) {
    // Compare with all the previous
    // elements
    for (let j = 0; j < i; j++) {
      // If the element is consecutive
      // then consider this subsequence
      // and update dp[i] if required.
      if (arr[i] == arr[j] + 1 || arr[i] == arr[j] - 1)
        dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  // Longest length will be the maximum
  // value of dp array.
  let result = 1;
  for (let i = 0; i < n; i++) if (result < dp[i]) result = dp[i];

  return result;
}
