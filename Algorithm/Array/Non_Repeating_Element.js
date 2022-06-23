// ! Links
// * https://practice.geeksforgeeks.org/problems/non-repeating-element3958/1/?page=1&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/non-repeating-element/

// ! ================ Method 1(Brute force) ================
/*
// * TC: O(n^2)
function firstNonRepeating(arr, n) {
  for (let i = 0; i < n; i++) {
    let j;
    for (j = 0; j < n; j++) {
      if (i !== j && arr[i] === arr[j]) {
        break;
      }
    }
    if (j === n) return arr[i];
  }
  return -1;
}
*/
// !================Method 2(Hashing) =====================
// * 1) Traverse array and insert elements and their counts in hash table.
//*  2) Traverse array again and print first element with count equals to 1.

// * Time Complexity: O(n)
// * Auxiliary Space: O(n)

function firstNonRepeating(arr, n) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (map.get(arr[i]) === 1) return arr[i];
  }

  return -1;
}

// * Further Optimization: If array has many duplicates, we can also store index in hash table, using a hash table where value is a pair. Now we only need to traverse keys in hash table (not complete array) to find first non repeating.

console.log(firstNonRepeating([-1, 2, -1, 3, 2], 5));
