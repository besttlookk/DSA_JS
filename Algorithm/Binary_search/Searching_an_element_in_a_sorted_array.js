// !========== Searching an element in a sorted array

// !========== method 1
function searchInSorted(arr, N, K) {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === K) return 1;
    else if (arr[mid] < K) left = mid + 1;
    else mid - 1;
  }

  return -1;
}
