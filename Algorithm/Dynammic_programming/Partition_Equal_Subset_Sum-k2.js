// !=================Partition Equal Subset Sum================
// *1 / 0 Knapsack problem variation

// * Following are the two main steps to solve this problem:
// * 1) Calculate sum of the array. If sum is odd, there can not be two subsets with equal sum, so return false.
// * 2) If sum of array elements is even, calculate sum/2 and find a subset of array with sum equal to sum/2.
// * The first step is simple. The second step is crucial, it can be solved either using recursion or Dynamic Programming.

// !================Links ====================
// * https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1
// * https://www.geeksforgeeks.org/partition-problem-dp-18/

// !=====================Method 1(recursion)============
// * Time Complexity: O(2^n) In the worst case, this solution tries two possibilities (whether to include or exclude) for every element.
function equalPartition(arr, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  // * If sum is ODD
  if (sum & 1) return false;

  return solve(arr, n, sum / 2);
}

function solve(arr, n, X) {
  // * Base Case
  if (X === 0) return true;
  if (n === 0) return false;

  //* If last element is greater than sum, then ignor it
  if (arr[n - 1] > X) return solve(arr, n - 1, X);
  else {
    return solve(arr, n - 1, X) || solve(arr, n - 1, X - arr[n - 1]);
  }
}

// !=====================Method 2: DP (Memoization)=============

function equalPartition(arr, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  // * If sum is ODD
  if (sum & 1) return false;

  const X = sum / 2;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(X + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= X; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(arr, n, X, dp);
}

function solve(arr, n, X, dp) {
  // * Base Case
  if (X === 0) return true;
  if (n === 0) return false;

  if (dp[n][X] !== -1) return dp[n][X];

  //* If last element is greater than sum, then ignor it
  if (arr[n - 1] > X) return (dp[n][X] = solve(arr, n - 1, X, dp));
  else {
    return (dp[n][X] =
      solve(arr, n - 1, X, dp) || solve(arr, n - 1, X - arr[n - 1], dp));
  }
}

// !==============================Method 3(DP-Tabulation)======================

function equalPartition(arr, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  // * If sum is ODD
  if (sum & 1) return false;

  const X = sum / 2;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(X + 1);
  }

  // Initialize for sum == 0
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Initialise if n == 0
  for (let i = 0; i <= X; i++) {
    dp[0][i] = false;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= X; j++) {
      if (arr[i - 1] > j) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
      }
    }
  }

  return dp[n][X];
}

console.log(equalPartition([1, 5, 11, 5], 4));
