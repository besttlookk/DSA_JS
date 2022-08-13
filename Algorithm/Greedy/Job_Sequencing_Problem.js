// !==================Job Sequencing Problem
/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Job {
  constructor(id, dead, profit) {
    this.id = id;
    this.dead = dead;
    this.profit = profit;
  }
}

// !==================Links ===============
// * https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1?page=2&category[]=Greedy&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/job-selection-problem-loss-minimization-strategy-set-2/
// * https://www.geeksforgeeks.org/job-sequencing-problem/

// !=======================Basic solution
// * A Simple Solution is to generate all subsets of a given set of jobs and check individual subsets for the feasibility of jobs in that subset. Keep track of maximum profit among all feasible subsets. The time complexity of this solution is exponential.

// !===================================Solution 2(Greedy)
// * This is a standard Greedy Algorithm problem.
// * 1) Sort all jobs in decreasing order of profit.
// * 2) Iterate on jobs in decreasing order of profit.For each job , do the following :
// *  a)Find a time slot i, such that slot is empty and i < deadline and i is greatest.Put the job in
// *    this slot and mark this slot filled.
// *  b)If no such i exists, then ignore the job.

// * The Time Complexity of the above solution is O(n2). It can be optimized using Priority Queue(max heap).
//Function to find the maximum profit and the number of jobs done.
function JobScheduling(arr, n) {
  // * sort the job in decreasing order on the basis og profit
  arr.sort((a, b) => b[2] - a[2]);

  let profit = 0;
  const jobs = [];
  const slot = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    for (let j = Math.min(n, arr[i][1] - 1); j >= 0; j--) {
      if (slot[j] === false) {
        profit += arr[i][2];
        jobs.push(arr[i][0]);
        slot[j] = true;
        break;
      }
    }
  }

  return [jobs.length, profit];
}

// !=====================Method 3: Priority Queue(max heap).====================
// * Sort the jobs based on their deadlines.
// * Iterate from the end and calculate the available slots between every two consecutive deadlines. Include the profit, deadline, and job ID of ith job in the max heap.
// * While the slots are available and there are jobs left in the max heap, include the job ID with maximum profit and deadline in the result.
// * Sort the result array based on their deadlines.

function JobScheduling(arr, n) {
  // * STEP 1:Sort the array on the basis of deadlind
  arr.sort((a, b) => a[1] - b[1]);

  const maxHeap = [];

  //* starting the iteration from the end
  for (let i = n - 1; i >= 0; i--) {
    let slot_available = 0;
    // * calculate slots between two deadlines
    if (i === 0) {
      slot_available = arr[i][1];
    } else {
      slot_available = arr[i][1] - arr[i - 1][1];
    }
  }

  console.log({ arr });
}
const arr = [
  ["a", 2, 100], // Job Array
  ["b", 1, 19],
  ["c", 2, 27],
  ["d", 1, 25],
  ["e", 1, 15],
];

console.log(JobScheduling(arr, 5));
