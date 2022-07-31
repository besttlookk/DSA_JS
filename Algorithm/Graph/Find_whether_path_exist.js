/*
Given a grid of size n*n filled with 0, 1, 2, 3. Check whether there is a path possible from the source to destination. You can traverse up, down, right and left.
The description of cells is as follows:

A value of cell 1 means Source.
A value of cell 2 means Destination.
A value of cell 3 means Blank cell.
A value of cell 0 means Wall.
Note: There are only a single source and a single destination.

*/
// !========Links
// * https://practice.geeksforgeeks.org/problems/find-whether-path-exist5238/1?page=1&category[]=Graph&sortBy=submissions

// !============Solution =============

//Function to find whether a path exists from the source to destination.
function is_Possible(grid) {
  const row = grid.length;
  const col = grid[0].length;

  const xt = [1, -1, 0, 0];
  const yt = [0, 0, 1, -1];

  const que = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        que.push([i, j]);
      }
    }
  }

  while (que.length) {
    const front = que.shift();
    const yy = front[0];
    const xx = front[1];
    for (let k = 0; k < 4; k++) {
      const xn = xx + xt[k];
      const yn = yy + yt[k];

      if (isValid(yn, xn, row, col) && grid[yn][xn] === 3) {
        que.push([yn, xn]);
      } else if (isValid(yn, xn, row, col) && grid[yn][xn] === 2) {
        return true;
      }
    }
  }

  return false;
}

function isValid(i, j, row, col) {
  if (i >= 0 && i < row && j >= 0 && j < col) return true;

  return false;
}

// !===========================Method 2 ====================

const grid = [
  [1, 3],
  [3, 2],
];

console.log(is_Possible(grid));
