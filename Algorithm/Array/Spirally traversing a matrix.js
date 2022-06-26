// !=============Spirally traversing a matrix

// !===============Links =================
// * https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1/?page=2&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/

//!====Method 1
// * Time Complexity: O(m*n).
// * To traverse the matrix O(m*n) time is required.
// * Auxiliary Space: O(1).
function spirallyTraverse(matrix, r, c) {
  let left = 0;
  let right = c - 1;
  let top = 0;
  let bottom = r - 1;
  let res = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }

      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}

// console.log(
//   spirallyTraverse(
//     [
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//       [13, 14, 15, 16],
//     ],
//     4,
//     4
//   )
// );

// console.log(
//   spirallyTraverse(
//     [
//       [6, 6, 2, 28, 2],
//       [12, 26, 3, 28, 7],
//       [22, 25, 3, 4, 23],
//     ],
//     3,
//     5
//   )
// );

console.log(
  spirallyTraverse(
    [
      [5, 11, 30],
      [5, 19, 9],
    ],
    2,
    3
  )
);
