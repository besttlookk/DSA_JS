// !=============Find triplets with zero sum

// !==============Links
// * https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1/?page=1&category[]=Arrays&sortBy=submissions

// ! ======================Method 1(Brute force) =====================
// * This is a simple method that takes O(n3) time to arrive at the result.
// * TC: O(n^ 3)

// !================Method 2 (Hashing) =========================

// * This involves traversing through the array.
// * For every element arr[i], find a pair with sum “-arr[i]”. This problem reduces to pair sum and can be solved in O(n) time using hashing.

//* Time Complexity: O(n2).
//* Auxiliary Space: O(n).
/*
function findTriplets(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    // ! for every value of i ccreate a new set
    const set = new Set();
    for (let j = i + 1; j < n; j++) {
      const x = -(arr[i] + arr[j]);

      if (set.has(x)) return true;
      else set.add(arr[j]);
    }
  }

  return false;
}
*/

//! =================Method 3(Sorting + two-pointer tech) ============================

//* Time Complexity : O(n2).
//* Auxiliary Space : O(1), no extra space is required, so the time complexity is constant.

function findTriplets(arr, n) {
  arr.sort((a, b) => a - b);
  let leftPointer;
  let rightPointer;

  for (let i = 0; i < n - 2; i++) {
    leftPointer = i + 1;
    rightPointer = n - 1;

    while (leftPointer < rightPointer) {
      let sum = arr[i] + arr[leftPointer] + arr[rightPointer];
      if (sum === 0) return true;
      else if (sum > 0) rightPointer--;
      else leftPointer++;
    }
  }

  return false;
}
console.log(findTriplets([0, -1, 2, -3, 1], 5));
