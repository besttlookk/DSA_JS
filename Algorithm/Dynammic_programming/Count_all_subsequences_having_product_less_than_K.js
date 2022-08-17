// !=================Count all subsequences having product less than K

// !===============================Links==============================
// * https://www.geeksforgeeks.org/count-subsequences-product-less-k/

// * This problem can be solved using dynamic programming where dp[i][j] = number of subsequences having product less than i using first j terms of the array.
// * Which can be obtained by : number of subsequences using first j-1 terms + number of subsequences that can be formed using j-th term.

function productSubSeqCount(arr, k) {
  let n = arr.length;
  let dp = new Array(k + 1);
  for (let i = 0; i < k + 1; i++) {
    dp[i] = new Array(n + 1);
    for (let j = 0; j < n + 1; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      // number of subsequence using j-1 terms
      dp[i][j] = dp[i][j - 1];

      // if arr[j-1] > i it will surely make
      // product greater thus it won't contribute
      // then
      if (arr[j - 1] <= i && arr[j - 1] > 0)
        // number of subsequence using 1 to j-1
        // terms and j-th term
        dp[i][j] += dp[parseInt(i / arr[j - 1], 10)][j - 1] + 1;
    }
  }
  return dp[k][n];
}
