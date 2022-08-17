// !====================Longest Common Subsequence(LCS) ======================
// * Subsequence - Not Continuous
// *  A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// * If last characters of both sequences match (or X[m-1] == Y[n-1]) then
// *  # L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])

// * If last characters of both sequences do not match (or X[m-1] != Y[n-1]) then
// *  # L(X[0..m-1], Y[0..n-1]) = MAX ( L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]) )

// !=====================Links ==========================
// * https://leetcode.com/problems/longest-common-subsequence/submissions/
// * https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
// * https://www.geeksforgeeks.org/space-optimized-solution-lcs/

// !========================Recursion ==================

// * TC : O(n * 2n).
// * Note that it takes O(n) time to check if a subsequence is common to both the strings. This time complexity can be improved using dynamic programming.
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  return solve(text1, text2, m, n);
}

function solve(text1, text2, m, n) {
  // * Base case
  if (m === 0 || n === 0) return 0;

  if (text1[m - 1] === text2[n - 1])
    return 1 + solve(text1, text2, m - 1, n - 1);
  else
    return Math.max(
      solve(text1, text2, m - 1, n),
      solve(text1, text2, m, n - 1)
    );
}

// !=======================Method 2(DP: Memoization) ============
// *  If we draw the complete recursion tree, then we can see that there are many subproblems which are solved again and again.
// *  So this problem has Overlapping Substructure property and recomputation of same subproblems can be avoided by either using Memoization or Tabulation.

// * Time Complexity : O(mn) ignoring recursion stack space

function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(-1);
  }

  return solve(text1, text2, m, n, dp);
}

function solve(text1, text2, m, n, dp) {
  // * Base case
  if (m === 0 || n === 0) return 0;

  if (dp[m][n] !== -1) return dp[m][n];

  if (text1[m - 1] === text2[n - 1])
    return (dp[m][n] = 1 + solve(text1, text2, m - 1, n - 1, dp));
  else
    return (dp[m][n] = Math.max(
      solve(text1, text2, m - 1, n, dp),
      solve(text1, text2, m, n - 1, dp)
    ));
}

// !===========================Method 3(Tabulation- Top Down:DP) =====================

function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace"));
