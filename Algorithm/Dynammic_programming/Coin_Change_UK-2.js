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
// * m is total no. of coins
// * n is total sum

// * Time Complexity: O(2n)
// * Space Complexity: O(target) – Auxiliary stack space
// * It should be noted that the below function computes the same subproblems again and again.
function count(S, m, n) {
  //* If n is 0 then there is 1 solution
  //* (do not include any coin)
  if (n === 0) return 1;
  // If n is less than 0 then no
  // solution exists
  if (n < 0) return 0;

  // If there are no coins and n
  // is greater than 0, then no solution exist
  if (m === 0) return 0;

  if (S[m - 1] > n) return count(S, m - 1, n);
  //* IF total sum requried is more that last coin of array. Do not include it
  else {
    return count(S, m - 1, n) + count(S, m, n - S[m - 1]); //* Two choice: either include it or exclude it
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

// !======================Method 4(Simplified version of method 3)
function count(S, m, n) {
  // table[i] will be storing the number of solutions
  // for value i. We need n+1 rows as the table is
  // constructed in bottom up manner using the base

  //* case (n = 0)
  // Initialize all table values as 0
  //O(n)

  let table = Array(n + 1).fill(0);

  //* Base case (If given value is 0)
  table[0] = 1;

  //* Pick all coins one by one and update the table
  //* values after the index greater than or equal to
  //* the value of the picked coin

  for (i = 0; i < m; i++) {
    for (j = S[i]; j <= n; j++) table[j] += table[j - S[i]];
    console.log({ table });
  }

  return table[n];
}
// console.log(count([1, 2, 3], 3, 4));
console.log(count([2, 5, 3, 6], 4, 10));
