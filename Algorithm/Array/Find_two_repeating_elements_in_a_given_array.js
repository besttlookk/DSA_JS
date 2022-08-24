// !+++++++++++++++++++++++Find the two repeating elements in a given array++++++++++++++++++++++++++++++++
// * You are given an array of N+2 integer elements. All elements of the array are in range 1 to N.
// * Also, all elements occur once except two numbers which occur twice. Find the two repeating numbers.
// * that means all number from 1 to N is present

// ! =======================Links ==================================
// * https://practice.geeksforgeeks.org/problems/two-repeated-elements-1587115621/1/
// * https://www.geeksforgeeks.org/find-the-two-repeating-elements-in-a-given-array/
// * https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1

// !=======================Method 1(Brute force) =========================
// * Time Complexity: O(n*n)
// * This method doesn’t use the other useful data provided in questions like range of numbers is between 1 to n and there are only two repeating elements.

// * Time Complexity: O(n*n)
//* Auxiliary Space: O(1)
/*

function twoRepeated(arr, N) {
  const set = new Set();

  for (let i = 0; i < N + 2; i++) {
    for (let j = i + 1; j < N + 2; j++) {
      if (arr[i] === arr[j]) set.add(arr[i]);
    }
  }

  return set.size > 0 ? Array.from(set) : [-1];
}
*/

// !======================================Method 2 (Use Count array)=================
// *Traverse the array once. While traversing, keep track of count of all elements in the array using a temp array count[] of size n,
// * when you see an element whose count is already set, print it as duplicate.

// * Time Complexity: O(n)
//* Auxiliary Space: O(n)

// * Values are from 1 to N only.
/*
function twoRepeated(arr, N) {
  const result = [];
  const count = Array(N).fill(0);

  for (let i = 0; i < N + 2; i++) {
    count[arr[i] - 1] = count[arr[i] - 1] + 1;

    if (count[arr[i] - 1] > 1) {
      result.push(arr[i]);
    }
  }

  return result.length ? result : [-1];
}
*/
// !==========================================Method 3 ((Use XOR) )===============
// * This is similat to this: "Find the two non-repeating elements in an array of repeating elements/ Unique Numbers 2"
// * Let the repeating numbers be X and Y, if we xor all the elements in the array and all integers from 1 to n, then the result is X xor Y.
// * The 1’s in binary representation of X xor Y is corresponding to the different bits between X and Y.
// * Suppose that the kth bit of X xor Y is 1, we can xor all the elements in the array and all integers from 1 to n, whose kth bits are 1. The result will be one of X and Y.

// * Time Complexity: O(n)
//*  Auxiliary Space: O(1)

// * 1 to N
// * order of output differs.
/*
function twoRepeated(arr, N) {
  let xor = arr[0];
  let x = 0;
  let y = 0;

  //* XOR of all the items present in the array
  for (let i = 1; i < N + 2; i++) {
    xor ^= arr[i];
  }

  //* XOR of above result with all different element present(1 to N);
  for (let i = 0; i < N; i++) {
    xor ^= i + 1;
  }

  //*Get the rightmost set bit in set_bit_no
  let set_bit_no = xor & ~(xor - 1);

  console.log({ set_bit_no });

  //*Now divide elements in two sets by comparing rightmost set
  //*bit of Xor with bit at same position in each element. 

  for (let i = 0; i < N + 2; i++) {
    //* is group me set bits hai
    if (set_bit_no & arr[i] > 0) {
      x ^= arr[i];
    } 
    //* is group me nahi hai.
    else {
      y ^= arr[i];
    }
  }

  for (let i = 0; i < N; i++) {
    if (set_bit_no & (i + 1) >  0) {
      x ^= i + 1;
    } else {
      y ^= i + 1;
    }
  }

  return [x, y];  //* order in which elements repeats first might be different
}

*/

// ! ===================Method 4((Use array elements as index) ) ==================
/*
Traverse the array. Do following for every index i of A[].
{
check for sign of A[abs(A[i])] ;
if positive then
   make it negative by   A[abs(A[i])]=-A[abs(A[i])];
else  // i.e., A[abs(A[i])] is negative
   this   element (ith element of list) is a repetition
}
*/

// * Since all the numbers are in 1 to N. So we making the value of negative as reminder that that index value has already been visisted.

// * Time Complexity: O(n)
// * Auxiliary Space: O(1)
/*
function twoRepeated(arr, N) {
  let result = [];

  for (let i = 0; i < N + 2; i++) {
    const absValue = Math.abs(arr[i]);
    if (arr[absValue - 1] > 0) {
      arr[absValue - 1] = -arr[absValue - 1];
    } else {
      result.push(absValue);
    }
  }

  return result;
}
*/

// !===================Method 5(Set) =========================
//* The point here is to enter the array elements one by one into the unordered set.
// * If a particular element is already present in the set it’s a repeating element.

//* Time Complexity: O(n)

//* Auxiliary Space: O(n)
function twoRepeated(arr, N) {
  const set = new Set();
  const result = [];

  for (let i = 0; i < N + 2; i++) {
    if (set.has(arr[i])) result.push(arr[i]);
    else set.add(arr[i]);
  }

  return result;
}
console.log(twoRepeated([1, 2, 1, 3, 4, 3], 4));
