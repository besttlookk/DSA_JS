// !================First Repeating Element ==============

// !==============Links ==================
// * https://practice.geeksforgeeks.org/problems/first-repeating-element4018/1/?page=1&curated[]=2&sortBy=submissions
function firstRepeated(arr, n) {
  let hashMap = {};

  for (let i = 0; i < n; i++) {
    hashMap[arr[i]] = hashMap[arr[i]] + 1 || 1;
  }

  console.log({ hashMap });

  for (let i = 0; i < n; i++) {
    if (hashMap[arr[i]] > 1) return i + 1;
  }

  return -1;
}

console.log(firstRepeated([1, 9, 3, 4, 3, 9, 6], 7));
