// !+++++= Count total set bits in all numbers from 1 to n ++++++++

// ! Links ===========
// * https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1/?page=1&category[]=Bit%20Magic&sortBy=submissions
// * https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/

// !================ Method 1 (Simple) ==============
//* A simple solution is to run a loop from 1 to n and sum the count of set bits in all numbers from 1 to n.

// * Time Complexity: O(nLogn)
function countSetBitsUtil(n) {
  if (n === 0) return 0;
  else {
    return (n & 1) + countSetBitsUtil(n >> 1);
  }
}

function countSetBits(N) {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    count += countSetBitsUtil(i);
  }

  return count;
}

console.log(countSetBits(4));
