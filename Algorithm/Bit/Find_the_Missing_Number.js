// ! Links
// * https://www.geeksforgeeks.org/find-the-missing-number/
// * https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1/?page=1&category[]=Bit%20Magic&sortBy=submissions

// !===========================Method 1( Using  Summation formula) ==============================
// * Time Complexity: O(n).
// * Space Complexity: O(1).
/*
function MissingNumber(array, n) {
  const expectedSum = ((n ) * (n + !)) / 2; // * n represent size of  actual array
  let sum = 0;

  for (let i = 0; i < n - 1; i++) {
    sum += array[i];
  }

  return expectedSum - sum;
}
*/

// !====================== Method 2 (Using Xor) ==================================

// * XOR has certain properties
//* Assume a1 ^ a2 ^ a3 ^ …^ an = a and a1 ^ a2 ^ a3 ^ …^ an-1 = b
//* Then a ^ b = an
function MissingNumber(array, n) {
  let x1 = array[0];
  let x2 = 1;
  for (let i = 1; i < array.length; i++) {
    x1 ^= array[i];
  }

  for (let i = 2; i <= n; i++) {
    x2 ^= i;
  }

  return x1 ^ x2;
}
console.log(MissingNumber([1, 2, 3, 5], 5));
