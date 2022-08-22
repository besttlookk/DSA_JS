// !==========================Reverse a doubly linked list in groups of given size====================

// !==========================================Links ================================
// * https://www.codingninjas.com/codestudio/problems/reverse-dll-nodes-in-groups_920399?leftPanelTab=1
// * https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/

// !=========================Method 1=======================
// * Using same method of reversing the DLL
function revListInGroupOfGivenSize(head, k) {
  if (head === null) return null;
  let curr = head;
  let prev = null;
  let next = null;
  let count = 0;

  while (curr !== null && count < k) {
    next = curr.next;

    curr.next = prev;
    curr.prev = next;

    prev = curr;
    curr = next;

    count++;
  }

  if (next !== null) {
    head.next = revListInGroupOfGivenSize(next, k);
  }

  return prev;
}

// !=====================================Method 2(Iterative)==========================
function revListInGroupOfGivenSize(head, k) {
  if (head == null) return head;
  let st = head;
  let globprev = null;
  let newHead = null;

  while (st != null) {
    let count = 1; // to count k nodes
    let curr = st;
    let prev = null;
    let next = null;

    while (curr != null && count <= k) {
      // reversing k nodes
      next = curr.next;
      curr.prev = next;
      curr.next = prev;
      prev = curr;
      curr = next;
      count++;
    }

    if (newHead == null) {
      newHead = prev; // to store ans i.e the new head
      newHead.prev = null;
    }

    if (globprev == null) {
      globprev = st; // assigning the last node of
      // the reversed k nodes
    } else {
      globprev.next = prev;
      prev.prev = globprev; // connecting last node of
      // last k group to the first
      // node of present k group

      globprev = st;
    }
    st = curr; // advancing the pointer for the next k group
  }

  return newHead;
}
