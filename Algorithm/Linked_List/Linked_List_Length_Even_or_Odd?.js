// !========== links ========
// * https://www.geeksforgeeks.org/check-whether-the-length-of-given-linked-list-is-even-or-odd/

// !==========Method 2: Stepping 2 nodes at a time
// * Take a pointer and move that pointer two nodes at a time
//* 2. At the end, if the pointer is NULL then length is Even, else Odd.

function isLengthEvenOrOdd(head) {
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
  }

  return fast === null ? 0 : 1; //* 0 for even
}
