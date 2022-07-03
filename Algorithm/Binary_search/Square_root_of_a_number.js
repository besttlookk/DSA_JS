// !============ Square root of an integer
//  * There can be many ways to solve this problem. For example, the Babylonian Method is one way.

// !=============== links ============
// * https://practice.geeksforgeeks.org/problems/square-root/1/?page=1&category[]=Binary%20Search&sortBy=submissions

// !===============mETHOD 1(sIMPLE APPROCH) ========
// * To find the floor of the square root, try with all-natural numbers starting from 1.
// * Continue incrementing the number until the square of that number is greater than the given number.

// * Time Complexity: O(√ n).
// *  Space Complexity: O(1).
/*
function floorSqrt(x) {
  //* Base cases
  if (x == 0 || x == 1) return x;

  //* Starting from 1, try all numbers until i*i is  greater than or equal to x.
  let i = 1;
  let result = 1;

  while (result <= x) {
    i++;
    result = i * i;
  }

  return i - 1;
}
*/

// !==================================== Method 2(Better approch : BINARY SEARCH) ===============
// * The idea is to find the largest integer i whose square is less than or equal to the given number.
// * The idea is to use Binary Search to solve the problem. The values of i * i is monotonically increasing, so the problem can be solved using binary search.

//* Time complexity: O(log n).
//* The time complexity of the binary search is O(log n).
//* Space Complexity: O(1).

function floorSqrt(x) {
  //* Base cases
  if (x == 0 || x == 1) return x;

  let start = 1;
  let end = x;
  let ans;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    //* If x is a perfect square
    if (mid * mid == x) return mid;

    if (mid * mid < x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

// ! Note: The Binary Search can be further optimized to start with ‘start’ = 0 and ‘end’ = x/2. The floor of the square root of x cannot be more than x/2 when x > 1.
