// !=============================Gold Mine Problem=================================
// * Maximum path sum in matrix:
// *

// !============================Variation ====================================
// * Maximum path sum in matrix :
// * #  https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1
// * # https://www.geeksforgeeks.org/maximum-path-sum-matrix/

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} M
 * @return {number}
 */

// !============================Links=======================
// * https://practice.geeksforgeeks.org/problems/gold-mine-problem2608/1
// * https://www.geeksforgeeks.org/gold-mine-problem/

// !===============================Method 1(Recusrion)======================
//* Time complexity: O(3N*M)
//* Auxiliary Space: O(N*M)
function maxGold(n, m, M) {
  let maxGold = 0;

  // * we are trying from colum 0 and for all the rows(0 to n - 1)
  for (let i = 0; i < n; i++) {
    //* Recursive function call for  ith row.
    const goldCollected = collectGold(M, m, n, i, 0);
    maxGold = Math.max(maxGold, goldCollected);
  }

  return maxGold;
}

function collectGold(M, m, n, x, y) {
  // Base condition.
  if (x < 0 || x == n || y == m) {
    return 0;
  }

  //* Right upper diagonal
  let rightUpperDiagonal = collectGold(M, m, n, x - 1, y + 1);

  //* Right upper diagonal
  let right = collectGold(M, m, n, x, y + 1);

  //* Right upper diagonal
  let rightLowerDiagonal = collectGold(M, m, n, x + 1, y + 1);

  //* Return the maximum and store the value
  return M[x][y] + Math.max(right, rightLowerDiagonal, rightUpperDiagonal);
}

// !=================================Method 2: Memoization=========================

//* Time Complexity :O(m*n)
//* Space Complexity :O(m*n)

function maxGold(n, m, M) {
  let maxGold = 0;

  // Initialize the dp vector
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(-1);
  }

  // * we are trying from colum 0 and for all the rows(0 to n - 1)
  for (let i = 0; i < n; i++) {
    //* Recursive function call for  ith row.
    const goldCollected = collectGold(M, m, n, i, 0, dp);
    maxGold = Math.max(maxGold, goldCollected);
  }

  return maxGold;
}

function collectGold(M, m, n, x, y, dp) {
  // Base condition.
  if (x < 0 || x == n || y == m) {
    return 0;
  }

  if (dp[x][y] !== -1) return dp[x][y];

  //* Right upper diagonal
  let rightUpperDiagonal = collectGold(M, m, n, x - 1, y + 1, dp);

  //* Right upper diagonal
  let right = collectGold(M, m, n, x, y + 1, dp);

  //* Right upper diagonal
  let rightLowerDiagonal = collectGold(M, m, n, x + 1, y + 1, dp);

  //* Return the maximum and store the value
  return (dp[x][y] =
    M[x][y] + Math.max(right, rightLowerDiagonal, rightUpperDiagonal));
}

// !===========================Method 3(Tabulation)=========================

// * Time Complexity :O(m*n)
// * Space Complexity :O(m*n)

function maxGold(n, m, M) {
  // Create a table for storing
  // intermediate results and initialize
  // all cells to 0. The first row of
  // goldMineTable gives the maximum
  // gold that the miner can collect
  // when starts that row
  let goldTable = new Array(n);

  for (let i = 0; i < n; i++) {
    goldTable[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      goldTable[i][j] = 0;
    }
  }

  for (let col = m - 1; col >= 0; col--) {
    for (let row = 0; row < n; row++) {
      // Gold collected on going to
      // the cell on the right(->)
      let right = col == m - 1 ? 0 : goldTable[row][col + 1];

      // Gold collected on going to
      // the cell to right up (/)
      let right_up = row == 0 || col == m - 1 ? 0 : goldTable[row - 1][col + 1];

      // Gold collected on going to
      // the cell to right down (\)
      let right_down =
        row == n - 1 || col == m - 1 ? 0 : goldTable[row + 1][col + 1];

      // Max gold collected from taking
      // either of the above 3 paths
      goldTable[row][col] =
        gold[row][col] + Math.max(right, Math.max(right_up, right_down));
    }
  }

  // The max amount of gold collected will be
  // the max value in first column of all rows
  let res = goldTable[0][0];

  for (let i = 1; i < n; i++) res = Math.max(res, goldTable[i][0]);

  return res;
}

// !===========================Method 4(Space optimazation of above code)=================
function maxGold(n, m, M) {
  for (let col = m - 2; col >= 0; col--) {
    for (let row = 0; row < n; row++) {
      // Gold collected on going to
      // the cell on the right(->)
      let right = M[row][col + 1];

      // Gold collected on going to
      // the cell to right up (/)
      let right_up = row == 0 ? 0 : M[row - 1][col + 1];

      // Gold collected on going to
      // the cell to right down (\)
      let right_down = row == n - 1 ? 0 : M[row + 1][col + 1];

      // Max gold collected from taking
      // either of the above 3 paths
      M[row][col] =
        M[row][col] + Math.max(right, Math.max(right_up, right_down));
    }
  }

  // The max amount of gold collected will be
  // the max value in first column of all rows
  let res = M[0][0];

  for (let i = 1; i < n; i++) res = Math.max(res, M[i][0]);

  return res;
}
let gold = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2],
];

let m = 4,
  n = 4;
console.log(maxGold(m, n, gold));
