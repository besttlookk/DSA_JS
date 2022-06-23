// !===========Equilibrium Point
// * Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array.
// * Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

// * Note: Retun the index of Equilibrium point. (1-based index)

// !=============Links ====================
// * https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1/?page=1&category[]=Arrays&sortBy=submissions

// !===========Method 1(Brute force)=============

// * Time Complexity: O(n^2)
//* Auxiliary Space: O(1)
/*
function equilibriumPoint(a, n) {
  for (let i = 1; i < n - 1; i++) {
    let before = 0;
    let after = 0;

    for (let j = 0; j < i; j++) {
      before += a[j];
    }

    for (let j = i + 1; j < n; j++) {
      after += a[j];
    }
    console.log({ before });
    console.log({ after });
    if (before === after) return i + 1; // 1 based index
  }
  return -1;
}
*/

// !=============Method 2(Using prefix and suffix array): Preprocessing

// * Time Complexity: O(n)
//* Auxiliary Space : O(n)
/*
function equilibriumPoint(a, n) {
  let before = [];
  let after = [];

  let bSum = 0;
  let aSum = 0;

  for (let i = 0; i < n; i++) {
    before[i] = bSum;
    bSum += a[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    after[i] = aSum;
    aSum += a[i];
  }

  for (let i = 1; i < n - 1; i++) {
    if (before[i] === after[i]) return i + 1;
  }

  return -1;
}
*/

// !===================Method 3 (Using total sum ) ====================

// *  Time Complexity: O(n)
//* Auxiliary Space: O(1)
/*
function equilibriumPoint(a, n) {
  let sum = 0;
  let leftSum = 0;

  // * Find total sum of the array
  for (let i = 0; i < n; i++) sum += a[i];

  for (let i = 0; i < n; i++) {
    // * First substract the current index value from the sum(To get sum of all the right side)
    sum -= a[i];

    // * Now check if lsum is eqaul to new sum which repreesnt sum of all element on the right og that index
    if (leftSum === sum) return i + 1;

    leftSum += a[i];
  }

  return -1;
}

*/

// !==================Method 4( Using binary search) ==================
console.log(equilibriumPoint([1, 3, 5, 2, 2], 5));
