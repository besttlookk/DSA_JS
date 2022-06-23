// ! =================Row with max 1s  ===========

// ! ==============Links =============
// * https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1/?page=2&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/

// ! ===========Utility function ================
function binarySearch(arr, low, high) {
  if (high >= low) {
    //* Get the middle index
    let mid = low + parseInt((high - low) / 2);

    //* Check if the element at middle index is first 1
    if ((mid === 0 || arr[mid - 1] === 0) && arr[mid] === 1) {
      return mid;
    }
    //* If the element is 0, recur for right side
    else if (arr[mid] === 0) return binarySearch(arr, mid + 1, high);
    else return binarySearch(arr, low, mid - 1);
  }

  return -1;
}

// !==============Method 1(Brute force) =================
// * TC: O(m*n)
/*
function rowWithMax1s(arr, n, m) {
  let max = -1;
  let row = -1;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) count++;
    }
    if (count) {
      if (count > max) row = i;
      max = Math.max(count, max);
    }
  }

  return row;
}

*/

// !==============================Method 2 (Binary Search) ==========================
//* Time Complexity: O(mLogn) where m is number of rows and n is number of columns in matrix.
//* Auxiliary Space:  O(Log n), as implicit stack is created due to recursion.

/*



function rowWithMax1s(arr, n, m) {
  let firstIndex;
  let max = -1;
  let max_row_index = 0;
  for (let i = 0; i < n; i++) {
    firstIndex = binarySearch(arr[i], 0, m - 1);

    if (firstIndex !== -1 && m - firstIndex > max) {
      max = m - firstIndex;
      max_row_index = i;
    }
  }

  return max_row_index;
}
*/

// ! ==============Method 3 ()============
// * The above solution can be optimized further.
// * Instead of doing binary search in every row, we first check whether the row has more 1s than max so far. If the row has more 1s, then only count 1s in the row. Also, to count 1s in a row, we don’t do binary search in complete row, we do search in before the index of last max.

// * TC:  O(mLogn)
/*
function rowWithMax1s(arr, n, m) {
  let i, index;

  // Initialize max using values from first row.
  let max_row_index = 0;
  let max = binarySearch(arr[0], 0, m - 1); // 1
  console.log({ max });

  //* Traverse for each row and count number of 1s
  //* by finding the index of first 1
  for (i = 1; i < n; i++) {
    //* Count 1s in this row only if this row
    //* has more 1s than max so far

    if (max !== -1 && arr[i][max - 1] === 1) {
      //* Note the optimization here also
      index = binarySearch(arr[i], 0, max - 1);
      console.log({ index });

      if (index != -1 && m - index > max) {
        max = m - index;
        max_row_index = i;
      }
    } else {
      max = binarySearch(arr[i], 0, m - 1);
    }
  }

  return max_row_index;
}
*/

//! ===================Method 4====================

// * Following method works in O(m+n) time complexity in worst case.

// * Step1: Get the index of first (or leftmost) 1 in the first row.
// * Step2: Do following for every row after the first row
//*    …IF the element on left of previous leftmost 1 is 0, ignore this row.
//*    …ELSE Move left until a 0 is found. Update the leftmost index to this index and max_row_index to be the current row.
//*    The time complexity is O(m+n) because we can possibly go as far left as we came ahead in the first step.

function rowWithMax1s(arr, n, m) {
  let j;
  let max_row_index = 0;
  j = m - 1;
  for (let i = 0; i < n; i++) {
    // Move left until a 0 is found
    let flag = false;

    //* to check whether a row has more 1's than previous
    while (j >= 0 && arr[i][j] == 1) {
      j = j - 1; //* Update the index of leftmost 1 seen so far
      flag = true; //* present row has more 1's than previous
    }

    //* if the present row has more 1's than previous
    if (flag) {
      max_row_index = i; // Update max_row_index
    }
  }

  if (max_row_index == 0 && arr[0][m - 1] == 0) return -1;
  return max_row_index;
}
console.log(
  rowWithMax1s(
    [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    4,
    4
  )
);
