function valueEqualToIndex(arr, n) {
  return arr.filter((el, index) => el === index + 1);
}

console.log(valueEqualToIndex([15, 2, 45, 12, 7], 5));
