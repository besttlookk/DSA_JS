// !=========================Links
// * https://practice.geeksforgeeks.org/problems/quick-sort/1

// !=========================Method 1 =====================
/*
function partition(items, left, right) {
  let mid = Math.floor((right + left) / 2);
  let pivot = items[mid];

  function swap(idx1, idx2) {
    const temp = items[idx1];
    items[idx1] = items[idx2];
    items[idx2] = temp;
  }

  while (left <= right) {
    while (items[left] < pivot) {
      left++;
    }

    while (items[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(left, right);
      left++;
      right--;
    }
  }

  return left;
}

function quickSort(n, arr, left = 0, right = n - 1) {
  if (left < right) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr, left, right);

    // Separately sort elements before
    // partition and after partition
    if (left < pi - 1) {
      quickSort(n, arr, left, pi - 1);
    }

    if (pi < right) {
      quickSort(n, arr, pi, right);
    }
  }

  return arr;
}

*/

// !====================== Method 2(1 pointer method) =======================
function partition(arr, left, right) {
  let pivot = arr[right];

  // * i represnt index upto which partition is done correctly
  let i = left - 1;

  // * j is only looking for element smaller than pivot
  for (let j = left; j < right; j++) {
    // * If current element is smaller than pivot
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; //* exat position for pivot is just after i
  return i + 1;
}

function quickSort(n, arr, left = 0, right = n - 1) {
  if (left < right) {
    const pi = partition(arr, left, right);

    quickSort(n, arr, left, pi - 1);
    quickSort(n, arr, pi + 1, right);
  }

  return arr;
}

const arr = [6, 1, 2, 4];
console.log(quickSort(4, arr));
