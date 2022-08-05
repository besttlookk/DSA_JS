// !==============Sort n numbers in range from 0 to n^2 – 1 in linear time
// !===== How to sort if range is from 1 to n2?
// * If range is from 1 to  n2, the above process can not be directly applied, it must be changed.
// * Do following steps:
// * 1) Subtract all numbers by 1.
// * 2) Since the range is now 0 to n2, do counting sort twice as done in the above implementation.
// * 3) After the elements are sorted, add 1 to all numbers to obtain the original numbers.

// !============How to sort if range is from 0 to n^3 -1?
// * Since there can be 3 digits in base n, we need to call counting sort 3 times.

// !=============Links
// * https://www.geeksforgeeks.org/sort-n-numbers-range-0-n2-1-linear-time/
// * https://practice.geeksforgeeks.org/problems/efficiently-sorting-number-from-0-to-n2-15444/1

// !====================
// * If we use Counting Sort, it would take O(n^2) time as the given range is of size n^2.
// * Using any comparison based sorting like Merge Sort, Heap Sort, .. etc would take O(nLogn) time.
// * The idea is to use Radix Sort.
// * Do following for each digit i where i varies from least  ignificant digit to the most significant digit.
// * a) Sort input array using counting sort (or any stable  sort) according to the i’th digit

//* A function to do counting sort of arr[] according to the digit represented by exp.
function countSort(arr, n, exp) {
  // Output array
  let output = new Array(n).fill(0);
  let count = new Array(n).fill(0);

  //* Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    count[parseInt(arr[i] / exp, 10) % n]++;
  }

  // console.log({ count });

  // Change count[i] so that
  // count[i] now contains actual
  // position of this digit in output[]
  for (let i = 1; i < n; i++) count[i] += count[i - 1];

  console.log({ count });

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    output[count[parseInt(arr[i] / exp, 10) % n] - 1] = arr[i];
    count[parseInt(arr[i] / exp, 10) % n]--;
  }

  console.log({ output });

  // Copy the output array to
  // arr[], so that arr[] now
  // contains sorted numbers
  // according to current digit
  for (let i = 0; i < n; i++) arr[i] = output[i];
}
//* The main function to that sorts arr[] of size n using Radix Sort
function sort(arr, n) {
  //* Do counting sort for first digit in base n.
  //*  Note that instead of passing digit number,
  //* exp (n^0 = 1) is passed.
  countSort(arr, n, 1);

  //* Do counting sort for second digit in base n.
  //*  Note that
  //* instead of passing digit number,
  //* exp (n^1 = n) is passed.
  countSort(arr, n, n);

  return arr;
}

console.log(sort([40, 12, 45, 32, 33, 1, 22], 7));
