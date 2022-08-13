// !=================Count of Subsets with given Difference

// * It is a variation of Knapsack Pronlem and can be reduced to problem "Count of subset sum"
//* NOTE: When there is 0: We will not include it. We will count the number of zeros and according correct the ans

// !====================Links ======================
// * https://www.geeksforgeeks.org/count-of-subsets-with-given-difference/
// * https://leetcode.com/problems/target-sum/

// !=========================Method 1(recursion)=============
// * S1 + S2 = Total Sum(X)
// * S1 - S2 = Diff(D)
// * 2S1 = X + D
// * S1 = (X + D) / 2

function countSubsets(arr, n, diff) {
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
  }

  const S = (totalSum + diff) / 2;

  return solve(arr, n, S);
}

// * This is same as "Count subsets with sum equal to X"
function solve(arr, n, X) {
  if (X === 0) return 1;
  if (n === 0) return 0;

  if (arr[n - 1] > X) return solve(arr, n - 1, X);
  else {
    return solve(arr, n - 1, X) + solve(arr, n - 1, X - arr[n - 1]);
  }
}

// !=====================Method 2 (DP: Memoization) ===================

function countSubsets(arr, n, diff) {
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
  }

  const S = (totalSum + diff) / 2;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(S + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= S; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(arr, n, S, dp);
}

// * This is same as "Count subsets with sum equal to X"
function solve(arr, n, X, dp) {
  if (X === 0) return 1;
  if (n === 0) return 0;

  if (dp[n][X] !== -1) return dp[n][X];

  if (arr[n - 1] > X) return (dp[n][X] = solve(arr, n - 1, X, dp));
  else {
    return (dp[n][X] =
      solve(arr, n - 1, X, dp) + solve(arr, n - 1, X - arr[n - 1], dp));
  }
}

// !====================Method 3(DP: Tabulation)
// * Time Complexity: O(N*(sum of the subset))
// Auxiliary Space: O(N * array sum)

function countSubsets(arr, n, diff) {
  let totalSum = 0;
  let count = 0;

  if (n == 1 && arr[0] === Math.abs(target)) return 1;
  else if (n == 1 && arr[0] !== target) return 0;

  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
    if (arr[i] == 0) {
      count++;
    }
  }

  if (diff > totalSum || (totalSum + diff) % 2 != 0) return 0;

  const S = (totalSum + diff) / 2;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(S + 1);
  }

  // * Initialization when sum = 0
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= S; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= S; j++) {
      if (arr[i - 1] > j || arr[i - 1] == 0) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
      }
    }
  }

  return Math.pow(2, count) * dp[n][S];
}
console.log(countSubsets([1, 2, 3, 1, 2], 5, 1));
