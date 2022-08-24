// !========Intersection of two unsorted array ============

// !=========Links
// * https://practice.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1#
// * https://leetcode.com/problems/intersection-of-two-arrays/

// !================Method 1(Brute force) ==================
// * TC: O(n * m)
/*
function intersection(a, b, n, m) {
  let res = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i] === b[j]) res.push(a[i]);
    }
  }

  return res;
}
*/

// !=================Method 2 (Sorting +  Binary Searching )

// * TC :O(nLogn) + m * O(logn). if m > n :  O(mLogn)
// * SC: O(1)
/*
function binarySearch(arr, n, x) {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

function intersection(a, b, n, m) {
  // * we sort one array and run loop on another
  a.sort((p, q) => p - q);

  let arr = [];

  // * loop over b
  for (let i = 0; i < m; i++) {
    let res = binarySearch(a, n, b[i]);

    if (res !== -1) arr.push(b[i]);
  }

  return arr;
}

*/

// !=====================Method 3(Using sorting & two pointer)=====================
// * Sort both array and apply merge sort..

// !================Method 4(Usinh hash table) ===============
function intersection(a, b, n, m) {
  if (n === 0 || m === 0) return [];
  let res = [];
  let set = new Set();

  for (let i = 0; i < n; i++) {
    set.add(a[i]);
  }

  for (let i = 0; i < m; i++) {
    if (set.has(b[i])) {
      res.push(b[i]);
      // * we have to remove this item from set so that no duplicate appears in the result
      set.delete(b[i]);
    }
  }

  return res;
}
console.log(intersection([89, 24, 75, 11, 23], [89, 2, 4], 5, 3));
