// !Links
// * https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1/?page=1&curated[]=2&sortBy=submissions

// !===============
function getMinDiff(arr, n, k) {
  arr.sort((a, b) => a - b);
  let tempMin = arr[0];
  let tempMax = arr[n - 1];

  let minDiff = tempMax - tempMin; //* before changing. we need to minimize it

  let smallest = arr[0] + k;
  let largest = arr[n - 1] - k;

  for (let i = 1; i < n; i++) {
    // * for new temp min we will add "K" to the zero index element and substract K from each index. Then chose min from them
    tempMin = Math.min(smallest, arr[i] - k);

    // * similarluy for max
    tempMax = Math.max(largest, arr[i - 1] + k);

    if (tempMin < 0) continue;

    minDiff = Math.min(minDiff, tempMax - tempMin);
  }

  return minDiff;
}

console.log(getMinDiff([8, 1, 5, 4, 7, 5, 7, 9, 4, 6], 10, 5));
