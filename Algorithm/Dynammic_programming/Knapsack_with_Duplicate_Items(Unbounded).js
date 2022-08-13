// !=============Knapsack with Duplicate Items / Unbouded Knapsack ===================
// * If we include the item we will still keep number of item be N

/**
 * @param {number} N
 * @param {number} W
 * @param {number[]} val
 * @param {number[]} wt
 * @return {number}
 */
// !=========================Links ======================
// * https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1
// * https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/
// !===========================Recursion ========================

function knapSack(N, W, val, wt) {
  if (N === 0 || W === 0) return 0;

  if (wt[N - 1] > W) return knapSack(N - 1, W, val, wt);
  else {
    return Math.max(
      val[N - 1] +
        knapSack(N, W - wt[N - 1], val, wt, knapSack(N - 1, W, val, wt))
    );
  }
}

// !===========================Method 2 (DP: Memoization)

function knapSack(N, W, val, wt) {
  let dp = new Array(N + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(W + 1);
  }

  // * Initialy fill with -1
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= W; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(N, W, val, wt, dp);
}

function solve(N, W, val, wt, dp) {
  if (N === 0 || W === 0) return 0;

  if (dp[N][W] !== -1) return dp[N][W];

  if (wt[N - 1] > W) return (dp[N][W] = solve(N - 1, W, val, wt, dp));
  else {
    return (dp[N][W] = Math.max(
      val[N - 1] + solve(N, W - wt[N - 1], val, wt, dp),
      solve(N - 1, W, val, wt, dp)
    ));
  }
}

console.log(knapSack(2, 3, [1, 1], [2, 1]));
