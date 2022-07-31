// !==========================Distance of nearest cell having 1

// !========================== Links ======================
// * https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1
// * https://www.geeksforgeeks.org/distance-nearest-cell-1-binary-matrix/

// !==============Method(Uinsg queue) ================
/*
function nearest(grid) {
  const row = grid.length;
  const col = grid[0].length;

  const ans = new Array(row);

  for (let i = 0; i < row; i++) {
    ans[i] = new Array(col).fill(Number.MAX_VALUE);
  }

  const que = [];

  // * scan the grid and find the value 1
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        ans[i][j] = 0;
        que.push([i, j]);
      }
    }
  }

  while (que.length) {
    const front = que[0];
    const rr = front[0];
    const cc = front[1];

    //*Check UP
    if (rr - 1 >= 0 && ans[rr][cc] + 1 < ans[rr - 1][cc]) {
      ans[rr - 1][cc] = ans[rr][cc] + 1;
      que.push([rr - 1, cc]);
    }
    // * Check down
    if (rr + 1 < row && ans[rr][cc] + 1 < ans[rr + 1][cc]) {
      ans[rr + 1][cc] = ans[rr][cc] + 1;
      que.push([rr + 1, cc]);
    }
    // * right
    if (cc + 1 < col && ans[rr][cc] + 1 < ans[rr][cc + 1]) {
      ans[rr][cc + 1] = ans[rr][cc] + 1;
      que.push([rr, cc + 1]);
    }
    // * left
    if (cc - 1 >= 0 && ans[rr][cc] + 1 < ans[rr][cc - 1]) {
      ans[rr][cc - 1] = ans[rr][cc] + 1;
      que.push([rr, cc - 1]);
    }

    que.shift();
  }

  return ans;
}
*/
// !==============================Method 2 =================
/*
function nearest(grid) {
  const row = grid.length;
  const col = grid[0].length;

  const ans = new Array(row);
  const visited = new Array(row);

  for (let i = 0; i < row; i++) {
    ans[i] = new Array(col).fill(0);
    visited[i] = new Array(col).fill(false);
  }

  const que = [];

  // * scan the grid and find the value 1
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        que.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  while (que.length) {
    const front = que[0];
    const rr = front[0];
    const cc = front[1];

    //*Check UP
    if (rr - 1 >= 0 && visited[rr - 1][cc] === false) {
      visited[rr - 1][cc] = true;
      ans[rr - 1][cc] = ans[rr][cc] + 1;
      que.push([rr - 1, cc]);
    }
    // * Check down
    if (rr + 1 < row && visited[rr + 1][cc] === false) {
      visited[rr + 1][cc] = true;

      ans[rr + 1][cc] = ans[rr][cc] + 1;
      que.push([rr + 1, cc]);
    }
    // * right
    if (cc + 1 < col && visited[rr][cc + 1] === false) {
      visited[rr][cc + 1] = true;

      ans[rr][cc + 1] = ans[rr][cc] + 1;
      que.push([rr, cc + 1]);
    }
    // * left
    if (cc - 1 >= 0 && visited[rr][cc - 1] === false) {
      visited[rr][cc - 1] = true;

      ans[rr][cc - 1] = ans[rr][cc] + 1;
      que.push([rr, cc - 1]);
    }

    que.shift();
  }

  return ans;
}
*/
// !================Method 3(in-place modified grid matrix)=============
/*
function nearest(grid) {
  const row = grid.length;
  const col = grid[0].length;

  const possR = [0, 0, 1, -1];
  const possC = [1, -1, 0, 0];

  const visited = new Array(row);

  for (let i = 0; i < row; i++) {
    visited[i] = new Array(col).fill(false);
  }

  const que = [];

  // * scan the grid and find the value 1
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        que.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  while (que.length) {
    const front = que.shift();
    const rr = front[0];
    const cc = front[1];
    const dist = front[2];

    grid[rr][cc] = dist;

    for (let i = 0; i < 4; i++) {
      const rn = rr + possR[i];
      const cn = cc + possC[i];

      if (rn >= 0 && rn < row && cn >= 0 && cn < col && !visited[rn][cn]) {
        que.push([rn, cn, dist + 1]);
        visited[rn][cn] = true;
      }
    }
  }

  return grid;
}
*/
// !========================Method 4 ======================
function nearest(grid) {
  const row = grid.length;
  const col = grid[0].length;

  const ans = new Array(row);

  const possR = [0, 0, 1, -1];
  const possC = [1, -1, 0, 0];

  for (let i = 0; i < row; i++) {
    ans[i] = new Array(col).fill(Number.MAX_VALUE);
  }

  const que = [];

  // * scan the grid and find the value 1
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        ans[i][j] = 0;
        grid[i][j] = 2;
        que.push([i, j]);
      }
    }
  }

  while (que.length) {
    const front = que.shift();
    const rr = front[0];
    const cc = front[1];

    for (let i = 0; i < 4; i++) {
      const rn = rr + possR[i];
      const cn = cc + possC[i];

      if (rn >= 0 && rn < row && cn >= 0 && cn < col && grid[rn][cn] !== 2) {
        ans[rn][cn] = Math.min(ans[rn][cn], 1 + ans[rr][cc]);
        que.push([rn, cn]);
        grid[rn][cn] = 2;
      }
    }
  }

  return ans;
}
// !=======================Example 1 =========
// const grid = [
//   [0, 1, 1, 0],
//   [1, 1, 0, 0],
//   [0, 0, 1, 1],
// ];

const grid = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 0, 0],
];
console.log(nearest(grid));
