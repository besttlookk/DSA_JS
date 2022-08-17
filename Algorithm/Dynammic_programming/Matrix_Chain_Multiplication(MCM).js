// !==================Matrix Chain Multiplication ==================
// * Two matrices of size m*n and n*p when multiplied, they generate a matrix of size m*p and the number of multiplications performed are m*n*p.

// * Now, for a given chain of N matrices, the first partition can be done in N-1 ways. For example, sequence of matrices A, B, C and D can be grouped as (A)(BCD), (AB)(CD) or (ABC)(D) in these 3 ways.
// * So a range [i, j] can be broken into two groups like {[i, i+1], [i+1, j]}, {[i, i+2], [i+2, j]}, . . . , {[i, j-1], [j-1, j]}.

// *  # Each of the groups can be further partitioned into smaller groups and we can find the total required multiplications by solving for each of the groups.
// *  # The minimum number of multiplications among all the first partitions is the required answer.

// !========================Links ===================
// * https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1
// * https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/

// !========================Method 1(Recursive)===================
// * Create a recursive function that takes i and j as parameters that determines the range of a group.
// * Iterate from k = i to j to partition the given range into two groups.
// * Call the recursive function for these groups.
// * Return the minimum value among all the partitions as the required minimum number of multiplications to multiply all the matrices of this group.
// * The minimum value returned for the range 0 to N-1 is the required answer.

function matrixMultiplication(arr, n) {
  return solve(arr, 1, n - 1);
}

function solve(arr, i, j) {
  if (i === j) return 0;

  let min = Number.MAX_VALUE;

  // Place parenthesis at different places
  // between first and last matrix,
  // recursively calculate count of multiplications
  // for each parenthesis placement
  // and return the minimum count

  for (let k = i; k < j; k++) {
    const count =
      solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];

    if (count < min) min = count;
  }

  // Return minimum count
  return min;
}

// !================================Method 2(DP: Memoization)=========================

function matrixMultiplication(arr, n) {
  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(n + 1).fill(-1);
  }

  return solve(arr, 1, n - 1, dp);
}

function solve(arr, i, j, dp) {
  if (i === j) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  dp[i][j] = Number.MAX_VALUE;

  for (let k = i; k < j; k++) {
    dp[i][j] = Math.min(
      dp[i][j],
      solve(arr, i, k, dp) +
        solve(arr, k + 1, j, dp) +
        arr[i - 1] * arr[k] * arr[j]
    );
  }
  return dp[i][j];
}

console.log(matrixMultiplication([1, 2, 3, 4, 3], 5));
