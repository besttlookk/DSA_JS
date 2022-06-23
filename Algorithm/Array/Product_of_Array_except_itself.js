// !============Links ================
// * https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/a-product-array-puzzle/

// ! =================Method 1 ================
/*
function productExceptSelf(nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let product = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
    }
    result.push(product);
  }

  return result;
}
*/

// ! ============ Method 2 (Naive Solution:) ====================
// * Create two array . One store product of prefix and other product of suffix

//* Time Complexity: O(n).
//* The array needs to be traversed three times, so the time complexity is O(n).
//* Space Complexity: O(n).
//* Two extra arrays and one array to store the output is needed so the space complexity is O(n)
/*
function productExceptSelf(nums, n) {
  if (n === 1) return 0;

  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  left[0] = 1;
  right[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  return prod;
}
*/
// !============ Method 3====================
// * In the previous solution, two extra arrays were created to store the prefix and suffix, in this solution store the prefix and suffix product in the output array (or product array) itself. Thus reducing the space required.

// *Time Complexity: O(n).
// * Space Complexity: O(n).

function productExceptSelf(nums, n) {
  if (n === 1) return 0;

  let prod = Array(n).fill(1);

  let temp = 1;

  // * storing all the prefix value
  for (let i = 0; i < n; i++) {
    // * first add the prev result to current index and then find product for the next index
    prod[i] = temp;
    temp *= nums[i];
  }

  temp = 1;

  for (let i = n - 1; i >= 0; i--) {
    prod[i] *= temp;
    temp *= nums[i];
  }

  return prod;
}

console.log(productExceptSelf([10, 3, 5, 6, 2], 5));
