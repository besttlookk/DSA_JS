// !======================== KMP Algorithm for Pattern Searching ===================
// * The KMP matching algorithm uses degenerating property (pattern having same sub-patterns appearing more than once in the pattern) of the pattern and improves the worst case complexity to O(n)
// * The basic idea behind KMP’s algorithm is: whenever we detect a mismatch (after some matches), we already know some of the characters in the text of the next window.
// * We take advantage of this information to avoid matching the characters that we know will anyway match

// * Need of Preprocessing?
// * An important question arises from the above explanation, how to know how many characters to be skipped.
// * To know this, we pre-process pattern and prepare an integer array lps[] that tells us the count of characters to be skipped.

// !===================== Preprocessing Overview: ====================
// * KMP algorithm preprocesses pat[] and constructs an auxiliary lps[] of size m (same as size of pattern) which is used to skip characters while matching.
// * name lps indicates longest proper prefix which is also suffix.. A proper prefix is prefix with whole string not allowed. For example, prefixes of “ABC” are “”, “A”, “AB” and “ABC”. Proper prefixes are “”, “A” and “AB”. Suffixes of the string are “”, “C”, “BC” and “ABC”
// * We search for lps in sub-patterns. More clearly we focus on sub-strings of patterns that are either prefix and suffix.
// * For each sub-pattern pat[0..i] where i = 0 to m-1, lps[i] stores length of the maximum matching proper prefix which is also a suffix of the sub-pattern pat[0..i].

// * Note : lps[i] could also be defined as longest prefix which is also proper suffix. We need to use properly at one place to make sure that the whole substring is not considered.

// !=======================Searching Algorithm: =======================
// * Unlike Naive algorithm, where we slide the pattern by one and compare all characters at each shift, we use a value from lps[] to decide the next characters to be matched. The idea is to not match a character that we know will anyway match.

// * How to use lps[] to decide next positions (or to know a number of characters to be skipped)?
// *  # We start comparison of pat[j] with j = 0 with characters of current window of text.
// *  # We keep matching characters txt[i] and pat[j] and keep incrementing i and j while pat[j] and txt[i] keep matching.
// * When we see a mismatch:
// *  # We know that characters pat[0..j-1] match with txt[i-j…i-1] (Note that j starts with 0 and increment it only when there is a match).
// *  # We also know (from above definition) that lps[j-1] is count of characters of pat[0…j-1] that are both proper prefix and suffix.
// *  # From above two points, we can conclude that we do not need to match these lps[j-1] characters with txt[i-j…i-1] because we know that these characters will anyway match. Let us consider above example to understand this.

// !=================Given a string of characters, find the length of the longest proper prefix which is also a proper suffix.=======
// * NOTE: Prefix and suffix can be overlapping but they should not be equal to the entire string.

// !=====Links
// * https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1
// * https://practice.geeksforgeeks.org/problems/search-pattern0205/1
/*
function lps(s) {
  const n = s.length;
  const lps = new Array(n);
  lps[0] = 0;
  let length = 0;
  let i = 1;

  while (i < n) {
    if (s[i] === s[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  // return lps[n - 1];
  return lps;
}
*/
// !==============Another way
function getlps(s) {
  const n = s.length;
  const lps = new Array(n);
  lps[0] = 0;
  let length = 0;
  let i = 1;

  while (i < n) {
    while (length > 0 && s[length] !== s[i]) {
      length = lps[length - 1];
    }

    if (s[length] === s[i]) {
      length = length + 1;
    }

    lps[i] = length;
    i++;
  }

  // return lps[n - 1];
  return lps;
}

// !=================================KMP Search================================

// * TC(n + m)
// * SC: O(m)

// * In case of no match: Increment only i
// * In case of match: Increment both i & j
function KMPSearch(pat, txt) {
  const n = txt.length;
  const m = pat.length;
  const res = [];

  const lps = getlps(pat);

  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j > 0 && pat[j] != txt[i]) {
      j = lps[j - 1];
    }
    if (pat[j] === txt[i]) j++;

    if (j === m) {
      res.push(i - m + 2);
      j = lps[j - 1];
    }
  }

  return res;
}

// !=====================Method 2========================
// console.log(lps("ababaca"));
// console.log(KMPSearch("ababaca", "bacbabababacaca")); // pattern foundd at index 6
console.log(KMPSearch("aa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); // pattern foundd at index 6
