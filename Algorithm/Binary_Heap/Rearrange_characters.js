// !================== Rearrange character

// !====================links
// * https://practice.geeksforgeeks.org/problems/rearrange-characters4649/1?page=1&category[]=Heap&curated[]=7&sortBy=submissions

// !======================Solution 1(Using Heap) =================

class Node {
  constructor(val, freq) {
    this.val = val;
    this.freq = freq;
  }
}

class MaxHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  insert(x) {
    this.arr.push(x);
    this.size++;

    let curr = this.arr.length - 1;
    // * Percolate Up
    while (
      curr > 0 &&
      this.arr[curr].freq > this.arr[this.getParent(curr)].freq
    ) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[this.getParent(curr)];
      this.arr[this.getParent(curr)] = temp;

      curr = this.getParent(curr);
    }
  }

  extract() {
    if (this.size === 0) return -1;
    else if (this.size === 1) {
      this.size--;
      return this.arr.pop();
    } else {
      const max = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.size--;

      this.heapify(0);

      return max;
    }
  }

  heapify(i) {
    const l = this.getLeftIndex(i);
    const r = this.getRightIndex(i);
    let minIndex = i;

    if (l < this.size && this.arr[minIndex].freq < this.arr[l].freq)
      minIndex = l;
    if (r < this.size && this.arr[minIndex].freq < this.arr[r].freq)
      minIndex = r;

    if (minIndex !== i) {
      const temp = this.arr[minIndex];
      this.arr[minIndex] = this.arr[i];
      this.arr[i] = temp;

      this.heapify(minIndex);
    }
  }

  peek() {
    return this.arr[0];
  }
}

function rearrangeString(str) {
  // * Use map to store frequency of all the char
  const map = new Map();
  const heap = new MaxHeap();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      const old = map.get(str[i]);
      map.set(str[i], old + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  // * Push all the element into heap according to its frequency
  for (let [ch, freq] of map) {
    const node = new Node(ch, freq);
    heap.insert(node);
  }

  while (heap.size > 1) {
    const curr1 = heap.extract();
    const curr2 = heap.extract();

    result += curr1.val;
    result += curr2.val;

    curr1.freq -= 1;
    curr2.freq -= 1;

    if (curr1.freq > 0) heap.insert(curr1);
    if (curr2.freq > 0) heap.insert(curr2);
  }

  // * When there is only one element remaining

  if (heap.size === 1) {
    const curr = heap.extract();

    if (curr.freq > 1) return -1;
    else result += curr.val;
  }

  return result;
}
