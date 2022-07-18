// !==========Minimum number of swaps required to sort an array

// !==============Links
// * https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
// * https://practice.geeksforgeeks.org/problems/minimum-swaps/1

// !=============Method 1=========
// * So, find the inorder traversal of the Binary Tree and store it in the array and try to sort the array.
function minSwaps(nums) {
  let ans = 0;
  const map = new Map();
  const temp = [...nums];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  temp.sort((a, b) => a - b);

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === temp[i]) {
      i++;
    } else {
      ans++;
      const index = map.get(temp[i]);

      swap(i, index, temp);
    }
  }

  return ans;
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(minSwaps([2, 8, 5, 4]));
