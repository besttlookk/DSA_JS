// !============================== Majority Element =================
//* Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.

// !============Links =============
// * https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1/
// * https://www.geeksforgeeks.org/majority-element/

// !===========Method 1 =================
//* The basic solution is to have two loops and keep track of the maximum count for all different elements.
// * If maximum count becomes greater than n/2 then break the loops and return the element having maximum count.
// *If the maximum count doesn’t become more than n/2 then the majority element doesn’t exist.

// * Time Complexity: O(n*n).
// * Auxiliary Space: O(1).
/*
function majorityElement(a, size) {
  let N = Math.floor(size / 2);

  for (let i = 0; i < size; i++) {
    let count = 1;
    for (let j = i + 1; j < size; j++) {
      if (a[i] === a[j]) {
        count++;
      }
    }

    if (count > N) return a[i];
  }

  return -1;
}
*/

// !===========Method 2 (Using Hashmap) =====================
// * Time Complexity: O(n). One traversal of the array is needed, so the time complexity is linear.
// * Auxiliary Space: O(n). Since a hashmap requires linear space.
/*
function majorityElement(a, size) {
  const map = new Map();

  for (let i = 0; i < size; i++) {
    if (map.has(a[i])) {
      const count = map.get(a[i]) + 1;

      if (count > size / 2) {
        return a[i];
      } else {
        map.set(a[i], count);
      }
    } else {
      map.set(a[i], 1);
    }
  }
}
*/
// ! ===============Method 3 (Sort) ================
//* The idea is to sort the array. Sorting makes similar elements in the array adjacent, so traverse the array and update the count until the present element is similar to the previous one. If the frequency is more than half the size of the array, print the majority element.

// * Time Complexity: O(nlogn). .Sorting requires O(n log n) time complexity.
// * Auxiliary Space: O(1). As no extra space is required.
/*
function majorityElement(a, size) {
  a.sort((a, b) => a - b);
  let temp = a[0];
  let count = 1;

  for (let i = 1; i < size; i++) {
    if (temp === a[i]) count++;
    else {
      count = 1;
      temp = a[i];
    }

    if (count > size / 2) {
      return a[i];
    }
  }

  return -1;
}
*/
// ! =========== METHOD 4 (Using Moore’s Voting Algorithm): ================
// *This is a two-step process.
//* The first step gives the element that maybe the majority element in the array. If there is a majority element in an array, then this step will definitely return majority element, otherwise, it will return candidate for majority element.
//* Check if the element obtained from the above step is majority element. This step is necessary as there might be no majority element.

//* Time Complexity: O(n).
//* As two traversal of the array is needed, so the time complexity is linear.
//* Auxiliary Space: O(1).
//* As no extra space is required.

function majorityElement(a, size) {
  let count = 1;
  let ansIndex = 0;

  for (let i = 1; i < size; i++) {
    if (a[i] === a[ansIndex]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      ansIndex = i;
      count = 1;
    }
  }

  if (count <= 0) return -1;

  let ansCount = 0;

  for (let i = 0; i < size; i++) {
    if (a[i] === a[ansIndex]) ansCount++;
  }

  return ansCount > size / 2 ? a[ansIndex] : -1;
}

console.log(majorityElement([3, 1, 3, 3, 2], 5));
