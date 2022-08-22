// !===========================Counting Sort ====================

// * Counting sort is a sorting technique based on keys between a specific range.

// * Characteristics of counting sort:
// *  # Counting sort makes assumptions about the data, for example, it assumes that values are going to be in the range of 0 to 10 or 10 – 99 etc, Some other assumptions counting sort makes are input data will be all real numbers.
// * # Like other algorithms this sorting algorithm is not a comparison-based algorithm, it hashes the value in a temporary count array and uses them for sorting.
// * # It uses a temporary array making it a non In Place algorithm.

// !=====================Links
// * https://practice.geeksforgeeks.org/problems/counting-sort/1
// * https://www.geeksforgeeks.org/counting-sort/

// !=====================Count_Sort[string] ==============
/*
function countSort(arr) {
  const n = arr.length;
  const output = new Array(n);
  let str = "";

  //* Create a count array to store count of individual
  //* characters and initialize count array as 0
  const count = Array.from({ length: 128 }, (_, i) => 0);

  //* store count of each character
  for (let i = 0; i < n; i++) {
    count[arr[i].charCodeAt(0)]++;
  }

  //* Change count[i] so that count[i] now contains actual
  //* position of this character in output array
  for (let i = 1; i < 128; i++) {
    count[i] += count[i - 1];
  }

  //* Build the output character array
  //* To make it stable we are operating in reverse order.

  for (let i = n - 1; i >= 0; i--) {
    output[--count[arr[i].charCodeAt(0)]] = arr[i];
  }

  // Copy the output array to arr, so that arr now
  // contains sorted characters
  // for (let i = 0; i < n; ++i) arr[i] = output[i];

  for (let i = 0; i < n; i++) {
    str += output[i];
  }
  return str;
}

console.log(countSort("edsab"));
*/

// !=====================Count_Sort[integer] ==============

function countSort(arr) {
  const n = arr.length;
  const output = new Array(n);
  let k = Number.MIN_VALUE; //* To store max value of input arr

  for (let i = 0; i < n; i++) {
    k = Math.max(k, arr[i]);
  }

  //* Create a count array to store count of individual
  //* characters and initialize count array as 0
  const count = Array.from({ length: k + 1 }, (_, i) => 0);

  //* store count of each character
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  //* Change count[i] so that count[i] now contains actual
  //* position of this character in output array
  for (let i = 1; i <= k; i++) {
    count[i] += count[i - 1];
  }

  //* Build the output character array
  //* To make it stable we are operating in reverse order.

  for (let i = n - 1; i >= 0; i--) {
    output[--count[arr[i]]] = arr[i];
  }

  // Copy the output array to arr, so that arr now
  // contains sorted characters
  for (let i = 0; i < n; ++i) arr[i] = output[i];

  return arr;
}

console.log(countSort([10, 4, 2, 7, 3, 12]));
