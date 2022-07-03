// !======================== Links ====================
// * https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1/?page=1&category[]=Arrays&sortBy=submissions

//  * The idea is to begin from last element of ar2[] and search it in ar1[]. If there is a greater element in ar1[], then we move last element of ar1[] to ar2[]. To keep ar1[] and ar2[] sorted, we need to place last element of ar2[] at correct place in ar1[]. We can use Insertion Sort type of insertion for this.

// !==================== Method 1 ==================
function merge(arr1, arr2, N, M) {
  for (let i = M - 1; i >= 0; i--) {
    let j,
      last = arr1[N - 1];

    for (j = N - 2; j >= 0 && arr1[j] > arr2[i]; j--) {
      arr1[j + 1] = arr2[j];
    }
  }
}
