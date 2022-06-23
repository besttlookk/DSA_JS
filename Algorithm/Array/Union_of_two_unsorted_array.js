// !=============Links ================
// * https://www.geeksforgeeks.org/find-union-and-intersection-of-two-unsorted-arrays/
// * https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1#

// !=========== Method 1(Using Set)=========================
/*
function doUnion(a, m, b, n) {
  const union = new Set(a.concat(b));
  return Array.from(union);
}
*/
/*
// * Time Complexity: O( max(m,n) )
function doUnion(a, m, b, n) {
  let min = m < n ? m : n;

  let set = new Set();

  for (let i = 0; i < min; i++) {
    set.add(a[i]);
    set.add(b[i]);
  }

  if (m > n) {
    for (let i = m; i < n; i++) {
      set.add(a[i]);
    }
  } else if (m < n) {
    for (let i = n; i < m; i++) {
      set.add(b[i]);
    }
  }

  return Array.from(set);
}

*/

//! ========== Method 2(Using Map) =====================
// *  we know that map stores distinct keys only. So if we insert any key appearing more than one time it gets stored only once.
// * The above method has time complexity O(m+n).
function doUnion(a, m, b, n) {
  let map = new Map();

  for (let i = 0; i < m; i++) {
    map.set(a[i], i);
  }

  for (let i = 0; i < n; i++) {
    map.set(b[i], i);
  }

  return map.size;
}
console.log(doUnion([7, 1, 5, 2, 3, 6], 6, [3, 8, 6, 20, 7], 5));
