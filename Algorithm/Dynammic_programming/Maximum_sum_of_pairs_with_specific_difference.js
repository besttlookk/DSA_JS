// !====================Maximum sum of pairs with specific difference=====================
// * : First, we sort the given array in decreasing order: As we need sum to to maxmum
// !====================Links==========================
// * https://www.geeksforgeeks.org/maximum-sum-pairs-specific-difference/
// * https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference1533/1

// !=========================Method 1 ========================

// * Time complexity: O(N Log N)
// * Auxiliary Space: O(1)
function maxSumPairWithDifferenceLessThanK(arr, N, K) {
  arr.sort((a, b) => b - a);
  let sum = 0;

  let i = 0;

  while (i < N - 1) {
    let diff = Math.abs(arr[i] - arr[i + 1]);

    if (diff < K) {
      // * Include both number
      sum += arr[i];
      sum += arr[i + 1];
      i += 2;
    } else {
      i++;
    }
  }

  return sum;
}

console.log(maxSumPairWithDifferenceLessThanK([3, 5, 10, 15, 17, 12, 9], 7, 4));
