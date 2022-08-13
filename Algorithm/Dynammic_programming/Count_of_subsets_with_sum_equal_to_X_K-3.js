// !=============Count of subsets with sum equal to X / Perfect Sum Problem==============
// * Knapsack variation problem

// !==================Links ===================
// * https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1
// * https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/

// !======================Method(Recursion)===================

function perfectSum(arr, n, sum) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  if (arr[n - 1] > sum) return perfectSum(arr, n - 1, sum);
  else {
    return (
      perfectSum(arr, n - 1, sum) + perfectSum(arr, n - 1, sum - arr[n - 1])
    );
  }
}

// !====================Method 2(DP- Memoization)

function perfectSum(arr, n, sum) {
  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(sum + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      dp[i][j] = -1;
    }
  }
  // * Sort in decending order
  arr.sort((a, b) => b - a); //* IMPORTANT STEP
  return solve(arr, n, sum, dp);
}

function solve(arr, n, sum, dp) {
  if (sum === 0) return 1;
  if (n === 0 && sum !== 0) return 0;

  if (dp[n][sum] !== -1) return dp[n][sum];

  if (arr[n - 1] > sum)
    return (dp[n][sum] = solve(arr, n - 1, sum, dp) % 1000000007);
  else {
    return (dp[n][sum] =
      (solve(arr, n - 1, sum, dp) + solve(arr, n - 1, sum - arr[n - 1], dp)) %
      1000000007);
  }
}

// !=====================Method 3(DP: Tabulation)===========================
function perfectSum(arr, n, sum) {
  const dp = new Array(n + 1);

  // * Sort in decending order
  arr.sort((a, b) => b - a); //* IMPORTANT STEP

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(sum + 1);
  }

  //* If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) dp[i][0] = 1;

  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 1; i <= sum; i++) dp[0][i] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - arr[i - 1]]) % 1000000007;
      } else {
        dp[i][j] = dp[i - 1][j] % 1000000007;
      }
    }
  }

  return dp[n][sum];
}
// console.log(perfectSum([1, 2, 3, 3], 4, 6)); // 3
// console.log(perfectSum([3, 3, 3, 3], 4, 6)); // 6

console.log(perfectSum([9, 7, 0, 3, 9, 8, 6, 5, 7, 6], 10, 31));
