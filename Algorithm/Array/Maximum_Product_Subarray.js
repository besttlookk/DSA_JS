// !============== Maximum Product Subarray

// ! =========== Links =================
// * https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1/?page=2&curated[]=2&sortBy=submissions

// !==================Method 1(Brute force) ==================
// * TC : O(n*n
/*)
function maxProduct(arr, n) {
  let max = -Infinity;

  for (let i = 0; i < n; i++) {
    let product = arr[i];
    for (let j = i + 1; j < n; j++) {
      product *= arr[j];
      max = Math.max(max, product);
    }
  }

  return max;
}
*/

// !==================Method 2 (Similar to Kadanes algo)

//* Time Complexity: O(n)
//* Auxiliary Space: O(1)

function maxProduct(arr, n) {
  let max_so_far = -Infinity;
  let product = 1;

  for (let i = 0; i < n; i++) {
    product *= arr[i];

    max_so_far = Math.max(max_so_far, product);

    if (product === 0) {
      product = 1;
    }
  }
  // ! Caution: we have to also consier case when there is a negative num just at the start .... then we will not have correct ans
  // * to remedy this we will also traverse from the back
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    product = product * arr[i];

    max_so_far = Math.max(max_so_far, product);

    if (product === 0) product = 1;
  }
  return max_so_far;
}

console.log(maxProduct([1, -2, -3, 0, 7, -8, -2], 7));
