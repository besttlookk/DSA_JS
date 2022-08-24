// !======================================Cyclically rotate an array by one
// * Given an array, rotate the array by one position in clock-wise direction.
// * A[] = {1, 2, 3, 4, 5}   ==> res: 5 1 2 3 4

// !==============================Links =================
// * https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
// * https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/

// !======================Method 1================
// * 1) Store last element in a variable say x.
//* 2) Shift all elements one position ahead.
//* 3) Replace first element of array with x.

// * Time Complexity: O(n) As we need to iterate through all the elements
// * Auxiliary Space: O(1)
/*
function reverse(arr) {
  let n = arr.length;
  let temp = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;

  return arr;
}
*/
// ! ===========Method 2(Two pointer )===========

// * We can use two pointers, say i and j which point to first and last element of array respectively.
// * As we know in cyclic rotation we will bring last element to first and shift rest in forward direction, so start swaping arr[i] and arr[j] and keep j fixed and i moving towards j.
// * Repeat till i is not equal to j.

function reverse(arr, n) {
  let i = 0;
  let j = n - 1; //* this will not move

  while (i < j) {
    // *swap
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
  }
  return arr;
}

// !=========================Method 3(Using reverse of array)================
function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

function rotate(arr, n) {
  this.reverse(arr, 0, n - 1); //* here we first reverse the whole array
  this.reverse(arr, 1, n - 1);
  return arr;
}
console.log(reverse([1, 2, 3, 4, 5], 5));
