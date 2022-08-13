// !================Largest subarray with 0 sum

// !===============Links ================4
// * https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1/?page=2&category[]=Arrays&sortBy=submissions
// * https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/

// !====================Method 1(Sorting) =====================
// * TC: O(Logn)

function maxLen(arr, n) {
  arr.sort((a, b) => a - b);

  let j = n - 1;

  // * Find Total sum
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  while (j >= 0 && sum !== 0) {
    if (sum > 0) {
      sum -= arr[j];
      j--;
    }
  }

  return j + 1;
}
// !==============================Method 2(hashmap) ================================
// *  The new array will store the sum of all the elements up to that index.
// * Time Complexity: O(n), as use of the good hashing function, will allow insertion and retrieval operations in O(1) time.
// * Space Complexity: O(n), for the use of extra space to store the prefix array and hashmap.

function maxLen(arr, n) {
  let sum = 0;
  let maxLength = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (arr[i] === 0 && maxLength === 0) maxLength = 1;

    // * When we get sum(from the start) as Zero.
    // * Length of sum array upto that point has to to max
    // * maxLength = index + 1
    if (sum === 0) maxLength = i + 1;
    else {
      const prev = map.get(sum);
      //* If we already had the same sum. That means after that index to this index sum is ZERO (S + 0 = S)
      if (prev !== undefined) {
        maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }

  return maxLength;
}

console.log(maxLen([15, -2, 2, -8, 1, 7, 10, 23], 8));
