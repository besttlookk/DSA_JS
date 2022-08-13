// !=============== Minimum Platforms ===================
// * #GreedyMethod

// !================Links =====================
// * https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1/?page=2&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/

// !====================== Method(Brute force) =======================

// * The idea is to take every interval one by one and find the number of intervals that overlap with it.
// * Keep track of the maximum number of intervals that overlap with an interval. Finally, return the maximum value.

// * Time Complexity: O(n2), Two nested loops traverse the array.
//*  Auxiliary space: O(1), As no extra space is required.
/*
function findPlatform(arr, dep, n) {
  let max = 0;
  let platformNeed = 1;

  for (let i = 0; i < n; i++) {
    platformNeed = 1;

    for (let j = i + 1; j < n; j++) {
      if (Math.max(arr[i], arr[j] <= Math.min(dep[i], dep[j]))) platformNeed++;
    }

    max = Math.max(max, platformNeed);
  }

  return max;
}

*/

// !===================Method 2(Efficient approach):Sort + Twp pointer approach  ============
// * The idea is to consider all events in sorted order. Once the events are in sorted order, trace the number of trains at any time keeping track of trains that have arrived, but not departed.

// * Time Complexity: O(N * log N), One traversal O(n) of both the array is needed after sorting O(N * log N).
//*  Auxiliary space: O(1), As no extra space is required.

function findPlatform(arr, dep, n) {
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let max = 1;
  let platform = 1;
  let i = 1;
  let j = 0;

  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      platform++;
      i++;
    } else if (arr[i] > dep[j]) {
      platform--;
      j++;
    }

    max = Math.max(max, platform);
  }
  return max;
}

console.log(
  findPlatform(
    [900, 940, 950, 1100, 1500, 1800],
    [910, 1200, 1120, 1130, 1900, 2000],
    6
  )
);
