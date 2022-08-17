// !=================Maximum sum rectangle in a 2D matrix
// * This problem is mainly an extension of Largest Sum Contiguous Subarray for 1D array.
/**
 * @param {number} R
 * @param {number} C
 * @param {number[]} M
 * @return {number}
 */
// !=======================Links=====================
// * https://www.geeksforgeeks.org/maximum-sum-rectangle-in-a-2d-matrix-dp-27/
// * https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle2948/1

// !=================Method 1()
function maximumSumRectangle(R, C, M) {
  let result = -Infinity;

  // for each contiguous slice of columns
  for (let i = 0; i < C; i++) {
    const arr = new Array(R).fill(0);

    for (let j = i; j < C; j++) {
      for (let k = 0; k < R; k++) {
        arr[k] += M[k][j];
      }
      let sum = kadane(arr, R);

      result = Math.max(result, sum);
    }
  }

  return result;
}

function kadane(arr, R) {
  let currentSum = 0;
  let maxSumSoFar = -Infinity;

  for (let k = 0; k < R; k++) {
    currentSum += arr[k];
    maxSumSoFar = Math.max(maxSumSoFar, currentSum);

    if (currentSum < 0) currentSum = 0;
  }
  return maxSumSoFar;
}

// var M = [
//   [1, 2, -1, -4, -20],
//   [-8, -3, 4, 2, 1],
//   [3, 8, 10, 1, 3],
//   [-4, -1, 1, 7, -6],
// ];

const M = [
  [-1, -2],
  [-3, -4],
];

// console.log(maximumSumRectangle(4, 5, M));
console.log(maximumSumRectangle(2, 2, M));
