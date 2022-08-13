// !==============Zero Sum Subarrays

// !==============Links
// * https://practice.geeksforgeeks.org/problems/zero-sum-subarrays1825/1?page=1&category[]=Hash&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !======================Method 1(Brute force) ==============
// * TC:O(n*n)
// * SC:O(1)
function findSubarray(arr, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    if (sum === 0) result.push([0]);
    const temp = [arr[i]];
    for (let j = i + 1; j < n; j++) {
      temp.push(arr[j]);
      sum += arr[j];

      if (sum === 0) {
        result.push([...temp]);
      }
    }
  }

  return result;
}

// !=========================Method 2(Hashing) ==============
function findSubarray(arr, n) {

  const result = [];
  for(let i = 0; i < n; i++){
    
  }


  return result;
}

// console.log(findSubarray([0, 0, 5, 5, 0, 0], 6));
console.log(findSubarray([6, -1, -3, 4, -2, 2, 4, 6, -12, -7], 10));
