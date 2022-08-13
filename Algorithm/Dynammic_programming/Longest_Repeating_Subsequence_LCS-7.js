// !========================================Longest Repeating Subsequence==============================
// * This problem is just the modification of Longest Common Subsequence problem.
// * The idea is to find the LCS(str, str) where, str is the input string with the restriction that when both the characters are same, they shouldn’t be on the same index in the two strings.

// !=====================Links ======================
// * https://www.geeksforgeeks.org/longest-repeating-subsequence/
// * https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1

// !===============================DP(Tabulation)===========================
function LongestRepeatingSubsequence(str) {
  const m = str.length;
  const n = str.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (str[i - 1] === str[j - 1] && i !== j)
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[m][n];
}

console.log(LongestRepeatingSubsequence("axxzxy"));
