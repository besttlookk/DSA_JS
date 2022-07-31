// !===============Maximum path sum in matrix

// * Given a NxN matrix of positive integers.
//* There are only three possible moves from a cell Matrix[r][c].
//* Matrix [r+1] [c]
//* Matrix [r+1] [c-1]
//* Matrix [r+1] [c+1]

// !===============Links ===============
// * https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1
// * https://www.geeksforgeeks.org/min-cost-path-dp-6/

//! =======1) Optimal Substructure
// * The path to reach (m, n) must be through one of the 3 cells: (m-1, n-1) or (m-1, n) or (m, n-1).
// * So maximum cost to reach (m, n) can be written as maximum of the 3 cells plus cost[m][n]”.
// *maxCost(m, n) = max (maxCost(m-1, n-1), maxCost(m-1, n), maxCost(m, n-1)) + cost[m][n]

// !==============2) Overlapping Subproblems
// * Following is a simple recursive implementation of the MCP (Minimum Cost Path) problem. The implementation simply follows the recursive structure mentioned above.

// * It should be noted that the above function computes the same subproblems again and again
// * The time complexity of this naive recursive solution is exponential and it is terribly slow.

// * Time Complexity: O(m * n)
function maximumPath(Matrix, n, i = n - 1, j = n - 1) {
  //* base case
  if (i < 0 || j < 0) {
    return Number.MIN_VALUE;
  } else if (i === 0 && j === 0) return Matrix[0][0];
  else {
    return (
      Matrix[i][j] +
      Math.max(
        maximumPath(Matrix, n, i - 1, j - 1),
        Math.max(
          maximumPath(Matrix, n, i - 1, j),
          maximumPath(Matrix, n, i, j - 1)
        )
      )
    );
  }
}

// !===============Method 3(Dynamic Programming(DP))=================
function maximumPath(Matrix, n) {
  const cost = new Array(n);

  for (let i = 0; i < n; i++) {
    cost[i] = new Array(n);
  }

  cost[0][0] = Matrix[0][0];

  //* Initialize first row of total cost(tc) array
  for (let i = 1; i < n; i++) {
    cost[0][i] = cost[0][i - 1] + Matrix[0][i];
  }

  // * Initialize first column of total cost(tc) array
  for (let i = 1; i < n; i++) {
    cost[i][0] = Matrix[i][0] + Math.max();
  }

  //* Construct rest of the tc array
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cost[i][j] =
        Matrix[i][j] +
        Math.max(cost[i - 1][j - 1], cost[i - 1][j], cost[i][j - 1]);
    }
  }

  console.log(cost);

  return cost[n - 1][n - 1];
}

// !=====================Example 1 ==================

const Matrix = [
  [348, 391],
  [618, 193],
];

console.log(maximumPath(Matrix, 2));
