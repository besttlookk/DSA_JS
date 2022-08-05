//

function shellSort(arr) {
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap >= 1; gap /= 2) {
    for (let j = gap; j < n; j++) {
      for (let i = j - gap; i >= 0; i - gap) {
        if (arr[i + gap] > a[i]) break;
        else {
          const temp = arr[i + gap];
          arr[i + gap] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }

  return arr;
}

console.log(shellSort([10, 4, 43, 5, 57, 91, 45, 9, 7]));
