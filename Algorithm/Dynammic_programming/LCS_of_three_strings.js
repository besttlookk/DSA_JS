// !=======================LCS of three strings==========================
// * This problem is simply an extension of LCS

/**
 * @param {string} A
 * @param {string} B
 * @param {string} C
 * @param {number} n1
 * @param {number} n2
 * @param {number} n3
 * @return {number}
 */
// !=========================Links====================
// * https://www.geeksforgeeks.org/lcs-longest-common-subsequence-three-strings/
// * https://practice.geeksforgeeks.org/problems/lcs-of-three-strings0028/1

// !==========================Method 1 (Recursion) =====================
function LCSof3(A, B, C, n1, n2, n3) {
  if (n1 === 0 || n2 === 0 || n3 === 0) return 0;

  if (A[n1 - 1] === B[n2 - 1] && B[n2 - 1] === C[n3 - 1])
    return 1 + LCSof3(A, B, C, n1 - 1, n2 - 1, n3 - 1);

  return Math.max(
    LCSof3(A, B, C, n1 - 1, n2, n3),
    LCSof3(A, B, C, n1, n2 - 1, n3),
    LCSof3(A, B, C, n1, n2, n3 - 1)
  );
}

// !==========================Method 2 (Memoization)======================

function LCSof3(A, B, C, n1, n2, n3) {
  let dp = new Array(100);
  for (let i = 0; i < 100; i++) {
    dp[i] = new Array(100);
    for (let j = 0; j < 100; j++) {
      dp[i][j] = new Array(100);
      for (let k = 0; k < 100; k++) {
        dp[i][j][k] = -1;
      }
    }
  }

  return solve(A, B, C, n1 - 1, n2 - 1, n3 - 1, dp);
}

function solve(A, B, C, i, j, k, dp) {
  if (i === -1 || j === -1 || k === -1) return 0;

  if (dp[i][j][k] !== -1) return dp[i][j][k];

  if (A[i] === B[j] && B[j] === C[k])
    return (dp[i][j][k] = 1 + solve(A, B, C, i - 1, j - 1, k - 1, dp));
  else {
    return (dp[i][j][k] = Math.max(
      solve(A, B, C, i - 1, j, k, dp),
      solve(A, B, C, i, j - 1, k, dp),
      solve(A, B, C, i, j, k - 1, dp)
    ));
  }
}

// !===========================Method 3================

function LCSof3(A, B, C, n1, n2, n3) {
  let dp = new Array(n1 + 1);
  for (let i = 0; i < n1 + 1; i++) {
    dp[i] = new Array(n2 + 1);
    for (let j = 0; j < n2 + 1; j++) {
      dp[i][j] = new Array(n3 + 1);
      for (let k = 0; k < n3 + 1; k++) {
        dp[i][j][k] = 0;
      }
    }
  }

  for (let i = 0; i <= n1; i++) {
    for (let j = 0; j <= n2; j++) {
      for (let k = 0; k <= n3; k++) {
        if (i == 0 || j == 0 || k == 0) dp[i][j][k] = 0;
        else if (A[i - 1] == B[j - 1] && A[i - 1] == C[k - 1])
          dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
        else
          dp[i][j][k] = Math.max(
            Math.max(dp[i - 1][j][k], dp[i][j - 1][k]),
            dp[i][j][k - 1]
          );
      }
    }
  }

  return dp[n1][n2][n3];
}

console.log(LCSof3("geeks", "geeksfor", "geeksforgeeks", 5, 8, 13));
