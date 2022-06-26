// !===========Minimum distance between two numbers =============

// !==============Links ==================
//* https://practice.geeksforgeeks.org/problems/minimum-distance-between-two-numbers/1/?page=2&category[]=Arrays&sortBy=submissions

// !==================Method 1(brute force) ================
//* Time Complexity: O(n^2), Nested loop is used to traverse the array.
//* Space Complexity: O(1), no extra space is required.

/*
function minDist(a, n, x, y) {
  let min = Infinity;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((a[i] === x && a[j] === y) || (a[i] === y && a[j] === x)) {
        min = Math.min(min, j - i);
      }
    }
  }

  if (min > n) {
    return -1;
  }
  return min;
}
*/

// !========================Method 2 ================================
//* Time Complexity: O(n).
//* Space Complexity: O(1).
function minDist(a, n, x, y) {
  let min = Infinity;
  let previous = -1;

  for (let i = 0; i < n; i++) {
    if (a[i] === x || a[i] === y) {
      // ! check if there is any prev value of "x" or "y". If it does check if it difference from the current value
      if (previous != -1 && a[i] !== a[previous])
        min = Math.min(min, i - previous);

      p = i;
    }
  }

  if (min > n) return -1;
  return min;
}

console.log(minDist([86, 39, 90, 67, 84, 66, 62], 7, 42, 12));
