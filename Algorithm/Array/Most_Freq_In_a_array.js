// !=====================Most freq in a array===========

// !====================Brute force
// * for each element count the freq and stroethe max

// * TC: O(n^2)
// * SC: O(1)
/*
function findMostFreq(arr, n) {
  let maxFreq = Number.MIN_VALUE;
  let maxNum = null;

  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxFreq) {
      maxFreq = count;
      maxNum = arr[i];
    }
  }

  return maxNum;
}
*/

// !=============================Using sort =============
function findMostFreq(arr, n) {
  arr.sort((a, b) => a - b);

  let maxFreq = 0;
  let freq = 0;
  let maxNum = arr[0];
  let num = arr[0];
  for (let i = 0; i < n; i++) {
    if (num === arr[i]) {
      freq++;
    } else {
      num = arr[i];
      freq = 1;
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      maxNum = num;
    }
  }
  return maxNum;
}
console.log(findMostFreq([2, 3, 4, 1, 2, 2, 3, 2, 2], 9));

// *

function heapify(arr, i) {
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  let largest = i;
  if (l < arr.length && arr[largest] < arr[l]) largest = l;
  if (r < arr.length && arr[largest] < arr[r]) largest = r;

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    // * Recursive call
    heapify(arr, n, largest);
  }
}

function heapSort(arr, n) {
  // * BuildHeap
  for (i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, i);
  }

  for (let i = n - 1; i >= o; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i);
  }
}
