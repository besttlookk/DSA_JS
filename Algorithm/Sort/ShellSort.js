//

function shellSort(arr) {
  const n = arr.length;

  //* Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap >= 1; gap = Math.floor(gap / 2)) {
    //* Do a gapped insertion sort for this gap size.
    //* The first gap elements a[0..gap-1] are already
    //* in gapped order keep adding one more element
    //* until the entire array is gap sorted
    for (let i = gap; i < n; i++) {
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      const temp = arr[i];

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      let j;
      for (j = i - gap; j >= gap - 1 && arr[j] > temp; j -= gap) {
        //* replace 1 with gap in insertion sort
        arr[j + gap] = arr[j];
      }

      // put temp (the original a[i]) in its correct
      // location
      arr[j + gap] = temp;
    }
  }

  return arr;
}

console.log(shellSort([10, 4, 43, 5, 57, 91, 45, 9, 7]));
