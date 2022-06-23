// !====================Trapping Rain Water

// !================Links =============================
// * https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1/?page=1&category[]=Arrays&sortBy=submissions
// * https://www.geeksforgeeks.org/trapping-rain-water/

// !===============Method 1(Array preprocessing) =================
// * TC: O(n)
// * SC: O(n)
/*
function trappingWater(arr, n) {
  const left = [];
  const right = [];
  let waterLog = 0;
  left[0] = arr[0];
  right[n - 1] = arr[n - 1];

  // * To get max height in the left of each index
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }

  // * To get max height in the right of each index
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  for (let i = 0; i < n; i++) {
    waterLog += Math.min(left[i], right[i]) - arr[i];
  }

  return waterLog;
}
*/
// !==============Method 2 (Space Optimization for the above Solution: ) ===============
// *Instead of maintaining two arrays of size n for storing the left and a right max of each element, maintain two variables to store the maximum till that point. Since water trapped at any element = min(max_left, max_right) – arr[i].
// * Calculate water trapped on smaller elements out of A[lo] and A[hi] first, and move the pointers till lo doesn’t cross hi.

//* Time Complexity: O(n).
//* Auxiliary Space: O(1).
function trappingWater(arr, n) {
  let result = 0;

  // maximum element on left and right
  let left_max = 0;
  let right_max = 0;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    if (arr[low] < arr[high]) {
      if (arr[low] > left_max) {
        left_max = arr[low];
      } else {
        //* water on curr element = max - curr
        result += left_max - arr[low];
      }
      low++;
    } else {
      if (arr[high] > right_max) {
        right_max = arr[high];
      } else {
        result += right_max - arr[high];
      }
      high--;
    }
  }
  return result;
}

console.log(trappingWater([3, 0, 0, 2, 0, 4], 6));
