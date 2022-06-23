function doIntersectionSorted(a, b) {
  // *Note: arrays are sorted
  let i = 0; //* pointer for array a
  let j = 0; //* pointer for array b
  let intersectionArr = [];

  let prev = null; //* to handle dublicates

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++;
    } else if (a[i] > b[j]) {
      j++;
    } else {
      if (a[i] !== prev) {
        intersectionArr.push(a[i]);
        prev = a[i];
      }
      i++;
      j++;
    }
  }

  return intersectionArr;
}

console.log(doIntersectionSorted([4, 5, 9], [4, 4, 8, 9, 9]));
