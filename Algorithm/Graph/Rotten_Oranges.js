// !==============Minimum time required to rot all oranges====

/**
 * @param {number[][]} grid
 * @returns {number}
 */

// !==============Links
// * https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/

// !================Naive Solution:==============
// * Traverse through all oranges in multiple rounds. In every round, rot the oranges to the adjacent position of oranges which were rotten in the last round.

// * After first iterate: 1 changes to (2 + 1 = 3)
// * for next iteration look for 3.

// * Time Complexity : O((R*C) * (R *C)).
// The matrix needs to be traversed again and again until there is no change in the matrix, that can happen max(R *C)/2 times. So time complexity is O((R * C) * (R *C)).
// * Space Complexity:O(1).
/*
function orangesRotting(grid) {
  let changed = false;
  const row = grid.length;
  const col = grid[0].length;
  let count = 2;

  while (true) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        //* Rot all other oranges present at
        //* (i+1, j), (i, j-1), (i, j+1), (i-1, j)
        if (grid[i][j] === count) {
          // *Check for UP
          if (issafe(i + 1, j, row, col) && grid[i + 1][j] === 1) {
            grid[i + 1][j] = grid[i][j] + 1;
            changed = true;
          }
          // *Check for Down
          if (issafe(i - 1, j, row, col) && grid[i - 1][j] === 1) {
            grid[i - 1][j] = grid[i][j] + 1;
            changed = true;
          }
          // *Check for Right
          if (issafe(i, j + 1, row, col) && grid[i][j + 1] === 1) {
            grid[i][j + 1] = grid[i][j] + 1;
            changed = true;
          }
          // *Check for Left
          if (issafe(i, j - 1, row, col) && grid[i][j - 1] === 1) {
            grid[i][j - 1] = grid[i][j] + 1;
            changed = true;
          }
          console.log(grid);
        }
      }
    }

    //* if no rotten orange found it means all
    //* oranges rottened now
    if (!changed) break;
    count++;
    changed = false;
  }

  // * Check if all the oranges are rotten
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return count - 2;
}

// Check if i, j is under the array limits of row and column
function issafe(i, j, R, C) {
  if (i >= 0 && i < R && j >= 0 && j < C) return true;
  return false;
}
*/

// !===================Method 2(BFS)====================
/*
function orangesRotting(grid) {
  const que = [];
  const row = grid.length;
  const col = grid[0].length;

  // * Store rotten cord in que
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 2) {
        que.push([i, j]);
      }
    }
  }

  let count = 0;
  que.push([-1, -1]); //* to have division
  while (que.length) {
    const front = que.shift();
    const i = front[0];
    const j = front[1];

    // * check if i & j is -1 and it is the last element
    if (i === -1 && j === -1 && que.length === 0) {
      break;
    } else if (i === -1 && j === -1 && que.length > 0) {
      count++;
      que.push([-1, -1]);
    } else {
      // * check all 4 side
      // * UP
      if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j] = 2;
        que.push([i - 1, j]);
      }
      // * DOWN
      if (i + 1 < row && grid[i + 1][j] === 1) {
        grid[i + 1][j] = 2;
        que.push([i + 1, j]);
      } // * LEFT
      if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1] = 2;
        que.push([i, j - 1]);
      } // * LEFT
      if (j + 1 < col && grid[i][j + 1] === 1) {
        grid[i][j + 1] = 2;
        que.push([i, j + 1]);
      }
    }
  }

  // * check if there is still fresh oranges
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return count;
}
*/
// !=====================Method 3 =================
function orangesRotting(grid) {
  const que = [];
  const row = grid.length;
  const col = grid[0].length;
  let count = 0;
  let fresh = 0;

  // * Store rotten cord in que
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 2) {
        que.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) return 0;

  while (que.length) {
    const front = que.shift();
    const yy = front[0]; //* row
    const xx = front[1]; //* col
    const t = front[2];
    count = Math.max(count, t);

    const tx = [1, -1, 0, 0];
    const ty = [0, 0, 1, -1];

    for (let i = 0; i < 4; i++) {
      const xn = xx + tx[i];
      const yn = yy + ty[i];
      if (xn >= 0 && xn < col && yn >= 0 && yn < row) {
        if (grid[yn][xn] === 1) {
          grid[yn][xn] = 2;
          que.push([yn, xn, t + 1]); //* row , col
        }
      }
    }
  }

  // * check if there is still fresh oranges
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return count;
}
// !===============++Example

let v = [
  [2, 1, 0, 2, 1],
  [1, 0, 1, 2, 1],
  [1, 0, 0, 2, 1],
];

console.log(orangesRotting(v));
