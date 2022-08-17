// !====================Palindrome Partitioning=======================
// * Determine the fewest cuts needed for a palindrome partitioning of a given string.
// * This problem is a variation of Matrix Chain Multiplication problem.
// *  If the string is a palindrome, then we simply return 0.
// *  Else, like the Matrix Chain Multiplication problem, we try making cuts at all possible places, recursively calculate the cost for each cut and return the minimum value.

// !==================Links=======================
// * https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/
// * https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1

// !=========================Recursion =====================
//* Time Complexity: O(2n)
//* Auxiliary Space: O(n)
function palindromicPartition(S) {
  const n = S.length;

  return solve(S, 0, n - 1);
}

function solve(S, i, j) {
  if (i >= j || isPalindrome(S, i, j)) return 0;

  let min = Number.MAX_VALUE;

  for (let k = i; k < j; k++) {
    const count = solve(S, i, k) + solve(S, k + 1, j) + 1;

    if (count < min) min = count;
  }

  return min;
}

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
}

// !=========================Method 2(Memoiation)=======================
function palindromicPartition(S) {
  const n = S.length;
  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(n + 1).fill(-1);
  }

  return solve(S, 0, n - 1, dp);
}

function solve(S, i, j, dp) {
  if (i >= j || isPalindrome(S, i, j)) return 0;

  if (dp[i][j] !== -1) return dp[i][j];
  dp[i][j] = Number.MAX_VALUE;

  for (let k = i; k < j; k++) {
    const count = solve(S, i, k, dp) + solve(S, k + 1, j, dp) + 1;

    if (count < dp[i][j]) dp[i][j] = count;
  }

  return dp[i][j];
}

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
}

// !====================Optimizinf above code ==================
function palindromicPartition(S) {
  const n = S.length;
  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(n + 1).fill(-1);
  }

  return solve(S, 0, n - 1, dp);
}

function solve(S, i, j, dp) {
  if (i >= j || isPalindrome(S, i, j)) return 0;

  if (dp[i][j] !== -1) return dp[i][j];
  dp[i][j] = Number.MAX_VALUE;

  for (let k = i; k < j; k++) {
    let left, right;
    if (dp[i][k] !== -1) {
      left = dp[i][k];
    } else {
      left = solve(S, i, k, dp);
    }

    if (dp[k + 1][j] !== -1) {
      right = dp[k + 1][j];
    } else {
      right = solve(S, k + 1, j, dp);
    }
    const count = left + right + 1;

    if (count < dp[i][j]) dp[i][j] = count;
  }

  return dp[i][j];
}

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
}

console.log(palindromicPartition("ababbbabbababa"));
