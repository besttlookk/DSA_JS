// !==============Shortest Common Supersequence
// * This problem is closely related to longest common subsequence problem.
// *  Below are steps.
// * # 1. Find Longest Common Subsequence (lcs) of two given strings. For example, lcs of “geek” and “eke” is “ek”.
// * # 2. Insert non-lcs characters (in their original order in strings) to the lcs found above, and return the result. So “ek” becomes “geeke” which is shortest common supersequence.

// * Let us consider another example, str1 = “AGGTAB” and str2 = “GXTXAYB”. LCS of str1 and str2 is “GTAB”. Once we find LCS, we insert characters of both strings in order and we get “AGXGTXAYB”4

// * How does this work?
// * We need to find a string that has both strings as subsequences and is shortest such string.
// *  If both strings have all characters different, then result is sum of lengths of two given strings.
// * If there are common characters, then we don’t want them multiple times as the task is to minimize length. Therefore, we first find the longest common subsequence, take one occurrence of this subsequence and add extra characters.

// * Length of the shortest supersequence
// *        = (Sum of lengths of given two strings)
// *            - (Length of LCS of two given strings)

// * We can also solve by first finding the length of lcs and then apply above formula.

/**
 * @param {string} X
 * @param {string} Y
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */

// !=======================Links===================
// * https://practice.geeksforgeeks.org/problems/shortest-common-supersequence0322/1
// * https://www.geeksforgeeks.org/shortest-common-supersequence/

// !=========================Method 1 (Recursion) ================

// * Time complexity: O(2min(m, n))
function shortestCommonSupersequence(X, Y, m, n) {
  if (m === 0) return n;
  if (n === 0) return m;

  if (X[m - 1] === Y[n - 1])
    return 1 + shortestCommonSupersequence(X, Y, m - 1, n - 1);

  return (
    1 +
    Math.min(
      shortestCommonSupersequence(X, Y, m - 1, n),
      shortestCommonSupersequence(X, Y, m, n - 1)
    )
  );
}

// *  Since there are overlapping subproblems, we can efficiently solve this recursive problem using Dynamic Programming
// !============================Method 2 (DP: Top Down Memoization Approach)============

// * Time Complexity: O(n2)
// *Auxiliary Space: O(n2)
function shortestCommonSupersequence(X, Y, m, n) {
  const dp = new Array(m + 1);

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(-1);
  }

  return solve(X, Y, m, n, dp);
}

function solve(X, Y, m, n, dp) {
  if (m === 0 || n === 0) dp[m][n] = m + n;

  if (dp[m][n] !== -1) return dp[m][n];

  if (X[m - 1] === Y[n - 1]) {
    dp[m][n] = 1 + solve(X, Y, m - 1, n - 1, dp);
  } else {
    dp[m][n] = Math.min(
      solve(X, Y, m - 1, n, dp) + 1,
      solve(X, Y, m, n - 1, dp) + 1
    );
  }

  return dp[m][n];
}

// !======================Method 3(DP: Bottom-up / Tabulation method)=====================
// * Time complexity: O(m*n).
function shortestCommonSupersequence(X, Y, m, n) {
  const dp = new Array(m + 1);

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (X[i - 1] === Y[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]); //*
    }
  }

  return dp[m][n];
}

// console.log(shortestCommonSupersequence("AGGTAB", "GXTXAYB", 6, 7));
// console.log(shortestCommonSupersequence("abcd", "xycd", 4, 4));
console.log(shortestCommonSupersequence("algorithm", "rhythm", 9, 6));
