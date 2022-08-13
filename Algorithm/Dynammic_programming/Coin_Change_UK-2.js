// !=====================Coin Change ======================
// * Variation of unbound knapsack

/**
 * @param {number[]} S
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//*  Given a value N, find the number of ways to make change for N cents, if we have infinite supply of each of S = { S1, S2, .. , SM } valued coins.

// !=====================Links ===================
// * https://practice.geeksforgeeks.org/problems/coin-change2448/1
// * https://www.geeksforgeeks.org/coin-change-dp-7/
// * https://leetcode.com/problems/coin-change-2/submissions/

// !==============================Recursion ======================
function count(S, m, n) {
  if (n === 0) return 1;
  if (m === 0) return 0;

  if (S[m - 1] > n) return count(S, m - 1, n);
  else {
    return count(S, m - 1, n) + count(S, m, n - S[m - 1]);
  }
}

// !============================Method 2: DP - Memoization ==============
function count(S, m, n) {
  let dp = new Array(m + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  // * Initialy fill with -1
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(S, m, n, dp);
}

function solve(S, m, n, dp) {
  if (n === 0) return 1;
  if (m === 0) return 0;

  if (dp[m][n] !== -1) return dp[m][n];

  if (S[m - 1] > n) return (dp[m][n] = solve(S, m - 1, n, dp));
  else {
    return (dp[m][n] = solve(S, m - 1, n, dp) + solve(S, m, n - S[m - 1], dp));
  }
}

// !==============================Method 3(DP: Tabulation) ============================

function count(S, m, n) {
  let dp = new Array(m + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (S[i - 1] > j) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = dp[i - 1][j] + dp[i][j - S[i - 1]];
    }
  }

  return dp[m][n];
}
// console.log(count([1, 2, 3], 3, 4));
console.log(count([2, 5, 3, 6], 4, 10));
