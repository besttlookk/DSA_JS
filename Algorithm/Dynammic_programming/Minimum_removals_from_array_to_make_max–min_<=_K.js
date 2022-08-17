// !==========Minimum removals from array to make max – min <= K / Array Removals===============
// * Sort the given elements.
// * Using the greedy approach, the best way is to remove the minimum element or the maximum element and then check if Amax-Amin <= K.
// *  There are various combinations of removals that have to be considered.
// * We write a recurrence relation to try every possible combination. There will be two possible ways of removal, either we remove the minimum or we remove the maximum.
// * We only remove an element if a[j]-a[i]>k,
// *  the two possible ways of removal are (i+1…j) or (i…j-1). The minimum of the two is considered.
// * Let DPi, j be the number of elements that need to be removed so that after removal a[j]-a[i]<=k.
// * Recurrence relation for sorted array:
// *  # DPi, j = 1+ (min(countRemovals(i+1, j), countRemovals(i, j-1))
// !========================Links==========================
// * https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/
// * https://practice.geeksforgeeks.org/problems/array-removals/1

// !=================================Method 1(Memoization) ================

//* Time Complexity :O(n2)
//* Auxiliary Space: O(n2)
function removals(a, n, k) {
  let MAX = 100;
  let dp = new Array(MAX);
  for (let i = 0; i < MAX; i++) {
    dp[i] = new Array(MAX);
  }

  //* sort the array
  a.sort(function (a, b) {
    return a - b;
  });

  // fill all stated with -1
  // when only one element
  for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < MAX; j++) {
      dp[i][j] = -1;
    }
  }

  if (n == 1) return 0;
  else return countRemovals(a, 0, n - 1, k, dp);
}

function countRemovals(a, i, j, k, dp) {
  // base case when all elements are removed
  if (i >= j) return 0;
  // if condition is satisfied, no more
  // removals are required
  else if (a[j] - a[i] <= k) return 0;
  // if the state has already been visited
  else if (dp[i][j] != -1) return dp[i][j];
  // when Amax-Amin>d
  else if (a[j] - a[i] > k) {
    // minimum is taken of the removal
    // of minimum element or removal
    // of the maximum element
    dp[i][j] =
      1 +
      Math.min(
        countRemovals(a, i + 1, j, k, dp),
        countRemovals(a, i, j - 1, k, dp)
      );
  }
  return dp[i][j];
}

// * The solution could be further optimized.

console.log(removals([1, 3, 4, 9, 10, 11, 12, 17, 20], 9, 4));
