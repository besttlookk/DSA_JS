// !===============Merge Overlapping Intervals

// !=================links ==============
// * https://www.geeksforgeeks.org/merging-intervals/
// * https://practice.geeksforgeeks.org/problems/8a644e94faaa94968d8665ba9e0a80d1ae3e0a2d/1?page=1&category[]=Sorting&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !====================Method 1 (Naive)============
// * A simple approach is to start from the first interval and compare it with all other intervals for overlapping, if it overlaps with any other interval, then remove the other interval from the list and merge the other into the first interval.

// * TC: O(n*n)

// !==================Method 2 (Sorting) ============
// * The idea to solve this problem is, first sort the intervals according to the starting time. Once we have the sorted intervals, we can combine all intervals in a linear traversal.

// * The idea is, in sorted array of intervals, if interval[i] doesn’t overlap with interval[i-1], then interval[i+1] cannot overlap with interval[i-1] because starting time of interval[i+1] must be greater than or equal to interval[i].

// * Algorithm:

// * # Sort the intervals based on the increasing order of starting time.
// * # Push the first interval into a stack.
// * # For each interval do the following:
// * If the current interval does not overlap with the top of the stack then, push the current interval into the stack.
// * If the current interval overlap with the top of the stack then, update the stack top with the ending time of the current interval.
// * The end stack contains the merged intervals.
function overlappedInterval(Intervals) {
  const n = Intervals.length;
  Intervals.sort((a, b) => a[0] - b[0]);

  const st = [];
  st.push(Intervals[0]);

  for (let i = 1; i < n; i++) {
    const curr = Intervals[i];

    // * If overlapped
    if (st[st.length - 1][0] <= curr[0] <= st[st.length - 1][1]) {
      st[st.length - 1][1] = Math.max(curr[1], st[st.length - 1][1]);
    } else {
      // * If no overlap add the interval in the stack
      st.push(curr);
    }
  }

  return st;
}

console.log(
  overlappedInterval([
    [6, 8],
    [1, 9],
    [2, 4],
    [4, 7],
  ])
);
