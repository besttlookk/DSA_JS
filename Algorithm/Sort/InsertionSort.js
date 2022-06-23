// We asuume index 0 element as sorted array.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // taking first element of unsorted sublist
    // another loop to go backword
    // now we have to find right place in the sorted sub-array
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // move up
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentIndex = i;

//     // keep decreasing current Index and compare it with previous index
//     while (
//       arr[currentIndex - 1] !== undefined &&
//       arr[currentIndex] < arr[currentIndex - 1]
//     ) {
//       [arr[currentIndex - 1], arr[currentIndex]] = [
//         arr[currentIndex],
//         arr[currentIndex - 1],
//       ];

//       currentIndex--;
//     }
//   }

//   return arr;
// }

console.log(insertionSort([2, 1, 9, 76, 4]));
