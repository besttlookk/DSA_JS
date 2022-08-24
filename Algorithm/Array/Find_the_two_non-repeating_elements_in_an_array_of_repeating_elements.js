// !========================Find the two non-repeating elements in an array of repeating elements / Unique Numbers 2 ====================
// * Given an array in which all numbers except two are repeated once. (i.e. we have 2n+2 numbers and n numbers are occurring twice and remaining two have occurred once)
// *

// !=========================================Links ====================================
// * https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1

// !=============================Method 1(Use Sorting) ========================
// * First, sort all the elements. In the sorted array, by comparing adjacent elements we can easily get the non-repeating elements.
// * Time complexity of this method is O(nLogn)

// !=============================Method 2(Use XOR) ==============================
// * Let x and y be the non-repeating elements we are looking for and arr[] be the input array. First, calculate the XOR of all the array elements.
// * All the bits that are set in xor will be set in one non-repeating element (x or y) and not in others.
// * So if we take any set bit of xor and divide the elements of the array in two sets – one set of elements with same bit set and another set with same bit not set.
// * By doing so, we will get x in one set and y in another set.
// * Now if we do XOR of all the elements in the first set, we will get the first non-repeating element, and by doing same in other sets we will get the second non-repeating element.
//  * (n&~(n-1)) always return the binary number containing the rightmost set bit as 1.

// * Time Complexity: O(n)
// * Auxiliary Space: O(1)

function singleNumber(nums) {
  let n = nums.length;
  let xor = nums[0];

  for (let i = 1; i < n; i++) {
    xor ^= nums[i];
  }

  xor = xor & ~(xor - 1);

  let X = 0;
  let Y = 0;

  // Traversing the array again
  for (let i = 0; i < n; i++) {
    // Bitwise & the arr[i] with the sum
    // Two possibilities either result == 0
    // or result > 0
    if ((nums[i] & xor) > 0) X = X ^ nums[i];
    else Y = Y ^ nums[i];
  }

  if (X < Y) return [X, Y];
  else return [Y, X];
}
console.log(singleNumber([2, 4, 7, 9, 2, 4]));

// !============================Method 3(Use Maps)

// * In this method, we simply count frequency of each element. The elements whose frequency is equal to 1 is the number which is non-repeating.

// * Time Complexity: O(nlogn)
// * Auxiliary Space: O(n)

// !========================Method 4(Use Sets):

//* In this method, We check if the element already exists, if it exists we remove it else we add it to the set.
