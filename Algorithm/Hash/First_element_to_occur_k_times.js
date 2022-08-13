// !=============First element to occur k times
// * Given an array of N integers. Find the first element that occurs at least K number of times.
// * Return that element which first completes its count.

// !==================Links =================
// * https://practice.geeksforgeeks.org/problems/first-element-to-occur-k-times5150/1?page=1&category[]=Hash&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !===============Brute Force ==============

//! NOTE:
// * This function returns first element that repeats k times. Not the first element which complets the k count first
/*
function firstElementKTime(arr, n, k) {
  for (let i = 0; i < n - k + 1; i++) {
    const currItem = arr[i];
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] === currItem) count++;

      if (count === k) return currItem;
    }
  }

  return -1;
}
*/
// * In this example answer is 7 BUT required solution is 4 as 4 repeats its count of 2 first
console.log(firstElementKTime([1, 7, 4, 3, 4, 8, 7], 7, 2));

// !=====================Method 1(Hashing) ======================

function firstElementKTime(arr, n, k) {
  if (k === 1) return arr[0];
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      const newVal = map.get(arr[i]) + 1;
      if (newVal === k) return arr[i];
      map.set(arr[i], newVal);
    } else {
      map.set(arr[i], 1);
    }
  }

  return -1;
}
