// !======================Anagram

// !=====================Links ====================
// * https://practice.geeksforgeeks.org/problems/anagram-1587115620/1?page=1&category[]=Strings&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !========================Method 1 (Sorting) =====================
// * Sort both strings
// * Compare the sorted strings
// !========================Method 2 (Hashmap) ===================
function isAnagram(a, b) {
  const map = new Map();
  const la = a.length;
  const lb = b.length;

  if (la !== lb) return false;

  for (let i = 0; i < la; i++) {
    if (map.has(a[i])) map.set(a[i], map.get(a[i]) + 1);
    else map.set(a[i], 1);
  }

  for (let i = 0; i < lb; i++) {
    if (map.get(b[i]) > 0) {
      map.set(b[i], map.get(b[i]) - 1);
    } else {
      return false;
    }
  }

  // * check if any value remaining in map
  for (let item of map) {
    if (item > 1) return false;
  }

  return true;
}
