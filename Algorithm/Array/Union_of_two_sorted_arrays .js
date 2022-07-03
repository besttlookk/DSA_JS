// !============Union of two sorted array
// * Union of the two arrays can be defined as the set containing distinct elements from both the arrays.
// * If there are repetitions, then only one occurrence of element should be printed in the union.

// !=============== Links =============
//  * https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

// !========== Method 2(merge algo with dublicate removal)==================
function doUnion(a, n, b, m) {
  // *Note: arrays are sorted
  let i = 0; //* pointer for array a
  let j = 0; //* pointer for array b
  let unionArr = [];

  let prev = null; //* to handle dublicates

  while (i < n && j < m) {
    if (a[i] < b[j]) {
      if (a[i] !== prev) {
        unionArr.push(a[i]);
        prev = a[i];
      }
      i++;
    } else if (a[i] > b[j]) {
      if (b[j] !== prev) {
        unionArr.push(b[j]);
        prev = b[j];
      }
      j++;
    } else {
      if (a[i] !== prev) {
        unionArr.push(a[i]);
        prev = a[i];
      }
      i++;
      j++;
    }
  }

  while (i < n) {
    if (a[i] !== prev) {
      unionArr.push(a[i]);
      prev = a[i];
    }
    i++;
  }

  while (j < m) {
    if (b[j] !== prev) {
      unionArr.push(b[j]);
      prev = b[j];
    }
    j++;
  }

  return unionArr;
}

console.log(doUnion([85, 25, 1, 32, 54, 6], 6, [85, 2], 2));
