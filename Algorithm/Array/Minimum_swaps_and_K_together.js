// !====== Minimum swaps required to bring all elements less than or equal to k together ============
// * Expected Time Complexity: O(N).
// * Expected Auxiliary Space: O(1).

// !===============Links ===========
// * https://www.geeksforgeeks.org/minimum-swaps-required-bring-elements-less-equal-k-together/
// * https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1

// !============Method 1(sliding window)
// * A simple solution is to first count all elements less than or equal to k(say ‘good’).
// *Now traverse for every sub-array and swap those elements whose value is greater than k. The time complexity of this approach is O(n2)

// * An efficient approach is to use the two-pointer technique and a sliding window. The time complexity of this approach is O(n)

function minSwap(arr, n, k) {
  //* Find count of elements which are
  //* less than equals to k
  let count = 0;
  for (let i = 0; i < n; i++) if (arr[i] <= k) count++;

  // * Find unwanted elements in current window of size 'count'
  let bad = 0;
  for (let i = 0; i < count; i++) if (arr[i] > k) bad++;

  //* Initialize answer with 'bad' value of current window

  let ans = bad;
  // * sliding window ahead

  // ! "i" is a leaving element and "j" is the element which we are adding
  for (let i = 0, j = count; j < n; i++, j++) {
    //* Decrement count of previous window
    if (arr[i] > k) bad--; //* kya pehle i wale per bad tha...ager tha to usko exclude karo..kyuki hum window aage slide ker rahe

    //* Increment count of current window
    if (arr[j] > k) bad++; //* ager add hone wala number bas hai to increment karo

    //* Update ans if count of 'bad'
    // is less in current window
    ans = Math.min(ans, bad);
  }
  return ans;
}

console.log(minSwap([2, 7, 9, 5, 8, 7, 4], 7, 6));
