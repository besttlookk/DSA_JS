// !====================Min Cost Path ================
// * You can only traverse down, right and diagonally lower cells from a given cell, i.e., from a given cell (i, j), cells (i+1, j), (i, j+1), and (i+1, j+1) can be traversed.

// !===============Method 3(Dynamic Programming(DP))=================
function minimumCostPath(grid, n) {
  const cost = new Array(n);

  for (let i = 0; i < n; i++) {
    cost[i] = new Array(n);
  }

  cost[0][0] = grid[0][0];

  //* Initialize first row of total cost(tc) array
  for (let i = 1; i < n; i++) {
    cost[0][i] = cost[0][i - 1] + grid[0][i];
  }

  // * Initialize first column of total cost(tc) array
  for (let i = 1; i < n; i++) {
    cost[i][0] = cost[i - 1][0] + grid[i][0];
  }

  //* Construct rest of the tc array
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      cost[i][j] = grid[i][j] + Math.min(cost[i - 1][j], cost[i][j - 1]);
    }
  }

  return cost[n - 1][n - 1];
}

const grid = [
  [9, 4, 9, 9],
  [6, 7, 6, 4],
  [8, 3, 3, 7],
  [7, 4, 9, 10],
];
console.log(minimumCostPath(grid, 4));
