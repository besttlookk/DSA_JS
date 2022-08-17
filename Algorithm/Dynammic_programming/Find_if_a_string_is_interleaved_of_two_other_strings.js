// !================Find if a string is interleaved of two other strings/ Interleaved Strings

/**
 * @param {string} A
 * @param {string} B
 * @param {string} C
 * @returns {boolean}
 */
// !========================Links ==================
// * https://www.geeksforgeeks.org/find-if-a-string-is-interleaved-of-two-other-strings-dp-33/
// * https://www.geeksforgeeks.org/check-whether-a-given-string-is-an-interleaving-of-two-other-given-strings/

// !====================================Method 1(Recursion)=============================
// * two possibilities need to be considered.
// * If the first character of C matches the first character of A, we move one character ahead in A and C and recursively check.
// * If the first character of C matches the first character of B, we move one character ahead in B and C and recursively check.

// * If any of the above function returns true or A, B and C are empty then return true else return false.

// * Time Complexity: O(2^n), where n is the length of the given string.
// We need to iterate the whole string only once hence this is possible in O(n).
// Space Complexity: O(1).
function isInterleave(A, B, C) {
  let n1 = A.length;
  let n2 = B.length;
  let n3 = C.length;

  return solve(A, B, C, n1 - 1, n2 - 1, n3 - 1);
}

function solve(A, B, C, i, j, k) {
  // Base Case: If all strings are empty
  if (i === -1 && j === -1 && k === -1) return true;

  // If C is empty and any of the
  // two strings is not empty
  if (k === -1) return false;

  return (
    (A[i] === C[k] && solve(A, B, C, i - 1, j, k - 1)) ||
    (B[j] === C[k] && solve(A, B, C, i, j - 1, k - 1))
  );
}

// !=========================Method 2(DP: Memoization)===================
function isInterleave(A, B, C) {
  let n1 = A.length;
  let n2 = B.length;
  let n3 = C.length;

  const dp = new Array(n1 + 1);

  for (let i = 0; i <= n1; i++) {
    dp[i] = new Array(n2 + 1).fill(-1);
  }

  returnsolve(A, B, C, n1, n2, n3, dp);
}

function solve(A, B, C, n1, n2, n3, dp) {
  if (n1 === 0 && n2 === 0) return true;

  if (dp[n1][n2] !== -1) return dp[n1][n2];

  let a = 0;
  let b = 0;

  if (n1 - 1 >= 0 && A[n1 - 1] === C[n3 - 1])
    a = solve(A, B, C, n1 - 1, n2, n3 - 1, dp);

  if (n2 - 1 >= 0 && B[n2 - 1] === C[n3 - 1])
    b = solve(A, B, C, n1, n2 - 1, n3 - 1, dp);

  return (dp[n1][n2] = a || b);
}
// !===========================Method 3(DP: Tabulation)==============================
/*
function isInterleave(A, B, C) {
  let n1 = A.length;
  let n2 = B.length;
  let n3 = C.length;

  let dp = new Array(n1 + 1);

  for (let i = 0; i < n1 + 1; i++) {
    dp[i] = new Array(n2 + 1).fill(0);
  }

  if (n1 + n2 !== n3) return false;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      //* two empty strings have an
      //* empty string as interleaving
      if (i == 0 && j == 0) dp[i][j] = true;
      //* A is empty
      else if (i == 0) {
        if (B[j - 1] == C[j - 1]) dp[i][j] = dp[i][j - 1];
      }

      //* B is empty
      else if (j == 0) {
        if (A[i - 1] == C[i - 1]) dp[i][j] = dp[i - 1][j];
      }

      // Current character of C matches
      // with current character of A,
      // but doesn't match with current
      // character of B
      else if (A[i - 1] == C[i + j - 1] && B[j - 1] != C[i + j - 1])
        dp[i][j] = dp[i - 1][j];
      // Current character of C matches
      // with current character of B,
      // but doesn't match with current
      // character of A
      else if (A[i - 1] != C[i + j - 1] && B[j - 1] == C[i + j - 1])
        dp[i][j] = dp[i][j - 1];
      // Current character of C matches
      // with that of both A and B
      else if (A[i - 1] == C[i + j - 1] && B[j - 1] == C[i + j - 1])
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
    }
  }
  return dp[n1 - 1][n2 - 1];
}
*/
console.log(isInterleave("XY", " X", " XXY"));
