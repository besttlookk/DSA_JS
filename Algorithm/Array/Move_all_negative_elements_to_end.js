// ! =========Links ===========

// !========================= Method 1(Using extra array) =============================
// * Move all negative elements to end in order with extra space allowed
// * Time Complexity : O(n)
// * Auxiliary space : O(n)
// *  The problem with this approach is that it uses auxiliary array and we’re not allowed to use any data structure to solve this problem
//  * One approach that does not use any data structure is to use use partition process of QuickSort. The idea is to consider 0 as pivot and divide the array around it. The problem with this approach is that it changes relative order of elements
/*
function segregateElements(arr, n) {
  const temp = [];
  let i = 0;
  while (i < n) {
    if (arr[i] < 0) {
      temp.push(arr[i]);
      arr.splice(i, 1);
    } else {
      i++;
    }
  }

  arr.splice(i, 0, ...temp);

  return arr;
}
*/

// !============Metnod 2 (Using extra array) =================
function segregateElements(arr, n) {
  let temp = Array(n);
  let j = 0; //* index for temp

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      temp[j] = arr[i];
      j++;
    }
  }

  //* If array contains all positive or all negative.
  if (j === n || j === 0) return arr;

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      temp[j] = arr[i];
      j++;
    }
  }

  for (let i = 0; i < n; i++) arr[i] = temp[i];

  return arr;
}

// !================ Method 3(Order changing) ======================
/*
function segregateElements(arr, n) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    while (arr[left] >= 0) {
      left++;
    }

    while (arr[right] < 0) {
      right--;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  return arr;
}

*/
console.log(segregateElements([-8, 9, 5, 10, 2, 6, -7, 7], 8));
