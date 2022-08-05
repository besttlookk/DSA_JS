// !=======================Huffman Coding

// !======================links
// * https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/
// * https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1?page=1&category[]=Heap&curated[]=7&sortBy=submissions

// !=====================Solution=============
class Node {
  constructor(val, freq) {
    this.val = val;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

class MinHeap {
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
      this.arr[curr].freq < this.arr[this.getParent(curr)].freq
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

    if (l < this.size && this.arr[minIndex].freq > this.arr[l].freq)
      minIndex = l;
    if (r < this.size && this.arr[minIndex].freq > this.arr[r].freq)
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

// * 1. Create a leaf node for each unique character and build a min heap of all leaf nodes (Min Heap is used as a priority queue. The value of frequency field is used to compare two nodes in min heap. Initially, the least frequent character is at root)
// * 2. Extract two nodes with the minimum frequency from the min heap.
// * 3. Create a new internal node with a frequency equal to the sum of the two nodes frequencies. Make the first extracted node as its left child and the other extracted node as its right child. Add this node to the min heap.
// * 4. Repeat steps#2 and #3 until the heap contains only one node. The remaining node is the root node and the tree is complete.

function huffmanCodes(s, f, n) {
  const heap = new MinHeap();

  for (let i = 0; i < n; i++) {
    const node = new Node(s[i], f[i]);
    heap.insert(node);
  }

  while (heap.size > 1) {
    const curr1 = heap.extract();
    const curr2 = heap.extract();

    const newNode = new Node("-", curr1.freq + curr2.freq);

    //* first extracted node as left child.
    newNode.left = curr1;

    //* second extracted node as the right child.
    newNode.right = curr2;

    heap.insert(newNode);
  }

  const result = [];

  printCode(heap.peek(), "", result);

  return result;
}

// * Preorder traversal
function printCode(root, str, arr) {
  if (root === null) return;

  if (root.val !== "-") {
    arr.push(str);
    return;
  }

  printCode(root.left, str + "0", arr);
  printCode(root.right, str + "1", arr);
}

// const S = "abcdef";
// const freq = [5, 9, 12, 13, 16, 45];

const S = "qwertyuiopasdfghjklzxcvbn";
const freq = [
  8, 9, 14, 19, 20, 21, 21, 25, 33, 45, 50, 50, 66, 68, 70, 73, 74, 75, 76, 82,
  85, 90, 94, 97, 100,
];

console.log(huffmanCodes(S, freq, 25));

// !---Difference is happending bcoz for eqaul freq order of char is important
// * 0000 0001 00100 001010 001011 0011 0100 0101 0110 0111 1000 100100 100101 10011 1010 1011 1100 1101 11100 11101 111100 1111010 11110110 11110111 11111
// * 0000 0001 00100 001010 001011 0011 0100 0101 0110 0111 1000 100100 100101 10011 1010 1011 1100 11010 11011 1110 111100 1111010 11110110 11110111 11111
