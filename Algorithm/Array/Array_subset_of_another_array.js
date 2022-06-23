//! +++++++++++++++++++ Find whether an array is subset of another array+++++++++++++++++++++++++++++++

// !====================Links
// * https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/
/*
function isSubset(a1, a2, n, m) {
  if (n < m) {
    const result = a1.every((el) => a2.includes(el));
    return result === true ? "Yes" : "No";
  } else {
    const result = a2.every((el) => a1.includes(el));
    return result === true ? "Yes" : "No";
  }
}
*/
//! =============Method 2 (Brute force):
// *Use two loops: The outer loop picks all the elements of arr2[] one by one. The inner loop linearly searches for the element picked by the outer loop.
// * Time Complexity: O(m*n)
// * Auxiliary Space : O(1)
// * In this for searcing we are using LINEAR-SEARCH
/*
function isSubset(a1, a2, n, m) {
  // * we have to check ki a2 ke saare elements a1 me hai ki nahi...
  // * so outer loop a2 ke liye chalega
  for (let i = 0; i < m; i++) {
    //* search for a1[i] in a2
    let j;
    for (j = 0; j < n; j++) {
      if (a2[i] === a1[j]) {
        //* if match found...search for another a[i]
        break;
      }
    }
    // * If loop did not break..that means that item is not found
    if (j == n) return "No";
  }

  return "Yes";
}
*/
// !================Method 3 (Use Sorting and Binary Search): ================
//* Sort arr1[] which takes O(mLogm)
//* For each element of arr2[], do binary search for it in sorted arr1[].

// * Time Complexity: O(mLogm + nLogm). Please note that this will be the complexity if an mLogm algorithm is used for sorting which is not the case in above code. In above code Quick Sort is used and worst case time complexity of Quick Sort is O(m^2)

// * Auxiliary Space: O(n)
/*
function binarySearch(arr, x) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > x) right = mid - 1;
    else if (arr[mid] < x) left = mid + 1;
    else return mid;
  }

  return -1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  //* Swap arr[i+1] and arr[high] (or pivot)
  swap(arr, i + 1, right);

  return i + 1;
}

function sort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pi = partition(arr, left, right);

    sort(arr, left, pi - 1);
    sort(arr, pi + 1, right);
  }
}

function isSubset(a1, a2, n, m) {
  sort(a1);
  for (let i = 0; i < m; i++) {
    if (binarySearch(a1, a2[i]) === -1) {
      // * if any of the item of a2 is not found in a1...so its not a subset
      return "No";
    }
  }
  return "Yes";
}
*/

// !=================Method 3 (Use Sorting and Merging ) =================
//* Sort both arrays: arr1[] and arr2[] which takes O(mLogm + nLogn)
//* Use Merge type of process to see if all elements of sorted arr2[] are present in sorted arr1[].

//* Time Complexity: O(mLogm + nLogn) which is better than method 2. Please note that this will be the complexity if an nLogn algorithm is used for sorting both arrays which is not the case in above code

// * Auxiliary Space: O(1)
/*
function isSubset(a1, a2, n, m) {
  if (n < m) return "No";

  // Sort both the arrays
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  console.log({ a1 });
  console.log({ a2 });

  let i = 0; //* to track a1
  let j = 0; //* to track a2

  while (i < n && j < m) {
    if (a2[j] > a1[i]) i++;
    else if (a2[j] === a1[i]) {
      //* found one match
      i++;
      j++;
    } else if (a2[j] < a1[i]) {
      //* If we donot have a element smaller
      //* or equal to the second array then break

      return "No";
    }
  }

  return j < m ? "No" : "Yes";
}
*/
// !================= Method 4 (Use Hashing)   ===============================

//* Create a Hash Table for all the elements of arr1[].
//* Traverse arr2[] and search for each element of arr2[] in the Hash Table. If element is not found then return 0.
//* If all elements are found then return 1.
/*
function isSubset(a1, a2, n, m) {
  // ! Note we could use set also to achive same thing
  let hashMap = new Map();

  for (let i = 0; i < n; i++) {
    if (!hashMap.has(a1[i])) {
      hashMap.set(a1[i], i);
    }
  }

  for (let i = 0; i < m; i++) {
    if (!hashMap.has(a2[i])) {
      return "No";
    }
  }

  return "Yes";
}
*/

// !======================== Method 5 (Use Set) =================
//* Insert into the set for the first array; that’s how we will know the elements in the array.
//* Save the size of the array after inserting the first array element.
//* Insert into the same set for the second array.
//* Check if the size of the set is still the same or not, if it is then it’s true else false.

//* Time Complexity: O(m+n) because we are using unordered_set and inserting in it, If we would be using a ordered set inserting would have taken log n increasing the TC to O(mlogm+nlogn); but order does not matter in this approach.

//* Auxiliary Space: O(n+m)

function isSubset(a1, a2, n, m) {
  const set = new Set();

  for (let i = 0; i < n; i++) {
    set.add(a1[i]);
  }

  let p = set.size;

  for (let i = 0; i < m; i++) {
    set.add(a2[i]);
  }

  if (set.size === p) return "Yes";
  else return "No";
}

// !================Method 6 (Use Frequency Table)
//* Create a Frequency Table for all the elements of arr1[].
//* Traverse arr2[] and search for each element of arr2[] in the Frequency Table. if element is found decrease the frequency, If element frequency is not found then return 0.
//* If all elements are found then return 1.

console.log(isSubset([8, 4, 5, 3, 1, 7, 9], [5, 1, 3, 7, 9], 7, 5));
