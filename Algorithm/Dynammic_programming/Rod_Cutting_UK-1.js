// !======================Rod Cutting =================
// * Variation of Unbound-Knapsack

// !=========================Links ==========================
// * https://practice.geeksforgeeks.org/problems/rod-cutting0840/1
// * https://www.geeksforgeeks.org/cutting-a-rod-dp-13/

// !==========================Recursion ===============
function cutRod(price, n) {
  const length = new Array(n);
  const w = n;

  for (let i = 0; i < n; i++) {
    length[i] = i + 1;
  }

  return solve(price, length, n, w);
}

function solve(price, length, n, w) {
  if (n === 0 || w === 0) return 0;

  if (length[n - 1] > w) return solve(price, length, n - 1, w);
  else {
    return Math.max(
      price[n - 1] + solve(price, length, n, w - length[n - 1]),
      solve(price, length, n - 1, w)
    );
  }
}

// !=======================Method 2 (DP: Tabulation) ======================
function cutRod(price, n) {
  let dp = new Array(n + 1);
  const length = new Array(n);
  const w = n;

  for (let i = 0; i < n; i++) {
    length[i] = i + 1;
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  // * Initialy fill with -1
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(price, length, n, w, dp);
}

function solve(price, length, n, w, dp) {
  if (n === 0 || w === 0) return 0;

  if (dp[n][w] !== -1) return dp[n][w];

  if (length[n - 1] > w) return (dp[n][w] = solve(price, length, n - 1, w, dp));
  else {
    return (dp[n][w] = Math.max(
      price[n - 1] + solve(price, length, n - 1, w - length[n - 1], dp),
      solve(price, length, n - 1, w, dp)
    ));
  }
}

// !============================Method 3(DP: Tabulation)===================

function cutRod(price, n) {
  let dp = new Array(n + 1);
  const length = new Array(n);
  const w = n;

  for (let i = 0; i < n; i++) {
    length[i] = i + 1;
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  // * Initialy fill with -1
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= w; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      if (length[i - 1] > j) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = Math.max(
          price[i - 1] + dp[i][j - length[i - 1]],
          dp[i - 1][j]
        );
      }
    }
  }

  return dp[n][w];
}

console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20], 8));
