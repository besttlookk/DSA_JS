// !==============Find Pair Given Difference
// * Expected Time Complexity: O(L* Log(L)).
// * Expected Auxiliary Space: O(1).

// !=================Method 1(Brute force) ===============

// * Time complexity of this method is O(n2).
/*
function findPair(arr, size, n) {
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (Math.abs(a[i] - a[j]) === n) return true;
    }
  }

  return false;
}
*/
// !=================Method 2(Two pointer method + sorting) ===============

// * Time Complexity: O(n*log(n)) [Sorting is still required as first step], Where n is number of element in given array
// * Auxiliary Space: O(1)

/*
function findPair(arr, size, n) {
  arr.sort((a, b) => a - b);

  console.log({ arr });

  let left = 0;
  // let right = size - 1; //* we can judge properly when pointer is on last
  let right = 1;

  while (left < size && right < size) {
    if (right !== left && arr[right] - arr[left] === n) return true;
    else if (arr[right] - arr[left] < n) right++;
    else left++;
  }

  return false;
}
*/
// !=================Method 3 (Hashing) =====================
//* Time Complexity: O(n), Where n is number of element in given array
//* Auxiliary Space: O(n)

/*
function findPair(arr, size, n) {
  // * we need to use Map as same number can exist twice and diff can be asked for 0
  const map = new Map();
  for (let i = 0; i < size; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i] + 1));
    } else {
      map.set(arr[i], 1);
    }

    //* Check if any element whose frequency
    //* is greater than 1 exist or not for n == 0
    if (n === 0 && map.get(arr[i]) > 1) return true;
  }

  //* Check if difference is zero and we are unable to find any duplicate or
  //* element whose frequency is greater than 1  then no such pair found.
  if (n == 0) return false;

  for (let i = 0; i < size; i++) {
    if (map.has(arr[i] + n)) return true;
  }

  return false;
}

*/

// !================Method 4(Binary search ) ===================
// * We can use sorting and Binary Search to improve time complexity to O(nLogn).
// *  Once the array is sorted, traverse the array from left to right, and for each element arr[i], binary search for arr[i] + n in arr[i+1..n-1]. If the element is found, return the pair. Both first and second steps take O(nLogn). So overall complexity is O(nLogn).

function findPair(arr, size, n) {}
console.log(findPair([1, 2, 6, 3, 4], 5, 0));
