// !===============Game with String

// !==================Links
// * https://practice.geeksforgeeks.org/problems/game-with-string4100/1?page=1&category[]=Heap&curated[]=7&sortBy=submissions

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

function minValue(s, k) {
  const heap = new MaxHeap();
  const map = new Map();
  let result = 0;
  // * Store the freq of each letter

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const oldVal = map.get(s[i]);
      map.set(s[i], oldVal + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let [val, freq] of map) {
    const node = new Node(val, freq);
    heap.insert(node);
  }

  let count = 0;

  // * element which has hightest freq. dec by one
  while (count < k) {
    const temp = heap.extract();
    temp.freq = temp.freq - 1;
    heap.insert(temp);
    count++;
  }

  while (heap.size) {
    const temp = heap.extract();

    result += temp.freq * temp.freq;
  }

  return result;
}

console.log(minValue("aabcbcbcabcc", 3));
