// !==================Swapping pairs make sum equal
// * Given two arrays of integers A[] and B[] of size N and M, the task is to check if a pair of values (one value from each array) exists such that swapping the elements of the pair will make the sum of two arrays equal.

// !======================Links ===================
// * https://practice.geeksforgeeks.org/problems/swapping-pairs-make-sum-equal4142/1?page=1&category[]=Hash&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions
// * https://www.geeksforgeeks.org/find-a-pair-swapping-which-makes-sum-of-two-arrays-same/
// !=========================Method 1(Naive) ======================
// *Time Complexity :- O(n*m)
// * Space Complexity : O(1)
/*
function findSwapValues(A, n, B, m) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < n; i++) {
    sumA += A[i];
  }

  for (let i = 0; i < m; i++) {
    sumB += B[i];
  }

  // * for each element of A check for each element in B
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (sumA - A[i] + B[j] === sumB - B[j] + A[i]) return true;
    }
  }

  return false;
}
*/

// !==============Method 2 -> Other Naive implementation ===============
// * We are looking for two values, a and b, such that:
// * sumA - a + b = sumB - b + a
// * 2a - 2b  = sumA - sumB
// *  a - b  = (sumA - sumB) / 2

// * Therefore, we’re looking for two values that have a specific target difference: (sumA – sumB) / 2.

// !==============Method 3 -> Sorting ===============
// *Sort the arrays.
// *Traverse both array simultaneously and do following for every pair.
// * If the difference is too small then, make it bigger by moving ‘a’ to a bigger value.
// * If it is too big then, make it smaller by moving b to a bigger value.
// * If it’s just right, return this pair.

// * Time Complexity :-
// * If arrays are sorted : O(n + m)
// * If arrays aren’t sorted : O(nlog(n) + mlog(m))

// * Space Complexity : O(1)

function findSwapValues(A, n, B, m) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < n; i++) {
    sumA += A[i];
  }

  for (let i = 0; i < m; i++) {
    sumB += B[i];
  }

  const target = (sumA - sumB) / 2;

  let i = 0; //* for A
  let j = 0; //* for B

  while (i < n && j < m) {
    if (A[i] - B[j] < target) i++;
    else if (A[i] - B[j] > target) j++;
    else return true;
  }

  return false;
}

// !==============Method 3 -> Hashing ===============
//  Run a loop for array2
//      for (int i equal to 0 to n-1)
//        if (hashset contains (array2[i]+diff))

// * We can solve this problem in O(m+n) time and O(m) auxiliary space
function findSwapValues(A, n, B, m) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < n; i++) {
    sumA += A[i];
  }

  for (let i = 0; i < m; i++) {
    sumB += B[i];
  }

  const target = (sumA - sumB) / 2;

  const set = new Set(A);

  for (let i = 0; i < m; i++) {
    if (set.has(B[i] + target)) return true;
  }

  return false;
}
let A = [5, 7, 4, 6];
let B = [1, 2, 3, 8];
console.log(findSwapValues(A, 4, B, 4));
