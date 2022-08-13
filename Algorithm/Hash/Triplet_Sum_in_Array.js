// ! Triplet Sum in Array
// * Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.

// ! Links
// * https://practice.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1/?page=2&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/

// !===============Method 1 (Brute force) =====================
// * Time Complexity: O(n3).
/*
function find3Numbers(A, n, X) {
  for (let i = 0; i < n - 2; i++) {
    let sum = A[i];

    for (let j = i + 1; j < n - 1; j++) {
      sum += A[j];

      for (let k = j + 1; k < n; k++) {
        if (sum + A[k] === X) return true;
      }
    }
  }

  return false;
}
*/

// ! ==============Method 2(This method uses sorting to increase the efficiency of the code.)( two-pointer technique. )===========================
// * Traverse the array and fix the first element of the triple
// * Now use the Two Pointers algorithm to find if there is a pair whose sum is equal to x – array[i]
// * Two pointers algorithm take linear time so it is better than a nested loop.

// * Use two pointer method for each element from the start

// * Time complexity: O(N^2).
// * Space Complexity: O(1).
/*
function find3Numbers(A, n, X) {
  A.sort((a, b) => a - b);
  let left;
  let right;

  //*  Now fix the first element one by one and find the other two elements 
   for (let i = 0; i < n - 2; i++) {
    //* To find the other two elements, start two index
    //* variables from two corners of the array and move
    //*   them toward each other
    left = i + 1;
    right = n - 1;

    while (left < right) {
      if (A[i] + A[left] + A[right] === X) return true;
      else if (A[i] + A[left] + A[right] < X) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

*/

//!======================Method 3: This is a Hashing-based solution.  =================
// * This approach uses extra space but is simpler than the two-pointers approach.
// * Run two loops outer loop from start to end and inner loop from i+1 to end.
// * Create a hashmap or set to store the elements in between i+1 to j-1. So if the given sum is x, check if there is a number in the set which is equal to x – arr[i] – arr[j]. If yes print the triplet.

function find3Numbers(A, n, X) {
  //* Fix the first element as A[i]
  for (let i = 0; i < n - 2; i++) {
    //* Find pair in subarray A[i+1..n-1]
    //*  with sum equal to sum - A[i]

    let s = new Set();
    let curr_sum = X - A[i];
    for (let j = i + 1; j < n; j++) {
      if (s.has(curr_sum - A[j])) return true;
      s.add(A[j]);
    }
  }

  return false;
}
console.log(find3Numbers([1, 2, 4, 3, 6], 5, 10));
