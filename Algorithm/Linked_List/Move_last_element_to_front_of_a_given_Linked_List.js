// !=====================================Move last element to front of a given Linked List================

// !==============================Links ========================
// * https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/

// ! =================Method 1======================
function moveToFront(head) {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = null;
  curr.next = head;
  head = curr;

  return head;
}
