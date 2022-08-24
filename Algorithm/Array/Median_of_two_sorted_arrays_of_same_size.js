// !=========== ======================Median of two sorted arrays of same size
// * Note: Since the size of the set for which we are looking for the median is even (2n), we need to take the average of the middle two numbers and return the floor of the average.

// * Both ar1[] and ar2[] are sorted arrays
// * Both have n elements */

// !=====================================Links===================================
// * https://www.geeksforgeeks.org/median-of-two-sorted-arrays/

// !======================================(Method 1 (Count while Merging) ================

// * Time Complexity: O(m + n). To merge both the arrays O(m+n) time is needed.
// * Auxiliary Space: O(1). No extra space is required.

// * Use the merge procedure of merge sort. Keep track of count while comparing elements of two arrays.
// * If count becomes n(For 2n elements), we have reached the median. Take the average of the elements at indexes n-1 and n in the merged array.

// * Time Complexity : O(n)
// * Auxiliary Space: O(1)

// * In m1 & m2 we are basically storing nth and (n - 1)th at each stage of merge

/*
function getMedian(ar1, ar2, n) {
  let i = 0;
  let j = 0;
  let count = 0;
  let m1 = -1;
  let m2 = -1;

  //* Since there are 2n elements, median will be average
  //*  of elements at index n-1 and n in the array obtained after
  //*  merging ar1 and ar2

  //* We are only concerned about the first n element of 2n item
  for (count = 0; count <= n; count++) {
    //*Below is to handle case where all elements of ar1[] are
    //* smaller than smallest(or first) element of ar2[]
    if (i === n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      //*Below is to handle case where all elements of ar2[] are
      //* smaller than smallest(or first) element of ar1[]
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = arr[i];
      i++;
    } else {
      m1 = m2;
      m2 = arr[j];
      j++;
    }
  }
  return (m1 + m2) / 2;
}

*/

// !======================================Method 2(Comparing medians) ============
// * This method works by first getting medians of the two sorted arrays and then comparing them.
// * Calculate the medians m1 and m2 of the input arrays ar1[] and ar2[] respectively.
// * If m1 and m2 both are equal then we are done return m1 (or m2)
// * If m1 is greater than m2, then median is present in one of the below two subarrays.
// *     a)  From first element of ar1 to m1 (ar1[0...|_n/2_|])
// *      b)  From m2 to last element of ar2  (ar2[|_n/2_|...n-1])
// * If m2 is greater than m1, then median is present in one of the below two subarrays.
// *     a)  From m1 to last element of ar1  (ar1[|_n/2_|...n-1])
// *     b)  From first element of ar2 to m2 (ar2[0...|_n/2_|])
// *  Repeat the above process until size of both the subarrays becomes 2.

// * If size of the two arrays is 2 then use below formula to get the median.
// * Median = (max(ar1[0], ar2[0]) + min(ar1[1], ar2[1]))/2

function getMedian(
  a,
  b,
  startA = 0,
  startB = 0,
  endA = a.length - 1,
  endB = b.length - 1
) {
  if (endA - startA == 1) {
    return (Math.max(a[startA], b[startB]) + Math.min(a[endA], b[endB])) / 2;
  }

  let m1 = median(a, startA, endA);

  let m2 = median(b, startB, endB);

  //* if m1 < m2 then median must exist in ar1[m1....] and  ar2[....m2]

  if (m1 === m2) {
    return m1;
  } else if (m1 < m2) {
    return getMedian(
      a,
      b,
      (endA + startA + 1) / 2,
      startB,
      endA,
      (endB + startB + 1) / 2
    );
  } else {
    return getMedian(
      a,
      b,
      startA,
      (endB + startB + 1) / 2,
      (endA + startA + 1) / 2,
      endB
    );
  }
}

//* Function to get median  of a sorted array

function median(arr, start, end) {
  let n = end - start + 1;
  if (n % 2 == 0) {
    return (arr[start + n / 2] + arr[start + (n / 2 - 1)]) / 2;
  } else {
    return arr[start + n / 2];
  }
}
