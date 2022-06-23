// ! ++++++++++++++++++++++++++++++++++3-Way QuickSort (Dutch National Flag)++++++++++++++++++++++++++++++++++++++++++++

// !=========Links============
// * https://www.geeksforgeeks.org/3-way-quicksort-dutch-national-flag/

// !======= Important points
// * In simple QuickSort algorithm, we select an element as pivot, partition the array around a pivot and recur for subarrays on the left and right of the pivot.
// * Consider an array which has many redundant elements. For example, {1, 4, 2, 4, 2, 4, 1, 2, 4, 1, 2, 2, 2, 2, 4, 1, 4, 4, 4}. If 4 is picked as a pivot in Simple Quick Sort, we fix only one 4 and recursively process remaining occurrences.
// * The idea of 3 way Quick Sort is to process all occurrences of the pivot and is based on Dutch National Flag algorithm.

// * In 3 Way QuickSort, an array arr[l..r] is divided in 3 parts:
//*  a) arr[l..i] elements less than pivot.
//*  b) arr[i+1..j-1] elements equal to pivot.
//*  c) arr[j..r] elements greater than pivot.

function threeWayPartition(array, a, b) {
  let left = 0; //* to keep track of number greater than "b"
  let right = array.length - 1;
  let i = 0; //* used for looping

  while (i <= right) {
    // * if any number found less that a, swap with "start" index
    if (array[i] < a) {
      [array[left], array[i]] = [array[i], array[left]];
      i++;
      left++;
    } else if (array[i] > b) {
      [array[right], array[i]] = [array[i], array[right]];
      right--;
    } else {
      i++;
    }
  }

  console.log(array);
}

threeWayPartition([1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32], 14, 20);
