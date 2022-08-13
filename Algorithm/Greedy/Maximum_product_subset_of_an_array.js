// !===================Maximum product subset of an array=================

// !=====================Links ==========================
// * https://practice.geeksforgeeks.org/problems/maximum-product-subset-of-an-array/1
// * https://www.geeksforgeeks.org/maximum-product-subset-array/

// !====================Method 1(Brute force)====================
// * A simple solution is to generate all subsets, find product of every subset and return maximum product.

// * TC: O(n*n)
// * SC: O(1)

function findMaxProduct(n, arr) {
  let max = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = i; j < n; j++) {
      product *= arr[j];
      max = Math.max(max, product);
    }
  }

  return max;
}

// !=======================Method 2====================
// * If there are even number of negative numbers and no zeros, result is simply product of all
// * If there are odd number of negative numbers and no zeros, result is product of all except the negative integer with the least absolute value.
// * If there are zeros, result is product of all except these zeros with one exceptional case. The exceptional case is when there is one negative number and all other elements are 0. In this case, result is 0.

function findMaxProduct(n, arr) {
  if (n === 1) return arr[0];

  //* Find count of negative numbers,
  //* count of zeros, negative number with least absolute value
  //* and product of non-zero numbers
  let negativeCount = 0;
  let zeroCount = 0;
  let maxNegative = Number.MIN_SAFE_INTEGER;
  let prod = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zeroCount++;
      continue;
    }

    if (arr[i] < 0) {
      negativeCount++;
      maxNegative = Math.max(maxNegative, arr[i]);
    }

    prod = (prod * arr[i]) % 1000000007; //* non-zero product
  }

  //* If there are all zeros
  if (zeroCount === n) return 0;

  // * If there are odd number of negative numbers
  if (negativeCount & 1) {
    // Exceptional case: There is only
    // negative and all other are zeros
    if (negativeCount === 1 && zeroCount > 0 && zeroCount + negativeCount == n)
      return 0;

    // Otherwise result is product of
    // all non-zeros divided by negative
    // number with least absolute value.
    prod /= maxNegative;
  }

  return prod;
}

const arr = [
  7, -2, 7, -1, 2, -3, -10, -2, -9, 6, -5, -10, 9, 4, -5, 6, 0, 2, -10, -5, -6,
  1, -6, 6, -3, 7, 7, -9, -10, -4, -9, 4, 9, 10, 3, -7, -6, 6, 3, 7, -3, -2,
  -10, -2, 10, -3, -9, 0, 7, -1, -3, 5, -5, -4, -3, 2, 3, 2, -7, -8, 9, 10, 10,
  2, 4, 2, -8, 2, -3,
];
console.log(findMaxProduct(69, arr));
