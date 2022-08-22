// !===========================Links
// * https://practice.geeksforgeeks.org/problems/merge-and-sort5821/1?page=1&sortBy=submissions&searchQuery=merge
// * https://practice.geeksforgeeks.org/problems/merge-sort/1?page=1&sortBy=submissions&searchQuery=merge

//! ===================== Method 1 ====================
/*
function merge(array1, array2) {
  let mergedArr = [];
  let i = 0; // for arr1
  let j = 0; // for arr2

  while (i < array1.length && j < array2.length) {
    if (array1[i] > array2[j]) {
      mergedArr.push(array2[j]);
      j++;
    } else if (array1[i] < array2[j]) {
      mergedArr.push(array1[i]);
      i++;
    } else {
      mergedArr.push(array1[i]);
      i++;
      j++;
    }
  }

  if (i !== array1.length) mergedArr.push(...array1.slice(i));
  if (j !== array2.length) mergedArr.push(...array2.slice(j));

  return mergedArr;
}

// TC: nlogn
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

*/

// !========================================Method 2 =================
/*
function merge(arr, left, mid, right) {
  if (arr[mid] <= arr[mid + 1]) return; //* already sorted

  const leftArr = [];
  const rightArr = [];
  const n1 = mid - left + 1;
  const n2 = right - mid;

  // * Copy element from
  for (let i = 0; i < n1; i++) {
    leftArr[i] = arr[left + i];
  }

  for (let i = 0; i < n2; i++) {
    rightArr[i] = arr[mid + i + 1];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    // if (leftArr[i] <= rightArr[j]) {
    //   // * No swap
    //   arr[k++] = leftArr[i++];
    // } else {
    //   // * YES Swap
    //   arr[k++] = rightArr[j++];
    // }

    arr[k++] = leftArr[i] <= rightArr[j] ? leftArr[i++] : rightArr[j++];
  }

  while (i < n1) {
    arr[k++] = leftArr[i++];
  }

  while (j < n2) {
    arr[k++] = rightArr[j++];
  }
}
*/
// * OPTIMIZED MERGE
function merge(arr, left, mid, right) {
  if (arr[mid] <= arr[mid + 1]) return; //* already sorted

  let i = left;
  let j = mid + 1;
  let tempIdx = 0;

  const temp = new Array(right - left + 1);

  while (i <= mid && j <= right) {
    temp[tempIdx++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
  }

  arraymove(arr, i, arr, left + tempIdx, mid - i + 1);

  arraymove(temp, 0, arr, left, tempIdx);
}

function arraymove(srcArr, srcPos, desArr, desPos, length) {
  const items = srcArr.slice(srcPos, srcPos + length);
  desArr.splice(desPos, length, ...items);
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    //* Left subarray count
    mergeSort(arr, left, mid);

    //* Right subarray count
    mergeSort(arr, mid + 1, right);

    //* Merge count
    merge(arr, left, mid, right);
  }
}
// const arr = [2, 5, 7, 2, 10, 45, 23];
// const arr = [2, 9, 6, 5];
const arr = [2, 9, 5, 6, 10, 1, 5];
mergeSort(arr);
console.log(arr);
