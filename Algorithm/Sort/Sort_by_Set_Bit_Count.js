// !================================+Links
// * https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count1153/1?page=1&category[]=Sorting&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions
// * https://www.geeksforgeeks.org/sort-array-according-count-set-bits/
// !===================Sort by Set Bit Count

// !===============================Method 1========================
// * Auxiliary Space: O(n)
// * Time complexity: O(n2)
// * Note: Time complexity can be improved to O(nLogn) by using a stable O(nlogn) sorting algorithm.
/*
function sortBySetBitCount(arr, n) {
  const auxArr = new Array(n);

  for (let i = 0; i < n; i++) {
    auxArr[i] = countBits(arr[i]);
  }

  insertionSort(arr, auxArr, n);

  return arr;
}

function countBits(num) {
  let count = 0;

  while (num > 0) {
    if ((num & 1) > 0) {
      count++;
    }

    num = num >> 1;
  }

  return count;
}

// Function to simultaneously
// sort both arrays using insertion sort
function insertionSort(arr, aux, n) {
  for (let i = 1; i < n; i++) {
    let key1 = aux[i];
    let key2 = arr[i];
    let j = i - 1;

    while (j >= 0 && key1 > aux[j]) {
      aux[j + 1] = aux[j];
      arr[j + 1] = arr[j];

      j--;
    }

    aux[j + 1] = key1;
    arr[j + 1] = key2;
  }
}
*/
// !=========================Method 2(Using in-build sort)
function sortBySetBitCount(arr, n) {
  arr.sort(function (a, b) {
    let c1 = Number(a.toString(2).split("").sort().join("")).toString().length;
    let c2 = Number(b.toString(2).split("").sort().join("")).toString().length;

    return c2 - c1;
  });
  return arr;
}

// !==================Method 3: Counting Sort based

// !==================Method 4: Using MultiMap(Not in place) =============
// * Create a MultiMap whose key values will be the negative of the number of set-bits of the element.
// * Traverse the array and do following for each element
// *  # Count the number set-bits of this element. Let it be ‘setBitCount’
// *  # count.insert({(-1) * setBitCount, element})
// * Traverse ‘count’ and print the second elements.

// * Time complexity: O(n log n)
// * Auxiliary Space: O(n)
function setBitCount(num) {
  let count = 0;

  while (num > 0) {
    if ((num & 1) > 0) {
      count++;
    }

    num = num >> 1;
  }

  return count;
}

function sortBySetBitCount(arr, n) {
  let count = [];

  for (let i = 0; i < n; i++) {
    count.push([-1 * setBitCount(arr[i]), arr[i]]);
  }

  count.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    arr[i] = count[i][0];
  }
}
// console.log(sortBySetBitCount([1, 2, 3, 4, 5, 6], 6));
console.log(sortBySetBitCount([9, 8, 6, 1, 11, 7, 3, 3, 10], 9));
