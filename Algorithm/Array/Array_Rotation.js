// !=================Links

// !========== list of methods ==============
// * 1. One by One Rotation
// * Juggling Algorithm
// * Reversal Algorithm
// * Block swap Algorithm

// ! =================Helper method ===========
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

function swap(arr, aIndex, bIndex, k) {
  for (let i = 0; i < k; i++) {
    const temp = arr[aIndex + i];
    arr[aIndex + i] = arr[bIndex + i];
    arr[bIndex + i] = temp;
  }
}

// ! Given an array, rotate the array to the left by k steps, where k is non-negative.
// ! ==========Method 1 : this wont work if d > n ===========
/*
function rotateLeft(arr, d) {
  arr.push(...arr.splice(0, d));
  return arr;
}
*/

//!==== Method 2: Rotate one by one :- Not the optimal solution
/*
function rotateLeft(arr, d) {
  while (d > 0) {
    arr.push(arr.shift());
    d--;
  }
  return arr;
}
*/

// ! ===================== Method 3 (A Juggling Algorithm) ==================
// * This is an extension of method 2. Instead of moving one by one, divide the array in different sets.
// * where number of sets is equal to GCD of n and d and move the elements within sets.
/*
function rotateLeft(arr, d) {
  let n = arr.length;
  d = d % n; //* to handle d > n
  let g = gcd(n, d); //* jitns gcd utna baar loop chalega

  for (let i = 0; i < g; i++) {
    let temp = arr[i];
    let j = i; //
    while (true) {
      let k = (j + d) % n; //* inner loop will end when k again becoms equal to i,

      if (k === i) break;

      arr[j] = arr[k];
      j = k;
    }

    arr[j] = temp;
  }
  return arr;
}*/
// !================= Method 4: The Reversal Algorithm
//* Reverse A to get ArB, where Ar is reverse of A.
//* Reverse B to get ArBr, where Br is reverse of B.
//* Reverse all to get (ArBr) r = BA.

// * Time Complexity : O(n)
// * Auxiliary Space: O(1)
/*
function rotateLeft(arr, d) {
  if (d == 0) return arr;
  let n = arr.length;
  d = d % n;
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}
*/

// !============== Method 5A: Block swap(iteravtive) ========
function rotateLeft(arr, d) {
  let n = arr.length;
  d %= n;
  if (d === 0 || n === d) return arr;

  let A = d; //* length
  let B = n - d; //* length

  while (A !== B) {
    if (A < B) {
      swap(arr, d - A, n - A, A);
      B = B - A; //* length of B
    } else {
      swap(arr, d - A, d, B);
      A = A - B;
    }
  }
  swap(arr, d - A, d, A);

  return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], 3));

//! ======== Given an array, rotate the array to the right by k steps, where k is non-negative.==============
// * LC189 https://leetcode.com/problems/rotate-array/

// ! ========== ============Method 1 :  ===========
/*
function rotateRight(arr, d) {
  let n = arr.length;
  //* To handle if d >= n 
  d = d % n;
  arr.unshift(...arr.splice(n - k));
  return arr;
}

*/

//!==== Method 2: Rotate one by one :- Not the optimal solution
/*
function rotateRight(arr, d) {
  while (d > 0) {
    arr.unshift(arr.pop());
    d--;
  }
  return arr;
}
*/

// ! ===================== Method 3 (A Juggling Algorithm) ==================
// * This is an extension of method 2. Instead of moving one by one, divide the array in different sets.
// * where number of sets is equal to GCD of n and d and move the elements within sets.
// *  To rotate the array d times to the right, just rotate it n - d times to the left.
/*
function rotateRight(arr, d) {
  let n = arr.length;
  d = d % n; //* for d > n
  g = gcd(d, n);

  for (let i = 0; i < g; i++) {
    let temp = arr[i];
    let j = i;

    while (true) {
      let k = (j - d + n) % n; // d = n - d

      if (k === i) break;

      arr[j] = arr[k];

      j = k;
    }
    arr[j] = temp;
  }

  return arr;
}
*/

// !================= Method 4: The Reversal Algorithm
//* Reverse all to get (ArBr) r = BA.
//* Reverse A to get BAr, where Ar is reverse of A.
//* Reverse B to get BrAr, where Br is reverse of B.

// * Time Complexity : O(n)
// * Auxiliary Space: O(1)
/*
function rotateRight(arr, d) {
  if (d == 0) return;
  let n = arr.length;
  d = d % n;
  reverse(arr, 0, n - 1); //* here we first reverse the whole array
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  return arr;
}
*/

// !===================Method 5 Block swap =====================
function rotateRight(arr, d) {
  let n = arr.length;
  d %= n;
  d = n - d;
  if (d === 0 || n === d) return arr;

  let A = d; //* length
  let B = n - d; //* length

  while (A !== B) {
    if (A < B) {
      swap(arr, d - A, n - A, A);
      B = B - A; //* length of B
    } else {
      swap(arr, d - A, d, B);
      A = A - B;
    }
  }
  swap(arr, d - A, d, A);

  return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3));
