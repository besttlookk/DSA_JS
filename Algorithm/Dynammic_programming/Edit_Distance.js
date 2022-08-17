// !=================================== Edit Distance
// * What are the subproblems in this case?
// * 1. If last characters of two strings are same, nothing much to do. Ignore last characters and get count for remaining strings. So we recur for lengths m-1 and n-1.
// * 2. Else (If last characters are not same), we consider all operations on ‘str1’, consider all three operations on last character of first string, recursively compute minimum cost for all three operations and take minimum of three values.
// * a. Insert: Recur for m and n-1
// * b. Remove: Recur for m-1 and n
// * c. Replace: Recur for m-1 and n-1

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// !======================Links ===================
// * https://practice.geeksforgeeks.org/problems/edit-distance3702/1
// * https://www.geeksforgeeks.org/edit-distance-dp-5/

// !========================Method 1( Naive recursive solution.)==================
function editDistance(s, t) {
  const m = s.length;
  const n = t.length;

  return solve(s, t, m, n);
}

function solve(s, t, m, n) {
  // * If first string is empty, the only option is to
  // * insert all characters of second string into first
  if (m === 0) return n;

  //* If second string is empty, the only
  //* option is to remove all characters of first string
  if (n === 0) return m;

  if (s[m - 1] === t[n - 1]) return solve(s, t, m - 1, n - 1);

  return (
    1 +
    Math.min(
      solve(s, t, m, n - 1), //* Insert
      solve(s, t, m - 1, n), //* Remove
      solve(s, t, m - 1, n - 1) //* Replace
    )
  );
}

// !======================Method 2(Memoization)===============

// * Time Complexity: O(m x n)
// * Auxiliary Space: O( m *n)+O(m+n)
function editDistance(s, t) {
  const m = s.length;
  const n = t.length;

  const dp = new Array(m + 1);

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(s, t, m, n, dp);
}

function solve(s, t, m, n, dp) {
  // * If first string is empty, the only option is to
  // * insert all characters of second string into first
  if (m === 0) return n;

  //* If second string is empty, the only
  //* option is to remove all characters of first string
  if (n === 0) return m;

  if (dp[m][n] !== -1) return dp[m][n];

  if (s[m - 1] === t[n - 1]) return solve(s, t, m - 1, n - 1, dp);

  let insert, remove, replace;
  if (dp[m][n - 1] !== -1) {
    insert = dp[m][n - 1];
  } else {
    insert = solve(s, t, m, n - 1, dp);
  }

  if (dp[m - 1][n] !== -1) {
    remove = dp[m - 1][n];
  } else {
    remove = solve(s, t, m - 1, n, dp);
  }

  if (dp[m - 1][n - 1] !== -1) {
    replace = dp[m - 1][n - 1];
  } else {
    replace = solve(s, t, m - 1, n - 1, dp);
  }

  return (dp[m][n] = 1 + Math.min(insert, remove, replace));
}

// !====================Method 3(Tabulation)==============
// * Time Complexity: O(m x n)
// * Auxiliary Space: O(m x n)
function editDistance(s, t) {
  const m = s.length;
  const n = t.length;

  const dp = new Array(m + 1);

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // If first string is empty, only option is
      // to insert all characters of second string
      if (i == 0) dp[i][j] = j; // Min. operations = j
      // If second string is empty, only option is
      // to remove all characters of second string
      else if (j == 0) dp[i][j] = i; // Min. operations = i
      // If last characters are same, ignore last
      // char and recur for remaining string
      else if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      // If the last character is different,
      // consider all possibilities and find the
      // minimum
      else
        dp[i][j] =
          1 +
          Math.min(
            dp[i][j - 1], // Insert
            dp[i - 1][j], // Remove
            dp[i - 1][j - 1]
          ); // Replace
    }
  }

  return dp[m][n];
}

console.log(editDistance("sunday", "saturday"));
