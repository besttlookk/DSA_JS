// !===================Smallest range in K lists
/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// !======================Links
// * https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1?page=1&category[]=Heap&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/find-smallest-range-containing-elements-from-k-lists/
// !=======================Solution 1==============
/*
function findSmallestRange(KSortedArray, n, k) {
  let minVal = Number.MAX_VALUE;
  let maxVal = Number.MIN_VALUE;
  let minRange = Number.MAX_VALUE;
  let flag = 0;
  let minind = -1;

  const ptr = new Array(k).fill(0);

  // * now we have range [min, max]
  // * we have to minimize the range either by increasing the min value or decrease the max value
  // * we can not decrease the max value. It is because number in the list is arranged in ascending order
  // * that way we will not be able to select atlest one item from all the list
  // * so we need to increase the min

  while (true) {
    // iterating over all the list
    for (let i = 0; i < k; i++) {
      //* if every element of list[i] is traversed then break the loop
      if (ptr[i] == n) {
        flag = 1;
        break;
      }

      //* find minimum value among all the list elements pointing by the ptr[] array
      if (ptr[i] < n && KSortedArray[i][ptr[i]] < minVal) {
        minind = i; // update the index of the list
        minVal = KSortedArray[i][ptr[i]];
      }

      //* find maximum value among all the list elements pointing by the ptr[] array
      if (ptr[i] < n && KSortedArray[i][ptr[i]] > maxVal) {
        maxVal = KSortedArray[i][ptr[i]];
      }
    }

    //* if any list exhaust we will not get any better answer, so break the while loop
    if (flag == 1) {
      break;
    }

    ptr[minind]++;

    //* updating the minrange
    if (maxVal - minVal < minRange) {
      let minel = minVal;
      let maxel = maxVal;
      minRange = maxel - minel;
    }
  }

  return minRange;
}
*/
// !=============================Method 2(Using Min Heap)
// * The approach remains the same but the time complexity can be reduced by using min-heap or priority queue.
// * Min heap can be used to find the maximum and minimum value in logarithmic time or log k time instead of linear time. Rest of the approach remains the same.

// * Algorithm:
// * create a Min heap to store k elements, one from each array and a variable minrange initialized to a maximum value and also keep a variable max to store the maximum integer.
// * Initially put the first element of each element from each list and store the maximum value in max.
// * Repeat the following steps until at least one list exhausts :
// * To find the minimum value or min, use the top or root of the Min heap which is the minimum element.
// * Now update the minrange if current (max-min) is less than minrange.
// * remove the top or root element from priority queue and insert the next element from the list which contains the min element and update the max with the new element inserted.

// * Complexity Analysis:
//* Time complexity : O(n * k *log k).
// To find the maximum and minimum in a Min Heap of length k the time required is O(log k), and to traverse all the k arrays of length n (in the worst case), the time complexity is O(n*k), then the total time complexity is O(n * k *log k).
//* Space complexity: O(k).
// The priority queue will store k elements so the space complexity of O(k)

class MinHeap {
  constructor(n) {
    this.size = 0;
    this.harr = new Array();
    this.cap = n;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  extractMin() {
    if (this.size === 0) {
      return -1;
    } else if (this.size === 1) {
      this.size--;
      return this.harr.pop();
    } else {
      // * STEP 1: Save the min value
      const min = this.harr[0];

      // * STEP 2: Copy last to root
      this.harr[0] = this.harr[this.size - 1];

      // * STEP 3: Remove the last element and decreace the heap size
      this.harr.pop();
      this.size--;

      // * STEP 4: Heapify
      this.MinHeapify(0);

      return min;
    }
  }

  insert(data) {
    if (this.size === this.cap) return "Heap Overflow";
    this.harr.push(data);
    this.size++;

    if (this.size === 1) return;

    let curr = this.size - 1;
    while (
      curr > 0 &&
      this.harr[curr].value < this.harr[this.parent(curr)].value
    ) {
      // * Swap
      const temp = this.harr[curr];
      this.harr[curr] = this.harr[this.parent(curr)];
      this.harr[this.parent(curr)] = temp;

      curr = this.parent(curr);
    }
  }

  MinHeapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (l < this.size && this.harr[l].value < this.harr[i].value) smallest = l;
    if (r < this.size && this.harr[r].value < this.harr[smallest].value)
      smallest = r;
    if (smallest != i) {
      // * SWAP
      let temp = this.harr[i];
      this.harr[i] = this.harr[smallest];
      this.harr[smallest] = temp;
      // * Recursive call
      this.MinHeapify(smallest);
    }
  }
}

class Node {
  constructor(value, arrIndex, valIndex) {
    this.value = value;
    this.arrIndex = arrIndex;
    this.valIndex = valIndex;
  }
}
function findSmallestRange(KSortedArray, n, k) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let start = -1,
    end = -1;

  //* Create a min heap with k heap nodes.
  //* Every heap node has first element of an list
  let h = new MinHeap(k);

  for (let i = 0; i < k; i++) {
    const node = new Node(KSortedArray[i][0], i, 0);
    h.insert(node);

    max = Math.max(max, node.value);
    min = Math.min(min, node.value);
  }

  start = min;
  end = max;

  // Now one by one get the minimum element
  // from min heap and replace it with
  // next element of its list
  while (h.size) {
    const root = h.extractMin();
    min = root.value;
    const arrIndex = root.arrIndex;
    const valIndex = root.valIndex;

    if (max - min < end - start) {
      start = min;
      end = max;
    }

    // * check if there is element next to this element
    if (valIndex + 1 < n) {
      max = Math.max(max, KSortedArray[arrIndex][valIndex + 1]);
      const node = new Node(
        KSortedArray[arrIndex][valIndex + 1],
        arrIndex,
        valIndex + 1
      );
      h.insert(node);
    } else {
      break;
    }
  }

  return [start, end];
}

const arr = [
  [1, 3, 5, 7, 9],
  [0, 2, 4, 6, 8],
  [2, 3, 5, 7, 11],
];

console.log(findSmallestRange(arr, 5, 3));
