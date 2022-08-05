// !====================Merge Without Extra Space ================

// !==================Links =========
// * https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1?page=1&sortBy=submissions&searchQuery=merge

// !==========================Solution ==============
// * Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
// * That is first array will contain all smaller value that array2[0]
// * We will use of INSERTION SORT Technique
// * We will select one element front the second array(array2) : Selection is fron last to front
// * then will will find appropriate position of selected element in array1 and insert it
//
/*
function merge(arr1, arr2, n, m) {
  // * Select element from arr2 front the last
  // * i is used for arr2
  for (let i = m - 1; i >= 0; i--) {
    // * store the last element from array1  to keep it save.
    const last = arr1[n - 1];
    let j;
    // * keep shifthing the values of array1 while there is element in array1 greater than array2[i]
    for (j = n - 2; j >= 0 && arr1[j] > arr2[i]; j--) {
      arr1[j + 1] = arr1[j];
    }

    if (j !== n - 2 || last > arr2[i]) {
      arr1[j + 1] = arr2[i];
      arr2[i] = last;
    }
  }
}
*/

// !======================Method 2
function merge(arr1, arr2, n, m) {
  let i = n - 1;
  let j = 0;

  // * first store all smallest n element in arr1 and remainning element in arr2
  // * resulting arrays wont be sorted
  while (i >= 0 && j < m) {
    if (arr1[i] > arr2[j]) {
      // Swap
      const temp = arr1[i];
      arr1[i] = arr2[j];
      arr2[j] = temp;

      i--;
      j++;
    } else break;
  }

  // * Now sort both array
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  console.log({ arr1 });
  console.log({ arr2 });
}

// !======================Example 1 ===========
// const arr1 = [1, 5, 9, 10, 15, 20];
// const arr2 = [2, 3, 8, 13];

// console.log(merge(arr1, arr2, 6, 4));
// !=====================Example 2=============

console.log(merge([1, 35], [6, 9, 13, 15, 20, 25, 29, 46], 2, 8));
