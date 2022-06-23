// !=============Spirally traversing a matrix

// !===============Links =================
// * https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1/?page=2&curated[]=2&sortBy=submissions

function spirallyTraverse(matrix, r, c) {
  let row = 0;
  let col = -1;

  for (let i = 0; i < c; i++) {
    console.log(matrix[row][i]);
    col++;
  }
  // console.log({ col });
  for (let i = row + 1; i < r; i++) {
    console.log(matrix[i][col]);
    row++;
  }

  // console.log({ row });
}

console.log(
  spirallyTraverse(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    4,
    4
  )
);
