// ! find whether a given number is power of 2

// ! LINKS
// * https://practice.geeksforgeeks.org/problems/power-of-2-1587115620/1/?page=1&category[]=Bit%20Magic&sortBy=submissions
// * https://www.geeksforgeeks.org/program-to-find-whether-a-given-number-is-power-of-2/

// ! =========Method 1 ============
//* Time Complexity: O(1)
//* Auxiliary Space: O(1)
// ! Does not work for last number
/*
function isPowerofTwo(n) {
  if (n === 0) return false;

  console.log(Math.log(n) / Math.log(2));
  console.log(Math.ceil(Math.log(n) / Math.log(2)));
  console.log(Math.floor(Math.log(n) / Math.log(2)));

  return (
    parseInt(Math.ceil(Math.log(n) / Math.log(2))) ===
    parseInt(Math.floor(Math.log(n) / Math.log(2)))
  );
}
*/
// ! ================ Method 2(Division) =====================
//* Time Complexity: O(log2n)
//* Auxiliary Space: O(1)
/*
function isPowerofTwo(n) {
  if (n == 0) return false;
  while (n != 1) {
    if (n % 2 != 0) return false; //* if odd number
    n = n / 2;
  }
  return true;
}
*/
// ! =================== Method 3 (Division + Reursion) ================
//* Time Complexity: O(log2n)
//* Auxiliary Space: O(log2n)
/*

function isPowerofTwo(n) {
  if (n === 1) return true;

  if (n === 0 || n % 2 !== 0) return false;

  return isPowerofTwo(n / 2);
}
*/
// !==================== Method 4(Bit shift) =====================
// *  All power of two numbers has only a one-bit set. So count the no. of set bits and if you get 1 then the number is a power of 2.
//* Time complexity : O(N)

//* Space Complexity : O(1)
/*
function isPowerofTwo(n) {
  let count = 0;

  while (n > 0) {
    if ((n & 1) === 1) {
      //* if last bit is 1
      count++;
    }

    n = n >> 1; // right shift n by 1
  }
  return count === 1 ? true : false;
}
*/

// ! ========================== Method 5 ==============
//* If we subtract a power of 2 numbers by 1 then all unset bits after the only set bit become set; and the set bit becomes unset.
// * So, if a number n is a power of 2 then bitwise & of n and n-1 will be zero. We can say n is a power of 2 or not based on the value of n&(n-1).
// * The expression n&(n-1) will not work when n is 0. To handle this case also, our expression will become n& (!n&(n-1))

//* Time Complexity: O(1)

//* Auxiliary Space: O(1)

function isPowerofTwo(n) {
  if (n === 0) return false;

  return (n & (n - 1)) === 0;
}
console.log(isPowerofTwo(64));
