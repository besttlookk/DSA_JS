// !======LINKS
// * https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/count-pairs-with-given-sum/

//! ============== Method 1(Naive Aprroch) ================
// *Time Complexity: O(n2)
// *Auxiliary Space: O(1)
/*
function getPairsCount(arr, n, k) {
  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === k) count++;
    }
  }

  return count;
}
*/

// !==========Method 2 ===============
//* Time Complexity: O(n), to iterate over the array
//* Auxiliary Space: O(n), to make a map of size n
function getPairsCount(arr, n, k) {
  let map = new Map();
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (map.has(k - arr[i])) {
      count += map.get(k - arr[i]);
    }

    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  return count;
}
console.log(getPairsCount([1, 5, 7, 1], 4, 6));
