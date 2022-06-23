// * https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1#

// !================== Method 1(Simple approch: Brute force) =====================
// ! Complexity Analysis:
/*
Time Complexity: O(n^2) in worst case. Nested loop is used to traverse the array so the time complexity is O(n^2)
Space Complexity: O(1). As constant extra space is required.
 */
/*
function subarraySum(arr, n, s) {
  for (let i = 0; i < n; i++) {
    let currentSum = arr[i];
    for (let j = i + 1; j <= n; j++) {
      if (currentSum === s) return [i, j - 1];

      if (currentSum > s || j == n) break;

      currentSum += arr[j];
    }
  }

  return -1;
}
*/

//! ================ Method 2 (Similar to sliding window approch)=========================
// *  There is an idea if all the elements of the array are positive.
// * Start with an empty subarray, add elements to the subarray until the sum is less than x. If the sum is greater than x, remove elements from the start of the current subarray.
// * Complexity Analysis:
/**
 //* Time Complexity : O(n).
 * The Array is traversed only once to insert elements into the window. It will take O(N) time.
 * The Array is traversed again once to remove elements from the window. It will also take O(N) time.
 * So the total time will be O(N) + O(N) = O(2*N), which is similar to O(N)
 //* Space Complexity: O(1). 
 */
// ! The Below solution doesn’t handle negative numbers. We can use hashing to handle negative numbers.
/*
function subarraySum(arr, n, s) {
  let currentSum = arr[0];
  let start = 0;

  for (let i = 1; i <= n; i++) {
    while (currentSum > s && start < i - 1) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === s) return [start, i - 1];

    currentSum += arr[i];
  }

  return -1;
}
*/
// !=======================Method 3(Hashmap)=============================
// * The idea is to store the sum of elements of every prefix of the array in a hashmap, i.e, every index stores the sum of elements up to that index hashmap.
// *  So to check if there is a subarray with a sum equal to s, check for every index i, and sum up to that index as x. If there is a prefix with a sum equal to x – s, then the subarray with the given sum is found.
// * TC: O(N).
// * Auxiliary space: O(n). As a HashMap is needed, this takes linear space.
function subarraySum(arr, n, s) {
  let currentSum = 0;
  let start = 0;
  let end = -1;
  let hashMap = new Map();

  for (let i = 0; i < n; i++) {
    currentSum += arr[i];

    // *  //check whether cur_sum - sum = 0, if 0 it means the sub array is starting from index 0- so stop
    if (currentSum - s === 0) {
      start = 0;
      end = i;
      break;
    }

    // * if hashMap already has the value, means we already have subarray with the sum - so stop
    if (hashMap.has(currentSum - s)) {
      start = hashMap.get(currentSum - s) + 1;
      end = i;
      break;
    }

    // * if value is not present then add to hashmap
    hashMap.set(currentSum, i);
  }

  //* if end is -1 : means we have reached end without the sum
  if (end === -1) return -1;
  else return [start, end];
}
console.log(subarraySum([1, 2, 3, 7, 5], 5, 12));

// ! Link to check
// * https://www.geeksforgeeks.org/find-subarray-with-given-sum-with-negatives-allowed-in-constant-space/
