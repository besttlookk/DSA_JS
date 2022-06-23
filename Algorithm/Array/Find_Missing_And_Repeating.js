// ! =================== Links ==========================
// * https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/
// * https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1/?page=2&curated[]=2&sortBy=submissions

// !========= Method 1(Incomplete) =======================
/*
function findTwoElement(arr, n) {
  arr.sort((a, b) => a - b);
  let missing;
  let repeating;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) missing = i + 1;
    if ((i !== 0) & (arr[i - 1] === arr[i])) repeating = arr[i - 1];
  }

  return [repeating, missing];
}
*/
// ! ====Method 2(Hashmap)========
//* TC: O(N)
//* SC: O(N)
/*
function findTwoElement(arr, n) {
  const hashMap = {};
  let repeating;
  let missing;

  for (let i = 1; i <= n; i++) {
    hashMap[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    hashMap[arr[i]] = hashMap[arr[i]] + 1;
  }

  for (let key in hashMap) {
    if (hashMap[key] === 2) repeating = key;
    if (hashMap[key] === 0) missing = key;
  }

  return [repeating, missing];
}

*/
//! =====================Method 3: Use elements as Index and mark the visited places ======================
/*
function findTwoElement(arr, n) {
  let missing, repeating;
  for (let i = 0; i < n; i++) {
    const absValue = Math.abs(arr[i]);
    // if aready -ve means it has already been visited
    if (arr[absValue - 1] > 0) {
      arr[absValue - 1] = -arr[absValue - 1];
    } else {
      repeating = absValue;
    }
  }

  console.log({ arr });

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) missing = i + 1;
  }

  return [repeating, missing];
}
*/

// !===============Method 4 (Use XOR)===================
//* Let x and y be the desired output elements.
//* Calculate XOR of all the array elements.
// * XOR the result with all numbers from 1 to n
// * In the result xor1, all elements would nullify each other except x and y
// * All the bits that are set in xor1 will be set in either x or y. So if we take any set bit (We have chosen the rightmost set bit in code) of xor1 and divide the elements of the array in two sets – one set of elements with the same bit set and other set with same bit not set
// * By doing so, we will get x in one set and y in another set. Now if we do XOR of all the elements in first set, we will get x, and by doing same in other set we will get y.

// * Time Complexity: O(n)
function findTwoElement(arr, n) {
  let x = 0;
  let y = 0;
  let xor1 = arr[0];

  // * Get the xor of all array elements
  for (let i = 1; i < n; i++) {
    xor1 ^= arr[i];
  }

  //* XOR the previous result with numbers
  //* # from 1 to n
  for (let i = 1; i <= n; i++) {
    xor1 ^= i;
  }

  // * Will have only single set bit of xor1
  let set_bit_no = xor1 & ~(xor1 - 1);

  //* Now divide elements into two sets by comparing a rightmost set
  //* bit of xor1 with the bit at the same
  //* position in each element. Also,
  //* get XORs of two sets. The two
  //* XORs are the output elements.
  //* The following two for loops
  //* serve the purpose

  for (let i = 0; i < n; i++) {
    if ((arr[i] & set_bit_no) !== 0) {
      x ^= arr[i];
    } else {
      y ^= arr[i];
    }
  }

  for (let i = 1; i <= n; i++) {
    if ((i & set_bit_no) !== 0) {
      x ^= i;
    } else {
      y ^= i;
    }
  }

  return [y, x];
}
console.log(findTwoElement([7, 3, 4, 5, 5, 6, 2], 7));
