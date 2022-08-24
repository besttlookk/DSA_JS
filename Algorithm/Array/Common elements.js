// !=========== find common elements In 3 sorted arrays
// * Expected Time Complexity: O(n1 + n2 + n3)
// * Expected Auxiliary Space: O(n1 + n2 + n3)

// * common element present in all the 3 arrays in sorted order.

// !======Links ============
// * https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/
// * https://practice.geeksforgeeks.org/problems/common-elements1132/1#

// !==========================Method 1(Merge)=============
function commonElements(arr1, arr2, arr3, n1, n2, n3) {
  let merge12 = merge(arr1, arr2, n1, n2);

  return merge(arr3, merge12, n3, merge12.length);
}

function merge(arr1, arr2, n1, n2) {
  let i = 0;
  let j = 0;
  let prev = null;
  let res = [];

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr1[i] > arr2[j]) j++;
    else {
      // * to avoid dublicate;
      if (prev !== arr1[i]) {
        res.push(arr1[i]);
        prev = arr1[i];
      }

      i++;
      j++;
    }
  }

  return res;
}

// !================================Method 2(Allowing repetation)================
function commonElements(ar1, ar2, ar3, n1, n2, n3) {
  // Initialize starting indexes
  // for ar1[], ar2[] and ar3[]
  var i = 0,
    j = 0,
    k = 0;

  // Iterate through three arrays
  // while all arrays have elements
  while (i < n1 && j < n2 && k < n3) {
    // If x = y and y = z, print any of them and move ahead
    // in all arrays
    if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
      document.write(ar1[i] + " ");
      i++;
      j++;
      k++;
    }

    // x < y
    else if (ar1[i] < ar2[j]) i++;
    // y < z
    else if (ar2[j] < ar3[k]) j++;
    // We reach here when x > y and z < y, i.e., z is smallest
    else k++;
  }
}

// * The approach used above works well if the arrays does not contain duplicate values however it can fail in cases where the array elements are repeated.
// * This can lead to a single common element to get printed multiple times.

// !=====================================================Method 3(No repeatation) ==============================================
// * These duplicate entries can be handled without using any additional data structure by keeping the track of the previous element.
// * Since the elements inside the array are arranged in sorted manner there is no possibility for the repeated elements to occur at random positions.
function commonElements(ar1, ar2, ar3, n1, n2, n3) {
  // Initialize starting indexes
  // for ar1[], ar2[] and
  // ar3[]
  var i = 0,
    j = 0,
    k = 0;

  // Declare three variables prev1,
  // prev2, prev3 to track
  // previous element
  var prev1, prev2, prev3;

  // Initialize prev1, prev2,
  // prev3 with INT_MIN
  prev1 = prev2 = prev3 = -1000000000;

  // Iterate through three arrays
  // while all arrays have
  // elements
  while (i < n1 && j < n2 && k < n3) {
    // If ar1[i] = prev1 and i < n1,
    // keep incrementing i
    while (ar1[i] == prev1 && i < n1) i++;

    // If ar2[j] = prev2 and j < n2,
    // keep incrementing j
    while (ar2[j] == prev2 && j < n2) j++;

    // If ar3[k] = prev3 and k < n3,
    // keep incrementing k
    while (ar3[k] == prev3 && k < n3) k++;

    // If x = y and y = z, print
    // any of them, update
    // prev1 prev2, prev3 and move
    //ahead in each array
    if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
      document.write(ar1[i] + " ");
      prev1 = ar1[i];
      prev2 = ar2[j];
      prev3 = ar3[k];
      i++;
      j++;
      k++;
    }

    // If x < y, update prev1
    // and increment i
    else if (ar1[i] < ar2[j]) {
      prev1 = ar1[i];
      i++;
    }

    // If y < z, update prev2
    // and increment j
    else if (ar2[j] < ar3[k]) {
      prev2 = ar2[j];
      j++;
    }

    // We reach here when x > y
    // and z < y, i.e., z is
    // smallest update prev3
    // and increment k
    else {
      prev3 = ar3[k];
      k++;
    }
  }
}

let n1 = 6;
let n2 = 5;
let n3 = 8;

const A = [1, 5, 10, 20, 40, 80];
const B = [6, 7, 20, 80, 100];
const C = [3, 4, 15, 20, 30, 70, 80, 120];
console.log(commonElements(A, B, C, n1, n2, n3));
