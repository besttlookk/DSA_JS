// !=========================Links
// * https://practice.geeksforgeeks.org/problems/selection-sort/1

// !=============method 1 =========
/*
function bubbleSort(array) {
  let swapped = false;

  for (let i = 1; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    //* If in one loop there is no swip, then array is already sorted
    if (!swapped) break;
  }

  return array;
}
*/

// !=======================Method 2 ================

function bubbleSort(array) {
  let swapped = false;
  const n = array.length;

  for (let i = n - 1; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    //! If in one loop there is no swip, then array is already sorted
    if (!swapped) break;
  }

  return array;
}
const array = [10, 4, 43, 5, 57, 91, 45, 9, 7];
console.log(bubbleSort(array));
