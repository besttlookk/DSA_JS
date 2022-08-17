// !================Largest square formed in a matrix

// !===========================Links =====================
// * https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1
// * https://www.geeksforgeeks.org/maximum-size-sub-matrix-with-all-1s-in-a-binary-matrix/

// !======================DP(Tabulation) =======================
function maxSquare(mat, n, m) {
  let largest = Number.MIN_VALUE;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (mat[i - 1][j - 1] === 1) {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
        largest = Math.max(largest, dp[i][j]);
      }
    }
  }

  return largest * largest;
}
const M = [
  [0, 1, 1, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];
console.log(maxSquare(M, 6, 5));
