// !=================Fractional Knapsack ============
class Item {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}
/**
 * @param {number} W
 * @param {Item[]} arr
 * @param {number} n
 * @returns {number}
 */

// * An efficient solution is to use the Greedy approach.
// * The basic idea of the greedy approach is to calculate the ratio value/weight for each item and sort the item on basis of this ratio.
// * Then take the item with the highest ratio and add them until we can’t add the next item as a whole and at the end add the next item as much as we can. Which will always be the optimal solution to this problem.

//*  Time Complexity: O(nlogn)
//*  Auxiliary Space: O(1)

// !=================Links ===============
// * https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1/?page=1&category[]=Greedy&sortBy=submissions
// * https://www.geeksforgeeks.org/fractional-knapsack-problem/

// !===================Method 1 ===================

function fractionalKnapsack(W, arr, n) {
  let sum = 0;
  const totalWeight = findWeight(arr);
  if (W >= totalWeight) return findSum(arr);

  arr.forEach((item) => (item.rate = item.value / item.weight));

  arr.sort((a, b) => b.rate - a.rate);

  for (let i = 0; i < n; i++) {
    const item = arr[i];
    if (W - item.weight >= 0) {
      sum += item.value;
      W -= item.weight;
    } else {
      sum += (W / item.weight) * item.value;
      break;
    }
  }

  return sum;
}

function findSum(arr) {
  return arr.reduce((acc, item) => {
    return acc + item.value;
  }, 0);
}

function findWeight(arr) {
  return arr.reduce((acc, item) => {
    return acc + item.weight;
  }, 0);
}

// !======================Method 2===================

const i1 = new Item(60, 10);
const i2 = new Item(100, 20);
const i3 = new Item(120, 30);

console.log(fractionalKnapsack(50, [i1, i2, i3], 3));
