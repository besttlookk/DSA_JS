// !======Chocolate Distribution Problem

// !===========Links
// * https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1
// * https://www.geeksforgeeks.org/chocolate-distribution-problem/

// !================Method 1(Brute force) ================
// * A simple solution is to generate all subsets of size m of arr[0..n-1].
// * For every subset, find the difference between the maximum and minimum elements in it. Finally, return the minimum difference.

// !=============Method 2 ======================
// * An efficient solution is based on the observation that to minimize the difference, we must choose consecutive elements from a sorted packet.
// * We first sort the array arr[0..n-1], then find the subarray of size m with the minimum difference between the last and first elements.

function findMinDiff(arr, n, m) {
  //* If there are no chocolates or
  //* number of students is 0
  if (m == 0 || n == 0) return 0;

  arr.sort((a, b) => a - b);

  //* Number of students cannot be
  //* more than number of packets
  if (n < m) return -1;

  let min = Infinity;

  let i = 0;
  let j = m - 1;
  while (j < n) {
    let currentDiff = arr[j] - arr[i];
    min = Math.min(min, currentDiff);
    i++;
    j++;
  }

  return min;
}

console.log(findMinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5));
