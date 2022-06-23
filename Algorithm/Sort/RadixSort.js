function radixSort(arr) {
  // !Step 1: First find the number with longest number of digits. Outer loop will run for that number of times
  const longerstDigit = longestDigitCount(arr);

  for (let i = 0; i < longerstDigit; i++) {
    // ! Step 2: for each loop we will create bucket(2D array) to hold numbers
    const bucket = Array.from({ length: 10 }, () => []);
    // ! Step 3: loop over each number and find the digit at ith place in each number
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);

      // ! Step 4: Add numbers in the bucket with respective digit as key
      bucket[digit].push(arr[j]);
    }

    // ! Step 5: After each loop re-create the array
    arr = [].concat(...bucket);
  }

  return arr;
}

function longestDigitCount(arr) {
  let longest = 0;
  arr.forEach((number) => {
    longest = Math.max(longest, digitCount(number));
  });

  return longest;
}

// 100-999 => log10(n) = 2
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, location) {
  return Math.floor(Math.abs(num) / Math.pow(10, location)) % 10;
}

console.log(radixSort([23, 466, 21, 2, 99, 0, 2, 44444]));
