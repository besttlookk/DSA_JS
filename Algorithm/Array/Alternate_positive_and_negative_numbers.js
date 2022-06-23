// !====Links
// * https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions

// !================== Method 1 ====================
// * TC: O(n)
// * SC: O(n) :
/* 
function rearrange(arr, n) {
  const pArr = [];
  const nArr = [];
  let p = 0; //* pointer for pArr
  let q = 0; //* pointer for nArr

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) nArr.push(arr[i]);
    else pArr.push(arr[i]);
  }

  let min = Math.min(pArr.length, nArr.length);

  // * ODD Index: positive
  for (let i = 0; i < 2 * min; i++) {
    if (i % 2 === 0) {
      arr[i] = pArr[p];
      p++;
    } else {
      arr[i] = nArr[q];
      q++;
    }
  }

  let i = 2 * min;

  while (p < pArr.length) {
    arr[i] = pArr[p];
    p++;
    i++;
  }

  while (q < nArr.length) {
    arr[i] = nArr[q];
    q++;
    i++;
  }

  return arr;
}

*/
//! ==============Method 2(With SC: O(1) BUT Order does not matter) =====================

// * STEP 1: Seprate positive and negative number
// * Use a pointer from start with step of 2 and exhange number from the end

// * TC:O(n)
// * SC: O(1)
// * NOTE: Relative order gets change
/*
function rearrange(arr, n) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    while (arr[left] >= 0) {
      left++; //* jab tak positive num hai..left ko badhate jao
    }

    while (arr[right] < 0) {
      right--;
    }

    if (left < right) swap(arr, left, right);
  }

  // * After the end of step 1, left pointer will be on 1st negative number
  let k = 1; //* bcoz we want index at odd place to be negative
  while (left < n && k < n) {
    swap(arr, k, left);
    left++;
    k += 2;
  }

  return arr;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

*/
// ! =============Method 3(SC: O(1) + Order same) =============
//* An element is out of place if it is negative and at odd index (0 based index), or it is positive and at even index (0 based index) . Once we find an out of place element, we find the first element after it with opposite sign. We right rotate the subarray between these two elements (including these two).

function rightRotate(arr, from, to) {
  let temp = arr[to];

  for (let i = to; i > from; i--) {
    arr[i] = arr[i - 1];
  }

  arr[from] = temp;

  return arr;
}

function checkEven(num) {
  return num % 2 === 0;
}

// console.log(rightRotate([91, 2, 3, 4, 5, 6], 0, 5));
function rearrange(arr, n) {
  let outOfPlace = -1;

  for (index = 0; index < n; index++) {
    if (outOfPlace >= 0) {
      //* find the item which must be moved into
      //* the out-of-place entry if out-of-place
      //* entry is positive and current entry is
      //* negative OR if out-of-place entry is
      //* negative and current entry is negative
      //* then right rotate
      //
      //* [...-3, -4, -5, 6...] --> [...6, -3,
      //* -4, -5...]
      //* ^ ^
      //* | |
      //* outofplace --> outofplace
      //

      if (
        (arr[index] >= 0 && arr[outOfPlace] < 0) ||
        (arr[index] < 0 && arr[outOfPlace] >= 0)
      ) {
        rightRotate(arr, outOfPlace, index);
        console.log({ arr });

        // the new out-of-place entry is now 2
        // steps ahead
        if (index - outOfPlace >= 2) outOfPlace = outOfPlace + 2;
        else outOfPlace = -1;
      }
    }

    //* if no entry has been flagged out-of-place
    // * Wrong order: even index - negative number
    if (outOfPlace == -1) {
      if (
        (checkEven(index) && arr[index] < 0) ||
        (!checkEven(index) && arr[index] >= 0)
      ) {
        outOfPlace = index;
        console.log({ outOfPlace });
      }
    }
  }
  return arr;
}
// console.log(checkEven(-5));
console.log(rearrange([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8], 10));
