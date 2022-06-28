// !===========Links =====
// * https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/

// !===========Method 1 ================
function reverseDLL(head) {
  let current = head;
  let nextNode = null;
  let prevNode = null;

  while (current) {
    nextNode = current.next;
    current.next = prevNode;
    current.prev = nextNode;

    prevNode = current;
    current = nextNode;
  }

  return prevNode;
}
