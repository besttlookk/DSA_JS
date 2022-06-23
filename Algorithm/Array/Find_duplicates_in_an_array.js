// !================== Find duplicates in an array ==============
// * Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.

// ! ===================Links
// * https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1/?page=1&curated[]=2&sortBy=submissions

// !============Method 1(Using hashmap)==============
function duplicates(a, n) {
  const hashMap = {};
  const result = [];

  for (let i = 0; i < n; i++) {
    hashMap[a[i]] = hashMap[a[i]] + 1 || 1;
  }
  for (let key in hashMap) {
    if (hashMap[key] > 1) result.push(+key);
  }
  return result.length ? result : [-1];
}

console.log(duplicates([0, 3, 1, 2], 5));
