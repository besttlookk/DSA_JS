// !====================Maximum Length Chain of Pairs======================
// * This problem is a variation of standard Longest Increasing Subsequence problem.
// * 1) Sort given pairs in increasing order of first (or smaller) element. Why do we need sorting? Consider the example {{6, 8}, {3, 4}} to understand the need of sorting. If we proceed to second step without sorting, we get output as 1. But the correct output is 2.
// * 2) Now run a modified LIS process where we compare the second element of already finalized LIS with the first element of new LIS being constructed.

// !=======================Links=========================
// * https://practice.geeksforgeeks.org/problems/max-length-chain/1
// !========================Method 1====================

class Pair {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

function maxChainLen(arr, n) {
  let max = 0;
  let mcl = new Array(n);

  /* Initialize MCL (max chain length)
        values for all indexes */
  for (let i = 0; i < n; i++) mcl[i] = 1;

  /* Compute optimized chain length
        values in bottom up manner */
  for (let i = 1; i < n; i++)
    for (let j = 0; j < i; j++)
      if (arr[i].a > arr[j].b && mcl[i] < mcl[j] + 1) mcl[i] = mcl[j] + 1;

  // mcl[i] now stores the maximum
  // chain length ending with pair i

  /* Pick maximum of all MCL values */
  for (let i = 0; i < n; i++) if (max < mcl[i]) max = mcl[i];

  return max;
}

console.log(maxChainLen());
