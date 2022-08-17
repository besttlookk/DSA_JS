// !=======================Sequence Pattern Matching/ Is Subsequence

// !======================Links ===================
// * https://leetcode.com/problems/is-subsequence/

// !=========================DP ====================

var isSubsequence = function (s, t) {
  const m = s.length;
  const n = t.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  const lcs = dp[m][n];

  return m === lcs ? true : false;
};

console.log(isSubsequence("abc", "ahbgdc"));
