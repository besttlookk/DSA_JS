//! ============== method 1(Brute force) =======================
// * TC: O(n^3)
/*
function subarraySum(arr, s) {
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;

      for (let k = i; k < j + i; k++) {
        sum += arr[k];
      }

      if(sum === s) count++
    }
  }

  return count
}
*/
// !=================== Method 2 (hashmap) ============
// * Time Complexity: O(n)
// * Space Complexity: O(1)
function subarraySum(arr, s) {
  let currentSum = 0;
  let hashMap = {}; // key is sum and value is how many times that sum occus
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    currentSum += arr[i];

    if (currentSum === s) {
      count++;
    }

    if (currentSum - s in hashMap) {
      count += hashMap[currentSum - s];
    }

    hashMap[currentSum] = hashMap[currentSum] + 1 || 1;
  }

  return count;
}

console.log(subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0));
