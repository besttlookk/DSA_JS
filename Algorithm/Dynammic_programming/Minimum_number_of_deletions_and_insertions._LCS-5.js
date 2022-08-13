// !=====================Minimum number of deletions and insertions to transform one string into another

// !=====================================Links ===================
// * https://practice.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions0209/1
// * https://www.geeksforgeeks.org/minimum-number-deletions-insertions-transform-one-string-another/

// !=============================Method 1 ==================
// * An efficient approach uses the concept of finding the length of the longest common subsequence of the given two sequences.
// * len be the length of the longest common subsequence of str1 and str2
// * minimum number of deletions minDel = m – len (as we only need to delete from str1 because we are reducing it to str2)
// * minimum number of Insertions minInsert = n – len (as we are inserting x in str1 , x is a number of characters in str2 which are not taking part in the string which is longest common subsequence )

function minOperations(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  const lcsLength = dp[m][n];

  return m + n - 2 * lcsLength;
}

console.log(minOperations("heap", "pea"));
