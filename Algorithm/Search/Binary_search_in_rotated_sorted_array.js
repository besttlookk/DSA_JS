function search(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return x;
    // * Check if left part is sorted or not
    if (arr[low] < arr[mid]) {
      // * if sorted, check if the search number lie in that sectiion

      if (x >= arr[low] && x < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //* if left part is not sorted: right part must be sorted
      if (k > arr[mid] && k <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}
