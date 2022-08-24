// !==================== Find the first non-repeating character from a stream of characters ====================================

// !===================================Links====================================
// * https://www.geeksforgeeks.org/find-first-non-repeating-character-stream-characters/
// * https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1

// !====================Method 1(DLL)=======================
// * . We can find the first non-repeating character from the stream at any moment without traversing any array.
// * The idea is to use a DLL (Doubly Linked List) to efficiently get the first non-repeating character from a stream.
// * The DLL contains all non-repeating characters in order, i.e., the head of DLL contains first non-repeating character, the second node contains the second non-repeating, and so on.
// * We also maintain two arrays: one array is to maintain characters that are already visited two or more times, we call it repeated[], the other array is an array of pointers to linked list nodes, we call it inDLL[].
// *  The size of both arrays is equal to alphabet size which is typically 256.

function FirstNonRepeating(A) {
  let MAX_CHAR = 256;

  // inDLL[x] contains pointer to a DLL
  // node if x is present in DLL. If x
  // is not present, then inDLL[x] is NULL
  let inDLL = [];

  // repeated[x] is true if x is repeated
  // two or more times. If x is not seen
  // so far or x is seen only once.
  // then repeated[x] is false
  let repeated = new Array(MAX_CHAR);
  for (let i = 0; i < MAX_CHAR; i++) {
    repeated[i] = false;
  }

  for (let i = 0; i < A.length; i++) {
    let x = A[i];

    // We process this character only if it has not
    // occurred or occurred only once. repeated[x]
    // is true if x is repeated twice or more.s

    if (!repeated[x.charCodeAt(0)]) {
      // If the character is not in DLL, then add
      // this at the end of DLL.
      if (!inDLL.includes(x)) {
        inDLL.push(x);
      }

      // Otherwise remove this character from
      // DLL
      else {
        inDLL.splice(inDLL.indexOf(x), 1);

        // Also mark it as repeated
        repeated[x.charCodeAt(0)] = true;
      }
    }
  }
}
