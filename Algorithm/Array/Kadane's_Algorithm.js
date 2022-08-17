// !============== Largest Sum Contiguous Subarray ======================
// * Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

//* INPUT: Arr[] = {1,2,3,-2,5}  || OUT: 9
// * Arr[] = {-1,-2,-3,-4} || -1
// ! =============Links
// * https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
// * https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1/?page=1&curated[]=2&sortBy=submissions

// * Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// ! Solution 1(Brute Force)

//! TC:: O(n^2)
/*
function maxSubarraySum(arr, N) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < N; i++) {
    currentSum = arr[i];
    maxSum = Math.max(currentSum, maxSum);
    for (let j = i + 1; j < N; j++) {
      currentSum += arr[j];
      maxSum = Math.max(currentSum, maxSum);
    }
  }
  return maxSum;
}
*/

// !================Method 2(// ! Kadane's Algorithm) ==================
//* The simple idea of Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this).
// * And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this).
// * Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far

//*  The below algorithm only works if and only if at least one positive number should be present otherwise it does not work i.e if an Array contains all negative numbers it doesn’t work.

// * TC: O(n)
/*
function maxSubarraySum(arr, N) {
  let maxSoFar = -Infinity;
  let currentSum = 0;  //* max_ending_here

  for (let i = 0; i < N; i++) {
    currentSum += arr[i];

    if (maxSoFar < currentSum) {
      maxSoFar = currentSum;
    }

    // * jab v negative jaaye ..sum ko zero ker do
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSoFar;
}
*/
// ! ===================MEthod 3 (If we have to get index )=====================

// * To print the subarray with the maximum sum, we maintain indices whenever we get the maximum sum.

function maxSubarraySum(arr, N) {
  let maxSoFar = -Infinity;
  let currentSum = 0;
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 0; i < N; i++) {
    currentSum += arr[i];

    if (maxSoFar < currentSum) {
      maxSoFar = currentSum;
      start = s;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      s = i + 1;
    }
  }

  return [start, end];
}

// !=======================Method 4(Dynamic Programming)====================
// *  The implementation handles the case when all numbers in the array are negative.

function maxSubarraySum(arr, N) {
  let maxSoFar = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < N; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSoFar = Math.max(currentSum, maxSoFar);
  }

  return maxSoFar;
}

console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3], 8));
