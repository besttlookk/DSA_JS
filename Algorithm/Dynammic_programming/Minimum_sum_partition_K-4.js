// !===========Minimum sum partition / Partition a set into two subsets such that the difference of subset sums is minimum =========
// * Knapscak Problem variation

// !============================Links ==================
// * https://practice.geeksforgeeks.org/problems/minimum-sum-partition3317/1
// * https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/

// !==========================Method 1(Recursion)=
// * The recursive approach is to generate all possible sums from all the values of the array and to check which solution is the most optimal one.
//* To generate sums we either include the i’th item in set 1 or don’t include, i.e., include in set 2.

// * TC: O(2^n)
function minDifference(arr, n) {
  // Compute total sum of elements
  let sumTotal = 0;
  for (let i = 0; i < n; i++) sumTotal += arr[i];

  // Compute result using recursive function
  return findMinRec(arr, n, 0, sumTotal);
}

function findMinRec(arr, i, sumCalculated, sumTotal) {
  // If we have reached last element.
  // Sum of one subset is sumCalculated,
  // sum of other subset is sumTotal-
  // sumCalculated.  Return absolute
  // difference of two sums.
  if (i == 0) return Math.abs(sumTotal - sumCalculated - sumCalculated);

  // For every item arr[i], we have two choices
  // (1) We do not include it first set
  // (2) We include it in first set
  // We return minimum of two choices
  return Math.min(
    findMinRec(arr, i - 1, sumCalculated + arr[i - 1], sumTotal),
    findMinRec(arr, i - 1, sumCalculated, sumTotal)
  );
}

// !==========================Method 2(Dynamic Prog: Tabulation) ======================
// * Time Complexity = O(n*sum) where n is the number of elements and sum is the sum of all elements.
function minDifference(arr, n) {
  const dp = new Array(n + 1);

  // Calculate sum of all elements
  let sum = 0;
  for (let i = 0; i < n; i++) sum += arr[i];

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(sum + 1);
  }

  //* If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) dp[i][0] = true;

  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 1; i <= sum; i++) dp[0][i] = false;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      dp[i][j] = dp[i - 1][j];

      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - arr[i - 1]];
      }
    }
  }

  // * Upto now every thing was similar to "Subset-sum-problem"
  // * We will look at the last row and find out which sum are possible from given item of arr

  let diff = Number.MAX_VALUE;

  for (let j = 0; j <= Math.floor(sum / 2); j++) {
    if (dp[n][j] === true) {
      diff = Math.min(diff, sum - 2 * j);
    }
  }

  return diff;
}
console.log(minDifference([1, 6, 11, 5], 4));
// console.log(minDifference([1, 4], 2));
