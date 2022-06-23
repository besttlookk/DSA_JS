function bubbleSort(array) {
  let swapped = false;

  for (let i = 1; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    //! If in one loop there is no swip, then array is already sorted
    if (!swapped) break;
  }

  return array;
}
