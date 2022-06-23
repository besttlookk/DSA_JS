/**
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

The subarray which is already sorted. 
Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 

 */
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfLowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexOfLowest] > array[j]) indexOfLowest = j;
    }

    if (i !== indexOfLowest) {
      [array[i], array[indexOfLowest]] = [array[indexOfLowest], array[i]];
    }
  }

  return array;
}

// console.log(selectionSort([10, 29, 12, 14, 0]));

var mergeArr = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      console.log(nums1[i], nums2[j]);
      const temp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = temp;

      i++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      const temp = nums1[1 + 1];
      nums1[i + 1] = nums2[j];
      nums2[j] = temp;
      i += 2;
    }
  }
  nums1.splice(m, n, ...nums2);

  return nums1;
};

console.log(mergeArr([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5));
