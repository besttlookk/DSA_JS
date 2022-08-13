// ! ===============LINKS =================
// * https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/
// * https://www.geeksforgeeks.org/longest-common-prefix-using-character-by-character-matching/
// * https://www.geeksforgeeks.org/longest-common-prefix-using-divide-and-conquer-algorithm/
// * https://www.geeksforgeeks.org/longest-common-prefix-using-binary-search/
// * https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/
// * https://www.geeksforgeeks.org/longest-common-prefix-using-trie/

// !===========Method 1(using Word by Word Matching) ==============
// * We can see that the longest common prefix holds the associative property, i.e-
// * # LCP(string1, string2, string3) = LCP (LCP (string1, string2), string3)
// * So we can make use of the above associative property to find the LCP of the given strings.
// * We one by one calculate the LCP of each of the given string with the LCP so far.
// * The final result will be our longest common prefix of all the strings.

// * Note that it is possible that the given strings have no common prefix. This happens when the first character of all the strings are not same.

// * Time Complexity : Since we are iterating through all the strings and for each string we are iterating though each characters, so we can say that the time complexity is O(N M) where,
// * N = Number of strings
// * M = Length of the largest string

function findPrefix(str1, str2) {
  let result = "";
  const n = str1.length;
  const m = str2.length;

  for (let i = 0, j = 0; i < n && j < m; i++, j++) {
    if (str1[i] !== str2[j]) break;

    result += str1[i];
  }

  return result;
}

function longestCommonPrefix(arr, n) {
  let prefix = arr[0];

  for (let i = 1; i < n; i++) {
    prefix = findPrefix(prefix, arr[i]);
  }

  return prefix ? prefix : -1;
}

console.log(
  longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"], 4)
);
