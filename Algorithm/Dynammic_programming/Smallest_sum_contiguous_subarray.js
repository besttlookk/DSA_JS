// !====================================Smallest sum contiguous subarray

// *  It is a variation to the problem of finding the largest sum contiguous subarray based on the idea of Kadane’s algorithm.
// !=========================Links
// * https://practice.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1

// * https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/

// !====================Method 1===============
function smallestSumSubarr(arr, n) {
  // to store the minimum value that is
  // ending up to the current index
  let min_ending_here = 2147483647;

  // to store the minimum value encountered
  // so far
  let min_so_far = 2147483647;
  for (let i = 0; i < n; i++) {
    // if min_ending_here > 0, then it could
    // not possibly contribute to the
    // minimum sum further
    if (min_ending_here > 0) min_ending_here = arr[i];
    // else add the value arr[i] to
    // min_ending_here
    else min_ending_here += arr[i];

    // update min_so_far
    min_so_far = Math.min(min_so_far, min_ending_here);
  }

  // required smallest sum contiguous
  // subarray value
  return min_so_far;
}
