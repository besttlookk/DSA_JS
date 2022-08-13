// !========================Printing Longest Common Subsequence
// * Construct L[m+1][n+1] using the steps discussed in LCS
// * The value L[m][n] contains length of LCS. Create a character array lcs[] of length equal to the length of lcs plus 1 (one extra to store \0).
// * Traverse the 2D array starting from L[m][n]. Do following for every cell L[i][j]
// *    # If characters (in X and Y) corresponding to L[i][j] are same (Or X[i-1] == Y[j-1]), then include this character as part of LCS.
// *    # Else compare values of L[i-1][j] and L[i][j-1] and go in direction of greater value.

// !========================Links
// * https://www.geeksforgeeks.org/printing-longest-common-subsequence/

// !===============================

// * Time Complexity: O(m*n)
// * Auxiliary Space: O(m*n)
function printLCS(str1, str2) {
  const n = str1.length;
  const m = str2.length;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (str1[i - 1] === str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  let i = n;
  let j = m;
  let result = "";

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result = str1[i - 1] + result;
      i--;
      j--;
    } else if (dp[i][j - 1] > dp[i - 1][j]) j--;
    else i--;
  }

  return result;
}

console.log(printLCS("AGGTAB", "GXTXAYB"));
