// !========================Next_Permutation===========================

//!============================Link==========================
// * https://practice.geeksforgeeks.org/problems/next-permutation5226/1

// !========================Method 1=============================
function nextPermutation(arr, n) {
  if (n === 1) return arr;

  let lastIncluded = -1; //* It represent last peak value;

  // * STEP 1: Find the last peak value
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      lastIncluded = i + 1;
      break;
    }
  }

  // * STEP 2: IF there is no peak value. That is number is arranged in decreasing order.
  // * In this case just reverse the array to make it in increasing order.
  if (lastIncluded === -1) {
    reverse(arr, n);
    return arr;
  } else {
    // * STEP 3: Check for special case.
    // * If there lies a value smaller that last peek value BUT greater than the next lower value of peek.
    // * Find the value in the range (arr[lastIncluded -1 ], arr[lastIncluded]).

    let index = lastIncluded;
    for (let i = lastIncluded; i < n; i++) {
      if (arr[i] < arr[index] && arr[i] > arr[lastIncluded - 1]) index = i;
    }

    // *STEP 4: Swap (lastInclued - 1) value with index value
    swap(arr, index, lastIncluded - 1);

    // * STEP 5: sort element from lastinclued to end
    const tempArr = arr.slice(lastIncluded);
    tempArr.sort((a, b) => a - b);

    arr.splice(lastIncluded, tempArr.length, ...tempArr);
    return arr;
  }
}

function reverse(arr, n) {
  let i = 0;
  let j = n - 1;

  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(nextPermutation([1, 2, 3, 6, 5, 4], 6));
console.log(nextPermutation([6, 5, 4, 3, 2, 1], 6));
