// ! ========== Links ===============
// * https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/
// * https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions

// !=========Method 1(Naive approch) ===========================
//* Time Complexity: O(n)
//* Auxiliary Space: O(1)
/*
function find(arr, n, x) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    while (arr[left] !== x) {
      left++;
    }

    while (arr[right] !== x) {
      right--;
    }

    if (arr[left] === x && arr[right] === x) break;
  }

  return left > right ? [-1, -1] : [left, right];
}
*/
// ! ============ Method 2A(Binary search) ========================
/*
function binarySearch(arr, num) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    midPointer = Math.floor((leftPointer + rightPointer) / 2);

    if (arr[midPointer] > num) rightPointer = midPointer - 1;
    else if (arr[midPointer] < num) leftPointer = midPointer + 1;
    else return midPointer;
  }

  return -1;
}

function find(arr, n, x) {
  const result = binarySearch(arr, x);
  let left;
  let right;
  if (result !== -1) {
    left = result;
    right = result;

    while (arr[left] === x) {
      left--;
    }

    while (arr[right] === x) {
      right++;
    }

    return [left + 1, right - 1];
  }

  return [-1, -1];
}

*/

// !============= 2B (Seprate binary search for first and last): Iterative ==========
// * Note array is sorted in ascending order
//* Time Complexity : O(log n)
//* Auxiliary Space : O(1)
/*
function first(arr, x, n) {
  let low = 0;
  let high = n - 1;
  let res = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) high = mid - 1;
    else if (arr[mid] < x) low = mid + 1;
    //* If arr[mid] is same as x, we
    //* update res and move to the left
    //* half. BCOZ WE ARE LOOKING FOR FIRST
    else {
      res = mid;
      high = mid - 1;
    }
  }

  return res;
}

function last(arr, x, n) {
  let low = 0;
  let high = n - 1;
  let res = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) high = mid - 1;
    else if (arr[mid] < x) low = mid + 1;
    //* If arr[mid] is same as x, we
    //* update res and move to the left
    //* half. BCOZ WE ARE LOOKING FOR FIRST
    else {
      res = mid;
      low = mid + 1;
    }
  }

  return res;
}

function find(arr, n, x) {
  const left = first(arr, x, n);
  const right = last(arr, x, n);

  return [left, right];
}
*/

// !============Method 3(Using build in method) ==============
function find(arr, n, x) {
  const left = arr.indexOf(x);
  const right = arr.lastIndexOf(x);

  return [left, right];
}
console.log(find([1, 3, 5, 5, 5, 5, 7, 123, 125], 9, 7));
