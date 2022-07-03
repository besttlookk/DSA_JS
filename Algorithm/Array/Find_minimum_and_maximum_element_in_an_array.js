// ! ============ Links=========
// * https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1/
// * https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

// !==============Method 1(Simple Linear Search)===========

// * Time Complexity: O(n)
// * Auxiliary Space: O(1)
/*
function getMinMax(arr, n) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < n; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return [min, max];
}
*/
// * In the above implementation, the worst case occurs when elements are sorted in descending order and the best case occurs when elements are sorted in ascending order.

// !==========Methhod 2(Tournament Method) ===========
// * Divide the array into two parts and compare the maximums and minimums of the two parts to get the maximum and the minimum of the whole array.

// !==============Method 3(Compare in Pairs)=============
// * If n is odd then initialize min and max as first element.
// * If n is even then initialize min and max as minimum and maximum of the first two elements respectively.
// * For rest of the elements, pick them in pairs and compare their maximum and minimum with max and min respectively.

// * Time Complexity: O(n)
// *Auxiliary Space: O(1) as no extra space was needed.
function getMinMax(arr, n) {
  let i, min, max;

  if (n % 2 === 0) {
    min = Math.min(arr[0], arr[1]);
    max = Math.max(arr[0], arr[1]);

    // set the starting index for loop
    i = 2;
  } else {
    min = max = arr[0];
    i = 1;
  }

  while (i < n - 1) {
    if (arr[i] < arr[i + 1]) {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i + 1]);
    } else {
      min = Math.min(min, arr[i + 1]);
      max = Math.max(max, arr[i]);
    }

    i += 2;
  }

  return [min, max];
}

console.log(getMinMax([1000, 11, 445, 1, 330, 3000], 6));
