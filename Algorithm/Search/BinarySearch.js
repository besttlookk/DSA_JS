// ! Without recursion
//  TC: log(n)
// function binarySearch(arr, num) {
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   let midPointer;

//   while (leftPointer <= rightPointer) {
//     midPointer = Math.floor((leftPointer + rightPointer) / 2);

//     if (arr[midPointer] > num) rightPointer = midPointer - 1;
//     else if (arr[midPointer] < num) leftPointer = midPointer + 1;
//     else return midPointer;
//   }

//   return -1;
// }

// ! with recursion
function binarySearch(arr, num, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  mid = Math.floor((left + right) / 2);

  if (arr[mid] > num) return binarySearch(arr, num, left, mid - 1);
  else if (arr[mid] < num) return binarySearch(arr, num, mid + 1, right);
  else return mid;
}

console.log(binarySearch([2, 4, 6, 10, 15, 24, 36], 36));
