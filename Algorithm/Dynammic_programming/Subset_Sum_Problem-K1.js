// !=================Subset Sum Problem
// * 0/1 Knapsack variation 1

// !=====================Links =====================
// * https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1
// * https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

// !======================Method 1(recursion) ===============
function isSubsetSum(arr, n, sum) {
  if (sum === 0) return true;
  if (n === 0) return false;

  if (sum < arr[n - 1]) return isSubsetSum(arr, n - 1, sum);
  else {
    return (
      isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n - 1])
    );
  }
}

// !========================Method 2(Memoization)===============
function isSubsetSum(arr, n, sum) {
  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(sum + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(arr, n, sum, dp);
}

function solve(arr, n, sum, dp) {
  if (sum === 0) return true;
  if (n === 0) return false;

  if (dp[n][sum] !== -1) return dp[n][sum];

  if (arr[n - 1] > sum) return (dp[n][sum] = solve(arr, n - 1, sum, dp));
  else
    return (dp[n][sum] =
      solve(arr, n - 1, sum, dp) || solve(arr, n - 1, sum - arr[n - 1], dp));
}

// !================================Method 3(Bottom up )============

function isSubsetSum(arr, n, sum) {
  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(sum + 1);
  }

  //* If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) dp[i][0] = true;

  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 1; i <= sum; i++) dp[0][i] = false;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      dp[i][j] = dp[i - 1][j];

      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - arr[i - 1]];
      }
    }
  }

  return dp[n][sum];
}

const arr = [3, 34, 4, 12, 5, 2];
console.log(isSubsetSum(arr, 6, 9));
