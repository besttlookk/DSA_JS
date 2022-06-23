// ! =====================Smallest Positive missing number=================

// !===============Links ================
// * https://practice.geeksforgeeks.org/problems/smallest-positive-missing-number-1587115621/1/?page=2&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/

// !===========Method 1(Brute 1) ==================
// * A naive method to solve this problem is to search all positive integers, starting from 1 in the given array. We may have to search at most n+1 numbers in the given array. So this solution takes O(n^2) in worst case.

// !===========Method 1(Hashing) ==================
// * We can also use hashing. We can build a hash table of all positive elements in the given array. Once the hash table is built. We can look in the hash table for all positive integers, starting from 1. As soon as we find a number which is not there in hash table, we return it. This approach may take O(n) time on average, but it requires O(n) extra space.

// !============Method 3(A O(n) time and O(1) extra space solution: )
// * The idea is similar to this post. We use array elements as index. To mark presence of an element x, we change the value at the index x to negative. But this approach doesn’t work if there are non-positive (-ve and 0) numbers. So we segregate positive from negative numbers as first step and then apply the approach.

// * We traverse the array again and print the first index which has positive value.

/*

function segregate(arr, n) {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    while (arr[left] <= 0) {
      left++;
    }

    while (arr[right] > 0) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right--;
      left++;
    }
  }

  return left;
}

function findMissingPositive(arr, n) {
  for (let i = 0; i < n; i++) {
    const absValue = Math.abs(arr[i]);

    if (absValue - 1 < n && arr[absValue - 1] > 0) {
      arr[absValue - 1] = -arr[absValue - 1];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) return i + 1;
  }

  return n + 1;
}

function missingNumber(arr, n) {
  const shift = segregate(arr, n);
  console.log(arr);
  console.log(shift);

  const newArr = new Array(n - shift);

  // * copy all positive element into new arr
  let j = 0;
  for (let i = shift; i < n; i++) {
    newArr[j] = arr[i];
    j++;
  }

  //* Shift the array and call
  //* findMissingPositive for
  //* positive part
  return findMissingPositive(newArr, j);
}

*/

// * Note that this method modifies the original array. We can change the sign of elements in the segregated array to get the same set of elements back. But we still loose the order of elements. If we want to keep the original array as it was, then we can create a copy of the array and run this approach on the temp array.

// !==================================== Method 4 ======================

// * In this problem, we have created a list full of 0’s with size of the max() value of our given array.
// * Now, whenever we encounter any positive value in our original array, we change the index value of our list to 1. So, after we are done, we simply iterate through our modified list, the first 0 we encounter, its (index value + 1) should be our answer since index in python starts from 0.

function missingNumber(arr, n) {
  // To mark the occurrence of elements
  let present = Array(n + 1).fill(false);

  for (let i = 0; i < n; i++) {
    // * Only mark the required elements
    //* All non-positive elements and
    //* the elements greater n + 1 will never
    //* be the answer

    if (arr[i] > 0 && arr[i] <= n) {
      present[arr[i]] = true;
    }
  }

  //* Find the first element which didn't
  //* appear in the original array
  for (let i = 1; i <= n; i++) {
    if (!present[i]) {
      return i;
    }
  }

  return n + 1;
}
console.log(
  missingNumber(
    [
      8, 45, -21, -13, -15, 43, -32, -22, -7, -39, -22, -21, 26, -46, -7, 13,
      -37, -12, -44, -10, -46, -32,
    ],
    22
  )
);
