// !==============Remove all duplicates from a given string

// !====================Links
// * https://practice.geeksforgeeks.org/problems/remove-all-duplicates-from-a-given-string4321/1?page=1&category[]=Strings&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions
// * https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/

// !==================Brute force ==============
// * Time Complexity: O(n * n)
// * Auxiliary Space: O(1)

// * While traversing we will check if it is present in res or not
function removeDuplicates(str) {
  const n = str.length;
  let res = "";

  for (let i = 0; i < n; i++) {
    const ch = str[i];
    let found = false;

    for (let j = 0; j < res.length; j++) {
      if (ch === res[j]) {
        found = true;
        break;
      }
    }

    if (found === false) res += ch;
  }

  return res;
}

// !====================Index of============
function removeDuplicates(str) {
  const n = str.length;
  let res = "";

  for (let i = 0; i < n; i++) {
    const ch = str[i];

    if (res.indexOf(ch) < 0) res += ch;
  }

  return res;
}
// !======================Using Map =====================
/*
function removeDuplicates(str) {
  const map = new Map();
  const n = str.length;
  let res = "";

  for (let i = 0; i < n; i++) {
    if (!map.has(str[i])) map.set(str[i], 1);
  }

  for (let i = 0; i < n; i++) {
    if (map.get(str[i]) === 1) {
      map.set(str[i], 0);
      res += str[i];
    }
  }

  return res;
}

*/

// !============================Method 3(Set) =====================
// * Use set to store only one instance of any value.
// * It does not keep the order of elements the same as the input but prints them in sorted order.

// * Time Complexity: O(n)
// * Auxiliary Space: O(n)
/*
function removeDuplicates(str) {
  const set = new Set();
  const n = str.length;
  let res = "";

  for (let i = 0; i < n; i++) {
    set.add(str[i]);
  }

  for (const ch of set) {
    res += ch;
  }

  return res;
}
*/

console.log(removeDuplicates("geeksforgeeks"));
