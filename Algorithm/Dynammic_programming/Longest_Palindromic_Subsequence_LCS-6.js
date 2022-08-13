// !========================Longest Palindromic Subsequence

// !===========================Links==================
// * https://practice.geeksforgeeks.org/problems/longest-palindromic-subsequence-1612327878/1
// * https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/

// !=====================Recursion ==============

function longestPalinSubseq(S) {
  const n = S.length;
  return solve(S.split(""), 0, n - 1);
}

function solve(seq, i, j) {
  //* Base Case 1: If there is only 1 character
  if (i === j) return 1;

  //* Base Case 2: If there are only 2 characters and both are same
  if (seq[i] === seq[j] && i + 1 === j) return 2;

  //* If the first and last characters match
  if (seq[i] === seq[j]) return 2 + solve(seq, i + 1, j - 1);

  //* If the first and last characters do not match

  return Math.max(solve(seq, i + 1, j), solve(seq, i, j - 1));
}
// * . If we draw the complete recursion tree, then we can see that there are many subproblems that are solved again and again.
// !=========================Method 3(DP: Tabulation)================
// * Just find Longest common subsequence between given string and its reverse.
/*
function longestPalinSubseq(S) {
  const R = S.split("").reverse().join("");
  const m = S.length;
  const n = R.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (S[i - 1] === R[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[m][n];
}
*/
console.log(longestPalinSubseq("bbabcbcab"));
