// !==================Maximize sum after K negations ================

// !=========================Links ======================
// * https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations1149/1

// * https://www.geeksforgeeks.org/maximize-array-sun-after-k-negation-operations/
// * https://www.geeksforgeeks.org/maximize-array-sum-k-negations-set-2/

// !===================================Method 1 (Sort) ===============================

// * Time Complexity: O(n*logn)
// * Auxiliary Space: O(1)
function maximizeSum(arr, n, k) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let i = 0;

  while (k > 0 && i < n) {
    // If we find a 0 in our
    // sorted array, we stop
    if (arr[i] < 0) {
      arr[i] = -1 * arr[i];
      k--;
    }
    i++;
  }

  // * if k is odd negate the minimum value
  if (k % 2 === 1) {
    arr.sort((a, b) => a - b);
    arr[0] = -1 * arr[0];
  }

  // * calculate sum
  for (let i = 0; i < n; i++) sum += arr[i];

  return sum;
}

const arr = [1, 2, 3, 4, 5];

console.log(maximizeSum(arr, 5, 5));
