// ! ====================== Count total set bits ======================
// ! ============== links ==================
// * https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1/?page=1&category[]=Bit%20Magic&sortBy=submissions
// * https://www.geeksforgeeks.org/count-set-bits-in-an-integer/

// ! ============= Method 1 ========
//* Time Complexity: Θ(logn) (Theta of logn)

//* Auxiliary Space: O(1)
/*
function countSetBits(N) {
  let count = 0;

  while (N) {
    count += N & 1;

    N >>= 1;
  }

  return count;
}
*/

// ! ================ Method 2 (Recursive approach) ===================
//* Time Complexity: O(log n)

//* Auxiliary Space: O(1)
/*
function countSetBits(N) {
  if (N === 0) return 0;
  else {
    return (N & 1) + countSetBits(N >> 1);
  }
}
*/

// ! ==================Method 3(Brian Kernighan’s Algorithm: ) ===================
// *Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit.
// *for example :
// * 10 in binary is 00001010
// * 9 in binary is 00001001
// * 8 in binary is 00001000
// * 7 in binary is 00000111

// * So if we subtract a number by 1 and do it bitwise & with itself (n & (n-1)), we unset the rightmost set bit.
// *If we do n & (n-1) in a loop and count the number of times the loop executes, we get the set bit count.

// * The beauty of this solution is the number of times it loops is equal to the number of set bits in a given integer.

// * Time Complexity: O(logn)
/*
function countSetBits(N) {
  let count = 0;

  while (N > 0) {
    N &= N - 1;
    count++;
  }

  return count;
}
*/
// ! ================Method 4(Recursive) ===========

function countSetBits(N) {
  if (N === 0) return 0;

  return 1 + countSetBits(N & (N - 1));
}
console.log(countSetBits(5));
