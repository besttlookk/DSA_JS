// !==================Count Palindromic Subsequences==================

// !===================Links==================
// * https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1
// * https://www.geeksforgeeks.org/count-palindromic-subsequence-given-string/

// !======================Method(Recursion)====================
function countPS(str, i = 0, j = str.length - 1) {
  if (i > j) return 0;

  //* Every single character of a string is a palindrome subsequence
  if (i === j) return 1;

  //* If first and last characters are same, then we
  //* consider it as palindrome subsequence and check
  //* for the rest subsequence (i+1, j), (i, j-1)
  if (str[i] === str[j])
    return 1 + countPS(str, i + 1, j) + countPS(str, i, j - 1);
  else {
    // check for rest sub-sequence and  remove common
    // palindromic subsequences as they are counted
    // twice when we do countPS(i+1, j) + countPS(i,j-1)
    return (
      countPS(str, i + 1, j) +
      countPS(str, i, j - 1) -
      countPS(str, i + 1, j - 1)
    );
  }
}

// !===================Method 2(Memoization)========================
// * Time Complexity : O(N2), Auxiliary Space: O(N2)
function countPS(str) {
  const n = str.length;
  let dp = new Array(1000);
  for (let i = 0; i < 1000; i++) {
    dp[i] = new Array(1000);
    for (let j = 0; j < 1000; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(str, 0, n - 1, dp);
}

function solve(str, i, j, dp) {
  if (i > j) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  //* Every single character of a string is a palindrome subsequence
  if (i === j) return (dp[i][j] = 1);

  if (str[i] === str[j])
    return (
      (dp[i][j] = 1 + solve(str, i + 1, j, dp) + solve(str, i, j - 1, dp)) %
      1000000007
    );
  else {
    return (dp[i][j] =
      (solve(str, i + 1, j, dp) +
        solve(str, i, j - 1, dp) -
        solve(str, i + 1, j - 1, dp)) %
      1000000007);
  }
}

// !=======================Method 3 Tabulation ===============
function countPS(str) {
  let N = str.length;
  const MOD = 1000000007;

  // create a 2D array to store the count
  // of palindromic subsequence
  let cps = new Array(N);
  for (let i = 0; i < N; i++) {
    cps[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      cps[i][j] = 0;
    }
  }

  // palindromic subsequence of length 1
  for (let i = 0; i < N; i++) cps[i][i] = 1;

  // check subsequence of length L is
  // palindrome or not
  for (let L = 2; L <= N; L++) {
    for (let i = 0; i <= N - L; i++) {
      let k = L + i - 1;
      if (str[i] == str[k]) {
        cps[i][k] = (cps[i][k - 1] + cps[i + 1][k] + 1) % MOD;
      } else {
        cps[i][k] =
          (cps[i][k - 1] + cps[i + 1][k] - cps[i + 1][k - 1] + MOD) % MOD;
      }
    }
  }

  // return total palindromic subsequence
  return cps[0][N - 1];
}
console.log(countPS("abcb"));
