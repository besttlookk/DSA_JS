// !+++++++++ Smallest subarray with sum greater than a given value ============

// ! Links ===========
//* https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/

// !============ Method 1(Naive) ==============
//* Time Complexity: O(n2).

//* Auxiliary Space: O(1)
/*
function smallestSubWithSum(a, n, x) {
  let size = Infinity;

  for (let i = 0; i < n; i++) {
    let sum = a[i];
    if (sum > x) return 1;
    for (let j = i + 1; j < n; j++) {
      if (sum > x) {
        size = Math.min(size, j - i);
        continue;
      }

      sum += a[j];
    }
  }

  return size;
}
*/

// ! ==============Method 2 ===================

console.log(smallestSubWithSum([1, 4, 45, 6, 0, 19], 6, 51));
