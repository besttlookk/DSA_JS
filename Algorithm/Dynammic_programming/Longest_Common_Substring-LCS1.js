// !===================Longest Common Substring ===============
// * It can be solved using LCS
// * In this we need to find continuous match substring

// !===================Links ======================
// * https://www.geeksforgeeks.org/longest-common-substring-dp-29/
// * https://practice.geeksforgeeks.org/problems/longest-common-substring1452/1#

// !=================Recursion ===================
function longestCommonSubstr(S1, S2, n, m) {
  return solve(S1, S2, n, m, 0);
}

function solve(S1, S2, n, m, count) {
  if (m === 0 || n === 0) return count;

  if (S1[n - 1] === S2[m - 1]) count = solve(S1, S2, n - 1, m - 1, count + 1);
  else
    count = Math.max(
      count,
      solve(S1, S2, n - 1, m, 0),
      solve(S1, S2, n, m - 1, 0)
    );

  return count;
}

// !==========================Method 2(DP: Memoization)WRONG =============
function longestCommonSubstr(S1, S2, n, m) {
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(-1);
  }

  return solve(S1, S2, n, m, 0, dp);
}

function solve(S1, S2, n, m, count, dp) {
  if (m === 0 || n === 0) return count;

  if (dp[n][m] !== -1) return dp[n][m];

  if (S1[n - 1] === S2[m - 1]) {
    count = solve(S1, S2, n - 1, m - 1, count + 1, dp);
  } else
    count = Math.max(
      count,
      solve(S1, S2, n - 1, m, 0, dp),
      solve(S1, S2, n, m - 1, 0, dp)
    );
  dp[n][m] = count;
  return count;
}

// !==================Method 3(DP:Tabulation) ===================
function longestCommonSubstr(S1, S2, n, m) {
  let max = 0;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (S1[i - 1] === S2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(dp[i][j], max);
      } else dp[i][j] = 0;
    }
  }

  return max;
}
console.log(longestCommonSubstr("ABCDGH", "ACDGHR", 6, 6));
