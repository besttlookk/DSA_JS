// ! =========Links =========
// * https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1/?page=3&curated[]=2&sortBy=submissions

// !======================Method 1(Brute force) ======================
//* TC: O(n2)
/*
function subArrayExists(arr, n) {
  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    if (sum === 0) return true;

    for (let j = i + 1; j < n; j++) {
      sum += arr[j];

      if (sum === 0) return true;
    }
  }

  return false;
}
*/

// ! ===================Method 2(Hashmap) =========================
function subArrayExists(arr, n) {
  // let map = new Map();
  let set = new Set(); //* since we dont need the index value we can use set instead of map
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    currentSum += arr[i];

    if (currentSum === 0 || set.has(currentSum)) return true;

    set.add(currentSum);
  }

  return false;
}

console.log(subArrayExists([4, 2, -3, 1, 6], 5));
