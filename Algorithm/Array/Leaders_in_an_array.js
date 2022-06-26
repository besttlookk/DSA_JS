// !=================Links ==========================
// * https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1/?page=1&category[]=Arrays&sortBy=submissions

// !==================Method 1 ================
function leaders(arr, n) {
  let result = [];
  let max_from_right = arr[n - 1];
  result.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= max_from_right) {
      result.push(arr[i]);
      max_from_right = arr[i];
    }
  }

  return result.reverse();
}

console.log(leaders([1, 2, 3, 4, 0], 5));
