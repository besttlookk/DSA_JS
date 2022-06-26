// !================ Maximum Index ============
// ! =============Links ================
// * https://practice.geeksforgeeks.org/problems/maximum-index-1587115620/1/?page=2&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/

// !================= Method 1 (Brute force) ===============
// * Run two loops. In the outer loop, pick elements one by one from the left.
// *  In the inner loop, compare the picked element with the elements starting from the right side.
// * Stop the inner loop when you see an element greater than the picked element and keep updating the maximum j-i so far.

// * Time Complexity: O(n2)
//*  Auxiliary Space: O(1)
/*
function maxIndexDiff(A, N) {
  let indexDiff = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (A[j] > A[i] && j - i > indexDiff) {
        indexDiff = j - i;
      }
    }
  }

  return indexDiff;
}
*/

// !================Method 2 ====================
// * Improvising the Brute Force Algorithm and looking for BUD, i.e Bottlenecks, unnecessary and duplicated works.
// *  A quick observation actually shows that we have been looking to find the first greatest element traversing from the end of the array to the current index.
// * We can see that we are trying to find the first greatest element again and again for each element in the array. Let’s say we have an array with us for example [1, 5, 12, 4, 9] now we know that 9 is the element that is greater than 1, 5, and 4 but why do we need to find that again and again. We can actually keep a track of the maximum number moving from the end to the start of the array.

// * Time complexity: O(n), As i and j pointers are traversing at most n elements, time complexity  = O(n) + O(n) = O(n)
// *  Auxiliary Space: O(n)
function maxIndexDiff(A, N) {
  let maxFromEnd = [];
  maxFromEnd[N - 1] = A[N - 1];
  let maxDiff = -1;

  for (let i = N - 2; i >= 0; i--) {
    maxFromEnd[i] = Math.max(maxFromEnd[i + 1], A[i]);
  }

  let i = 0; //* to keep track of A
  let j = 0; //* To keep track of maxDiff

  while (i < N && j < N) {
    if (maxFromEnd[j] >= A[i]) {
      maxDiff = Math.max(maxDiff, j - i);
      j++;
    } else {
      i++;
    }
  }
  return maxDiff;
}
console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1], 9));
