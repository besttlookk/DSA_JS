// !=====================Maximum sum such that no two elements are adjacent

// !===================Links =======================
// * https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/
// * https://practice.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1

// !===============================Method 1(Naive Approach)=================
// * Each element has two choices: either it can be the part of the subsequence with the highest sum or it cannot be part of the subsequence.
// *  So to solve the problem, build all the subsequences of the array and find the subsequence with the maximum sum such that no two adjacent elements are present in the subsequence.

// * Time Complexity: O(2N)
// * Auxiliary Space: O(N)

// !==================Method 2 (Dynamic Programming)=======================
// * This problem can be solved using Dynamic Programming based on the following idea:

// * As seen above, each element has two choices. If one element is picked then its neighbours cannot be picked. Otherwise, its neighbours may be picked or may not be.
// * So the maximum sum till ith index has two possibilities: the subsequence includes arr[i] or it does not include arr[i].
// * If arr[i] is included then the maximum sum depends on the maximum subsequence sum till (i-1)th element excluding arr[i-1].
// * Otherwise, the maximum sum is the same as the maximum subsequence sum till (i-1) where arr[i-1] may be included or excluded.

// * So build a 2D dp[N][2] array where dp[i][0] stores maximum subsequence sum till ith index with arr[i] excluded and dp[i][1] stores the sum when arr[i] is included.
// * The values will be obtained by the following relations: dp[i][1] = dp[i-1][0] + arr[i] and dp[i][0] = max(dp[i-1][0], dp[i-1][1])
function findMaxSum(arr, N) {
  // Declare dp array
  let dp = new Array(N);
  for (let i = 0; i < N; i++) {
    dp[i] = new Array(2);
  }
  if (N == 1) {
    return arr[0];
  }

  // Initialize the values in dp array
  dp[0][0] = 0; //* When arr[0] is excluded
  dp[0][1] = arr[0]; //* when included

  // Loop to find the maximum possible sum
  for (let i = 1; i < N; i++) {
    dp[i][1] = dp[i - 1][0] + arr[i]; //* Included = current element + Old excluded
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
  }

  // Return the maximum sum
  return Math.max(dp[N - 1][0], dp[N - 1][1]);
}

console.log(findMaxSum([5, 5, 10, 100, 10, 5], 6));
