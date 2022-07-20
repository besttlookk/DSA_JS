// !===============Links
// * https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1
// * https://www.geeksforgeeks.org/merge-two-sorted-arrays/
// * https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/

// !============Method 1: Using Maps (O(nlog(n) + mlog(m)) Time and O(N) Extra Space)====
// * Insert elements of both arrays in a map as keys.
//* Print the keys of the map.

function merge(arr1, arr2, n, m) {
  //* to store elements in sorted order.
  var mp = new Map();

  // Inserting values to a map.
  for (i = 0; i < n; i++) {
    mp.set(arr1[i], true);
  }
  for (i = 0; i < m; i++) {
    mp.set(arr2[i], true);
  }
  var a = [];

  // Printing keys of the map.
  for (me of mp.keys()) {
    a.push(me);
  }
  a.sort();

  return a;
}

console.log(first);
