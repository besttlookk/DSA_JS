// !=========================================Count Inversions==============================
// * Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.
// * If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum.
// * Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

// !===================================Links ==============
// * https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1/?page=1&category[]=Arrays&sortBy=submissions
// * https://www.geeksforgeeks.org/counting-inversions/

// !==================Method 1(METHOD 1 (Simple)  ) ======================
// * Approach:
// * Traverse through the array, and for every index, find the number of smaller elements on its right side of the array. This can be done using a nested loop. Sum up the counts for all index in the array and print the sum.

// * Time Complexity: O(n^2), Two nested loops are needed to traverse the array from start to end, so the Time complexity is O(n^2)
// * Space Complexity:O(1), No extra space is required.
/*
function inversionCount(arr, N) {
  let count = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[i]) count++;
    }
  }

  return count;
}

*/

// !=================================METHOD 2(Enhance Merge Sort)===============================

//* Time Complexity: O(n log n), The algorithm used is divide and conquer, So in each level, one full array traversal is needed, and there are log n levels, so the time complexity is O(n log n).
//* Space Complexity: O(n), Temporary array.
function mergeAndCount(arr, left, mid, right) {
  const leftArr = [];
  const rightArr = [];
  const n1 = mid - left + 1;
  const n2 = right - mid;

  for (let i = 0; i < n1; i++) {
    leftArr[i] = arr[left + i];
  }

  for (let i = 0; i < n2; i++) {
    rightArr[i] = arr[mid + i + 1];
  }

  let i = 0;
  let j = 0;
  let k = left;
  let swap = 0;

  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      // * No swap
      arr[k] = leftArr[i];
      k++;
      i++;
    } else {
      // * YES Swap
      arr[k] = rightArr[j];
      k++;
      j++;

      // * left array me is element ke alawa aur kitne element hai..utne se swap increse hoga
      //* (mid + 1) - (left + i)
      swap += n1 - i; //* kyuki wo leftArr ke baaki number se v chota hi hoga
    }
  }

  while (i < n1) {
    arr[k++] = leftArr[i++];
  }

  while (j < n2) {
    arr[k++] = rightArr[j++];
  }
  return swap;
}

function inversionCount(arr, N, left = 0, right = N - 1) {
  let count = 0;
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    //* Left subarray count
    count += inversionCount(arr, N, left, mid);

    //* Right subarray count
    count += inversionCount(arr, N, mid + 1, right);

    //* Merge count
    count += mergeAndCount(arr, left, mid, right);
  }
  return count;
}

console.log(inversionCount([2, 4, 1, 3, 5], 5));
