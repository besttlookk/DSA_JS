// * https://practice.geeksforgeeks.org/problems/three-way-partitioning/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions

function threeWayPartition(array, a, b) {
  let left = 0; //* to keep track of number greater than "b"
  let right = array.length - 1;
  let i = 0; //* used for looping

  while (i <= right) {
    // * if any number found less that a, swap with "start" index
    if (array[i] < a) {
      [array[left], array[i]] = [array[i], array[left]];
      i++;
      left++;
    } else if (array[i] > b) {
      [array[right], array[i]] = [array[i], array[right]];
      right--;
    } else {
      i++;
    }
  }

  console.log(array);
}

threeWayPartition([1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32], 14, 20);
