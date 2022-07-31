// !========== Flood fill Algorithm

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @returns {number[][]}
 */

// !=======================Links ==================
// * https://practice.geeksforgeeks.org/problems/flood-fill-algorithm1856/1
// * https://leetcode.com/problems/flood-fill/
// * https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/

// !======================Solution ===================

function floodFill(arr, n, m, sr, sc, newColor) {
  const oldColor = arr[sr][sc];
  colorNeighbour(arr, n, m, sr, sc, newColor, oldColor);

  return arr;
}

function colorNeighbour(arr, n, m, sr, sc, newColor, oldColor) {
  if (sr < 0 || sr >= n || sc < 0 || sc >= m || arr[sr][sc] !== oldColor)
    return;

  arr[sr][sc] = newColor;

  colorNeighbour(arr, n, m, sr, sc + 1, newColor, oldColor); //* Right
  colorNeighbour(arr, n, m, sr, sc - 1, newColor, oldColor); //* left
  colorNeighbour(arr, n, m, sr - 1, sc, newColor, oldColor); //* Up
  colorNeighbour(arr, n, m, sr + 1, sc, newColor, oldColor); //* Down
}
