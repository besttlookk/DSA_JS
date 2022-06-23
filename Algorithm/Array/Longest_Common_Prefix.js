// ! ===============LINKS =================
// * https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/

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
