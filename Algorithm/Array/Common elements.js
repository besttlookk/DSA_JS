// !=========== find common elements In 3 sorted arrays
// * Expected Time Complexity: O(n1 + n2 + n3)
// * Expected Auxiliary Space: O(n1 + n2 + n3)

// * common element present in all the 3 arrays in sorted order.

// !======Links ============
// * https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/
// * https://practice.geeksforgeeks.org/problems/common-elements1132/1#

// !================Method 1 =============
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

let n1 = 6;
let n2 = 5;
let n3 = 8;

const A = [1, 5, 10, 20, 40, 80];
const B = [6, 7, 20, 80, 100];
const C = [3, 4, 15, 20, 30, 70, 80, 120];
console.log(commonElements(A, B, C, n1, n2, n3));
