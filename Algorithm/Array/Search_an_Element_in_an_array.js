// !================Search an Element in an array
// *  returns the index of first occurrence of X in the given array

// !============Links
// * https://practice.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1/?page=1&curated[]=8&sortBy=submissions

// !================Method 1

function search(arr, N, X) {
  // write your code here
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) return i;
  }

  return -1;
}
