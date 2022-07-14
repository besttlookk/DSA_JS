// !===================== Minimum number of jumps to reach end =================
//* #Greedy

// ! ======================== Links ====================
// * https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/
// * https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1/?page=1&curated[]=2&sortBy=submissions

// !==========Method 1 (Naive Recursive Approach. )
//* A naive approach is to start from the first element and recursively call for all the elements reachable from first element. The minimum number of jumps to reach end from first can be calculated using minimum number of jumps needed to reach end from the elements reachable from first.

// * Time complexity: O(n^n).
// * Auxiliary Space: O(1).
/*
function minJumps(arr, n) {
  // Base case: when source and
  // destination are same
  if (n == 1) return 0;

  //* Traverse through all the points
  //* reachable from arr[l]
  //* Recursively, get the minimum number
  //* of jumps needed to reach arr[h] from
  //* these reachable points
  let res = Number.MAX_VALUE;
  for (let i = n - 2; i >= 0; i--) {
    if (i + arr[i] >= n - 1) {
      let sub_res = minJumps(arr, i + 1);
      if (sub_res != Number.MAX_VALUE) res = Math.min(res, sub_res + 1);
    }
  }

  return res;
}
*/
// * Note: If the execution is traced for this method, it can be seen that there will be overlapping subproblems. For example, minJumps(3, 9) will be called two times as arr[3] is reachable from arr[1] and arr[2]. So this problem has both properties (optimal substructure and overlapping subproblems) of Dynamic Programming.

// !============ Method 2: Dynamic Programming=====================

//* Approach:

//* 1. In this way, make a jumps[] array from left to right such that jumps[i] indicate the minimum number of jumps needed to reach arr[i] from arr[0].
//* 2. To fill the jumps array run a nested loop inner loop counter is j and outer loop count is i.
//* 3. Outer loop from 1 to n-1 and inner loop from 0 to i.
// * 4. if i is less than j + arr[j] then set jumps[i] to minimum of jumps[i] and jumps[j] + 1. initially set jump[i] to INT MAX
// * 5. Finally, return jumps[n-1].

// * Time Complexity: O(n^2)
// * Auxiliary Space: O(n)

/*
function minJumps(arr, n) {
  let jumps = Array(n).fill(0);

  // if first element is 0,
  if (n === 0 || arr[0] === 0) return 0;

  jumps[0] = 0;

  //* Find the minimum number of jumps to reach arr[i]
  //* from arr[0], and assign this value to jumps[i]
  for (let i = 1; i < n; i++) {
    jumps[i] = Number.MAX_VALUE;
    for (let j = 0; j < i; j++) {
      if (j + arr[j] >= i && jumps[j] !== Number.MAX_VALUE) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }

  return jumps[n - 1];
}
*/

// !===============Method 3: Dynamic Programming.  =================
// * In this method, we build jumps[] array from right to left such that jumps[i] indicates the minimum number of jumps needed to reach arr[n-1] from arr[i]. Finally, we return jumps[0].

//* Time complexity:O(n^2).
//* Auxiliary Space:O(n).

/*
function minJumps(arr, n) {
  let jumps = Array(n).fill(0);
  let min;

  // Minimum number of jumps
  // needed to reach last
  // element from last elements
  // itself is always 0
  jumps[n - 1] = 0;

  //* Start from the second
  //* element, move from right
  //* to left and construct the
  //* jumps array where jumps[i]
  //* represents minimum number of
  //* jumps needed to reach arr[m-1]
  //* from arr[i]

  for (i = n - 2; i >= 0; i--) {
    // If arr[i] is 0 then arr[n-1]
    // can't be reached from here
    if (arr[i] == 0) jumps[i] = Number.MAX_VALUE;
    // If we can directly reach to
    // the end point from here then
    // jumps[i] is 1
    else if (arr[i] >= n - i - 1) jumps[i] = 1;
    // Otherwise, to find out
    // the minimum number of
    // jumps needed to reach
    // arr[n-1], check all the
    // points reachable from
    // here and jumps value
    // for those points
    else {
      // initialize min value
      min = Number.MAX_VALUE;

      // following loop checks
      // with all reachable points
      // and takes the minimum
      for (j = i + 1; j < n && j <= arr[i] + i; j++) {
        if (min > jumps[j]) min = jumps[j];
      }

      // Handle overflow
      if (min != Number.MAX_VALUE) jumps[i] = min + 1;
      else jumps[i] = min; // or Number.MAX_VALUE
    }
  }

  return jumps[0];
}

*/

// ! ========================Method 4 ====================
//* maxReach: The variable maxReach stores at all time the maximal reachable index in the array.
//* jump: jump stores the amount of jumps necessary to reach the maximal reachable position. It also indicates the current jump we are making in the array.
//* step: The variable step stores the number of steps we can still take in the current jump ‘jump’ (and is initialized with value at index 0, i.e. initial number of steps)

//* Time complexity: O(n).
//* Auxiliary Space: O(1).
function minJumps(arr, n) {
  if (n <= 1) return 0;

  // Return -1 if not possible to jump
  if (arr[0] == 0) return -1;

  let maxReach = arr[0];

  //* stores the number of steps we can still take

  let step = arr[0];
  let jump = 1;

  for (let i = 1; i < n; i++) {
    //* Check if we have reached the end of the array
    if (i == n - 1) return jump;

    maxReach = Math.max(maxReach, i + arr[i]);

    //* we use a step to get to the current index
    step--;

    //* If no further steps left
    if (step === 0) {
      jump++;

      //* Check if the current index/position or lesser index
      //* is the maximum reach point from the previous indexes

      if (i >= maxReach) return -1;

      step = maxReach - i;
    }
  }

  return -1;
}
console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11));
