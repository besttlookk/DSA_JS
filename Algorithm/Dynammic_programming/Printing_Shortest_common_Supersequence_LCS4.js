// !============== print Shortest possible combination of two strings================
// * We build a DP array to store lengths. After building the DP array, we traverse from bottom right most position.
// *  The approach of printing is similar to printing LCS.

// !========================Method 1(Using Shortest common supersequence table) ================
function printSuperSeq(a, b, m, n) {
  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) dp[i] = new Array(n + 1);

  // Fill table in bottom up manner
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // Below steps follow above recurrence
      if (i == 0) dp[i][j] = j;
      else if (j == 0) dp[i][j] = i;
      else if (a[i - 1] == b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  // Create a string of size index+1 to store the result
  let res = "";
  let i = m,
    j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] == b[j - 1]) {
      // * Put current character in result
      res = a[i - 1] + res;
      i--;
      j--;
    } else if (dp[i - 1][j] < dp[i][j - 1]) {
      res = a[i - 1] + res;
      i--;
    } else {
      res = b[j - 1] + res;
      j--;
    }
  }

  // Copy remaining characters of string 'a'
  while (i > 0) {
    res = a[i - 1] + res;
    i--;
  }

  // Copy remaining characters of string 'b'
  while (j > 0) {
    res = b[j - 1] + res;
    j--;
  }

  return res;
}

// !========================Method 2 (Using LCS table) ==============
function printSuperSeq(a, b, m, n) {
  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) dp[i] = new Array(n + 1);

  // Fill table in bottom up manner
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // Below steps follow above recurrence
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (a[i - 1] === b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  console.log({ dp });
  let i = m;
  let j = n;
  let res = "";

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      res = a[i - 1] + res;
      i--;
      j--;
    } else if (dp[i - 1][j] < dp[i][j - 1]) {
      res = b[j - 1] + res;
      j--;
    } else {
      res = a[i - 1] + res;
      i--;
    }
  }

  while (i > 0) {
    res = a[i - 1] + res;
    i--;
  }

  while (j > 0) {
    res = b[j - 1] + res;
    j--;
  }

  return res;
}

// console.log(printSuperSeq("algorithm", "rhythm", 9, 6));
console.log(printSuperSeq("AGGTAB", "GXTXAYB", 6, 7));
