// !=====Replace O's with X's
/**
 * @param {number} n
 * @param {number} m
 * @param {string[][]} mat
 * @return {string[][]}
 */
// !=======links
// * https://practice.geeksforgeeks.org/problems/replace-os-with-xs0052/1?page=3&category[]=Graph&sortBy=submissions

// !=============================Solution 1(Boundary DFS) ===============
// * Run DFS on Side node

function fill(n, m, mat) {
  // * Top Boundry and bottom boundry
  for (let j = 0; j < m; j++) {
    if (mat[0][j] === "O") dfs(0, j, n, m, mat);
    if (mat[n - 1][j] === "O") dfs(n - 1, j, n, m, mat);
  }

  // * Right and left boundry
  for (let i = 0; i < n; i++) {
    if (mat[i][0] === "O") dfs(i, 0, n, m, mat);
    if (mat[i][m - 1] === "O") dfs(i, m - 1, n, m, mat);
  }

  // * Now change all the "O" to "X"
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === "O") mat[i][j] = "X";
    }
  }

  // * now change back all the "B" to "O"
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === "B") mat[i][j] = "O";
    }
  }

  return mat;
}

function dfs(i, j, row, col, mai) {
  if (i < 0 || i >= row || j < 0 || j >= col || mai[i][j] !== "O") return;

  mai[i][j] = "B";

  dfs(i, j + 1, row, col, mai);
  dfs(i, j - 1, row, col, mai);
  dfs(i + 1, j, row, col, mai);
  dfs(i - 1, j, row, col, mai);
}

const n = 5,
  m = 4;
const mat = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "O"],
];

console.log(fill(n, m, mat));
