// !==================Binomial Coefficient

// !=======================Links ======================
// * https://www.geeksforgeeks.org/binomial-coefficient-dp-9/
// * https://practice.geeksforgeeks.org/problems/ncr1019/1

// !======================Method 1 (Recursive)============
// * The value of C(n, k) can be recursively calculated using the following standard formula for Binomial Coefficients.
// * C(n, k) = C(n-1, k-1) + C(n-1, k)
// * C(n, 0) = C(n, n) = 1

// * Time Complexity: O(n*max(k,n-k))
// *Auxiliary Space: O(n*max(k,n-k))
function nCr(n, r) {
  // * Base case
  if (r > n) return 0;
  if (r === n || r === 0) return 1;

  return nCr(n - 1, r - 1) + nCr(n - 1, r);
}

// * It should be noted that the above function computes the same subproblems again and again

// !======================Method 2( Top Down approch: Memoization)================

// *  Time Complexity: O(n*r)
// *Auxiliary Space: O(n*r)

function nCr(n, r) {
  const dp = new Array(n + 1);

  // Loop to create table dynamically
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(r + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= r; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(n, r, dp);
}

function solve(n, r, dp) {
  if (dp[n][r] !== -1) return dp[n][r];

  if (n < r) return 0;
  if (r === n || r === 0) return (dp[n][r] = 1);

  return (dp[n][r] = solve(n - 1, r - 1, dp) + solve(n - 1, r, dp));
}

// !==========================Method 3(Buttom - up approch) ================================

// * Time Complexity: O(n*r)
// * Auxiliary Space: O(n*r)
function nCr(n, r) {
  const dp = new Array(n + 1);

  // Loop to create table dynamically
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(r + 1);
  }

  // * When r = 0
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  // * when r > n
  for (let i = 1; i <= r; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= r; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp[n][r];
}

// !====================Method 4(space-optimized version of the above code.)============

function nCr(n, r) {
  if (n < r) return 0;
  if (n - r < r) r = n - r;

  const MOD = 1000000007;

  const dp = new Array(r + 1).fill(0);

  // * r === 0
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    // Compute next row of pascal
    // triangle using the previous row
    // * We are taking min bcoz we only need to calculate first half of the loop
    for (let j = Math.min(i, r); j > 0; j--) dp[j] = (dp[j] + dp[j - 1]) % MOD;
  }

  return dp[r];
}
console.log(nCr(3, 2));
