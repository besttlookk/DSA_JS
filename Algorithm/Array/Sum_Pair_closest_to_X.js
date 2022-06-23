// !==================Sum pair clostest to K ===================
// * Array is sorted

// !============Links ===============
// * https://www.geeksforgeeks.org/given-sorted-array-number-x-find-pair-array-whose-sum-closest-x/
// * https://practice.geeksforgeeks.org/problems/pair-in-array-whose-sum-is-closest-to-x1124/1/?page=1&curated[]=2&sortBy=submissions

// !===========Method 1(Two pointer technique) ==========================
function sumClosest(arr, x) {
  //* To store indexes of result pair
  let res_l = 0,
    res_r = 0;
  let n = arr.length;

  //* Initialize left and right indexes
  //* and difference between
  //* pair sum and x
  let left = 0;
  let right = n - 1;
  let diff = Number.MAX_VALUE;

  while (left < right) {
    //* Check if this pair is closer than the closest pair so far
    if (Math.abs(arr[left] + arr[right]) - x < diff) {
      res_l = left;
      res_r = right;
      diff = Math.abs(arr[left] + arr[right] - x);
    }

    //* If this pair has more sum, move to smaller values.
    if (arr[left] + arr[right] > x) {
      right--;
    } else {
      left++;
    }
  }

  return [arr[res_l], arr[res_r]];
}

console.log(sumClosest([10, 22, 28, 29, 30, 40], 54));
