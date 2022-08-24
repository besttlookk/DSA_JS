// !====================================Median of two sorted arrays of different sizes=============================

// * This is an extension of median of two sorted arrays of equal size problem. Here we handle arrays of unequal size also.
// !==================================Links==============================
// * https://practice.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1
// * https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/

// !================================== Approach 1 (Simple Mathematical Approach): = ==============================
// * The given two arrays are sorted, so we need to merge them into a third array.
// * Thenfind the median;

// !=================================Approach 2(Count while merging)==========================
function MedianOfArrays(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  // Current index of input array ar1[]
  let i = 0;

  // Current index of input array ar2[]
  let j = 0;
  let count;
  let m1 = -1,
    m2 = -1;

  // Since there are (n+m) elements,
  // There are following two cases
  // if n+m is odd then the middle
  // index is median i.e. (m+n)/2
  if ((m + n) % 2 == 1) {
    for (count = 0; count <= (n + m) / 2; count++) {
      if (i != n && j != m) {
        m1 = arr1[i] > arr2[j] ? arr2[j++] : arr1[i++];
      } else if (i < n) {
        m1 = arr1[i++];
      }

      // For case when j<m,
      else {
        m1 = arr2[j++];
      }
    }
    return m1;
  }

  // Median will be average of elements
  // at index ((m+n)/2 - 1) and (m+n)/2
  // in the array obtained after merging
  // ar1 and ar2
  else {
    for (count = 0; count <= (n + m) / 2; count++) {
      m2 = m1;
      if (i != n && j != m) {
        m1 = arr1[i] > arr2[j] ? arr2[j++] : arr1[i++];
      } else if (i < n) {
        m1 = arr1[i++];
      }

      // For case when j<m,
      else {
        m1 = arr2[j++];
      }
    }
    return (m1 + m2) / 2;
  }
}
