// !===============================Minimum number of coins / Find minimum number of coins that make a given value=========================
/**
 * @param {number[]} coins
 * @param {number} V
 * @param {number} M
 * @returns {number}
 */

// * This problem is a variation of the problem discussed Coin Change Problem.
// *  Here instead of finding the total number of possible solutions, we need to find the solution with the minimum number of coins.
// * The minimum number of coins for a value V can be computed using the below recursive formula.
// * If V == 0, then 0 coins required.
// * If V > 0
//*  minCoins(coins[0..m-1], V) = min {1 + minCoins(V-coin[i])}
//*  where i varies from 0 to m-1
//*  and coin[i] <= V
// !===============================Links ========================
// * https://practice.geeksforgeeks.org/problems/number-of-coins1824/1
// * https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/

// !==========================Method 1 (recursion)==============

function minCoins(coins, V, M) {
  // Base case
  if (V == 0) return 0;

  // Initialize result
  let res = Number.MAX_VALUE;

  // Try every coin that has smaller
  // value than V
  for (let i = 0; i < M; i++) {
    if (coins[i] <= V) {
      let sub_res = minCoins(coins, M, V - coins[i]);

      // Check for INT_MAX to avoid overflow and
      // see if result can minimized
      if (sub_res != Number.MAX_VALUE && sub_res + 1 < res) res = sub_res + 1;
    }
  }
  return res;
}

// !=======================Method 2(Tabulation: 2D- Array)===================

function minCoins(coins, V, M) {
  const dp = new Array(M + 1);

  for (let i = 0; i <= M; i++) {
    dp[i] = new Array(V + 1);
  }

  // * Initialize
  for (let i = 0; i <= V; i++) {
    dp[0][i] = Number.MAX_VALUE;
  }

  for (let i = 1; i <= M; i++) {
    dp[i][0] = 0;
  }

  for (let j = 1; j <= V; j++) {
    if (j % coins[0] === 0) {
      dp[1][j] = j / coins[0];
    } else {
      dp[1][j] = Number.MAX_VALUE;
    }
  }

  for (let i = 2; i <= M; i++) {
    for (let j = 1; j <= V; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(1 + dp[i][j - coins[i - 1]], dp[i - 1][j]);
      }
    }
  }

  return dp[M][V] === Number.MAX_VALUE ? -1 : dp[M][V];
}

// !=======================Method 2(Tabulation: 1D- Array)===================
console.log(minCoins([25, 10, 5], 30, 3));
