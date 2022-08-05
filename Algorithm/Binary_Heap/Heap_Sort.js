// !================Heap Sort
// * Soarting using heap is Heap sort.
// * Algo used for heap sort: extraxMin / extractMax[Heapify Algo]

// !====================Links
// * https://practice.geeksforgeeks.org/problems/heap-sort/1?page=1&category[]=Heap&sortBy=submissions
// !===============+Solution(Max heap)

function left(i) {
  return 2 * i + 1;
}
function right(i) {
  return 2 * i + 2;
}

//Heapify function to maintain heap property.
function heapify(arr, n, i) {
  let l = left(i);
  let r = right(i);
  let largest = i;
  if (l < n && arr[l] > arr[i]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest != i) {
    // * SWAP
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    // * Recursive call
    heapify(arr, n, largest);
  }
}

//Function to build a Heap from array.
function buildHeap(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

//Function to sort an array using Heap Sort.
// * Idea is based on selection Sort.
// * Find out the maximum element and swap with last element
// * TC: Log(n)
function heapSort(arr, n) {
  //* STEP 1:  Convert arr into MAX HEAP
  buildHeap(arr, n);

  // * STEP 2:
  for (let i = n - 1; i > 0; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i, 0); //* MOST IMP: Size of array will keep on decreasing
  }

  return arr;
}

console.log(heapSort([4, 1, 3, 9, 7], 5));
