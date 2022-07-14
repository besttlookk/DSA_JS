// !========== Split a Circular Linked List into two halves

// !====================Links
// * https://www.geeksforgeeks.org/split-a-circular-linked-list-into-two-halves/
// * https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1/#

// !==========Method 1===================
function splitList(node) {
  let slow = node;
  let fast = node;

  //* If there are odd nodes in the circular list then fast_ptr->next becomes head
  //* and for even nodes fast_ptr->next->next becomes head
  while (fast.next !== node && fast.next.next !== node) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // * slow now points to the last element of first half

  //* If there are even elements in list then move fast_ptr
  if (fast.next.next === node) {
    fast = fast.next; //* in case of even node...
  }

  let head1_ref = head;
  let head2_ref;

  //* Set the head pointer of second half
  if (head.next != head) {
    head2_ref = slow.next;
  }

  //* Make second half circular
  fast.next = slow.next;

  //* Make first half circular
  slow.next = head;

  return [head1_ref, head2_ref];
}
