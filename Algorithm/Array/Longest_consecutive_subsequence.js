// !======================= Longest consecutive subsequence ==========================

// ! ==========Links ================
// * https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1/?page=3&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/longest-consecutive-subsequence/

// !========================Method 1( Naive Approach: ) ==========================

// * The idea is to first sort the array and find the longest subarray with consecutive elements.
// * After sorting the array and removing the multiple occurrences of elements, run a loop and keep a count and max (both initially zero).
// * Run a loop from start to end and if the current element is not equal to the previous (element+1) then set the count to 1 else increase the count.
// * Update max with a maximum of count and max.

// * Time complexity: O(nLogn).
// * Auxiliary space : O(1).
/*
function findLongestConseqSubseq(arr, N) {
  let newArr = Array.from(new Set(arr)); //* removing duplicate items
  newArr.sort((a, b) => a - b);

  let max = 0;
  let count = 1;

  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] === newArr[i - 1] + 1) {
      count++;
      max = Math.max(max, count);
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  return max;
}
*/

// !======================Method 2 (Efficient solution: )=================
// * This problem can be solved in O(n) time using an Efficient Solution.
// * The idea is to use Hashing. We first insert all elements in a Set. Then check all the possible starts of consecutive subsequences.

// *  Algorithm:

//* 1.  Create an empty hash.
//* 2.  Insert all array elements to hash.
//* 3.  Do following for every element arr[i]
//* 4.  Check if this element is the starting point of a subsequence. To check this, simply look for arr[i] – 1 in the hash, if not found, then this is the first element a subsequence.
//* 5.  If this element is the first element, then count the number of elements in the consecutive starting with this element. Iterate from arr[i] + 1 till the last element that can be found.
//* 6.  If the count is more than the previous longest subsequence found, then update this.

// * Time complexity: O(n).
// *Auxiliary space: O(n).
function findLongestConseqSubseq(arr, N) {
  const set = new Set(arr);
  let max = 0;

  //* check each possible sequence from
  //* the start then update optimal length
  for (let i = 0; i < N; i++) {
    //* if current element is the starting
    //* element of a sequence
    if (!set.has(arr[i] - 1)) {
      //* Then check for next elements in the sequence
      let j = arr[i];
      while (set.has(j)) j++;
      //* update optimal length if this length is more
      max = Math.max(max, j - arr[i]);
    }
  }

  return max;
}

// !============Method 3(Priority quiue) ===============
console.log(findLongestConseqSubseq([1, 2, 2, 3], 4));
