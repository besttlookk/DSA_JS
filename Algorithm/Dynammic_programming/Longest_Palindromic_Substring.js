// !==================Longest Palindromic Substring=======================
/**
 * @param {string} S
 * @return {string}
 */
// !========================Links========================
// * https://leetcode.com/problems/longest-palindromic-substring/
// * https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string1956/1
// * https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/

// !===========================(Method 1: Brute Force. ) ================

// !===========================Method 2(Dynamic Programming)=============
function longestPalindrome(S) {
  let n = S.length;

  // table[i][j] will be false if
  // substring str[i..j] is not palindrome.
  // Else table[i][j] will be true

  let table = new Array(n);
  for (let i = 0; i < n; i++) {
    table[i] = new Array(n);
  }

  //* All substrings of length 1 are palindromes
  let maxLength = 1;
  for (let i = 0; i < n; ++i) table[i][i] = true;

  // check for sub-string of length 2.
  let start = 0;
  for (let i = 0; i < n - 1; ++i) {
    if (S[i] == S[i + 1]) {
      table[i][i + 1] = true; //* i is the start index && i + 1 is the end index
      // * Incase of conflict, return the substring which occurs first ( with the least starting index ).
      if (start === 0) {
        start = i;
      }
      maxLength = 2;
    }
  }

  //* Check for lengths greater than 2.
  //* k is length of substring
  for (let k = 3; k <= n; ++k) {
    //* Fix the starting index
    for (let i = 0; i < n - k + 1; ++i) {
      //* Get the ending index of substring from
      //* starting index i and length k
      let j = i + k - 1;

      // * If boundary elements are equal and inside substring are palindrome
      if (S[i] === S[j] && table[i + 1][j - 1]) {
        table[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  const end = start + maxLength - 1;
  return S.slice(start, end + 1);
}

// console.log(longestPalindrome("aaaabbaa"));
console.log(longestPalindrome("kjqlrzzfmlvyoshiktodnsjjp")); //jj
