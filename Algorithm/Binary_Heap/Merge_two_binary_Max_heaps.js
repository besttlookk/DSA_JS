// !=========Merge two binary Max heaps

// !===============Links
// * https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1?page=1&category[]=Heap&curated[]=7&sortBy=submissions

// !=========================Solution =====================

function getParent(i) {
  return Math.floor((i - 1) / 2);
}

function insert(arr, x) {
  arr.push(x);

  if (arr.lrngth === 1) return;
  let curr = this.size - 1;

  // * Percolate Up
  while (curr > 0 && arr[curr] > arr[getParent(curr)]) {
    const temp = arr[curr];
    arr[curr] = arr[getParent(curr)];
    arr[getParent(curr)] = temp;
    curr = getParent(curr);
  }
}

function extract(arr) {
  if (arr.length === 0) return -1;
  else if (arr.length === 1) {
    return arr.pop();
  } else {
    const max = arr[0];
    arr[0] = arr.pop();
    heapify(arr, 0);

    return max;
  }
}

function heapify(arr, i) {
  const l = 2 * i + 1;
  const r = 2 * i + 2;
  let maxIndex = i;

  if (l < arr.length && arr[maxIndex] < arr[l]) maxIndex = l;
  if (r < arr.length && arr[maxIndex] < arr[r]) maxIndex = r;

  if (maxIndex !== i) {
    const temp = arr[maxIndex];
    arr[maxIndex] = arr[i];
    arr[i] = temp;

    heapify(arr, maxIndex);
  }
}
function mergeHeaps(a, b, n, m) {
  while (b.length) {
    const temp = extract(b);
    a.insert(temp);
  }

  return a;
}
