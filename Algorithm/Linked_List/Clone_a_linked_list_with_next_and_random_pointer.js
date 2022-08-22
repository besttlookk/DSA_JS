// !========= Clone a linked list with next and random pointer

class Node {
  constructor(data) {
    this.data = data;
    this.next = this.random = null;
  }
}

// !============Links====
// * https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1
// * https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/
// * https://www.geeksforgeeks.org/clone-linked-list-next-arbit-pointer-set-2
// * https://www.geeksforgeeks.org/clone-linked-list-next-random-pointer-o1-space/

// !===========================================Method 1(Hashing)===================================
// * Traverse the original linked list and make a copy in terms of data.
//*  Make a hash map of key value pair with original linked list node and copied linked list node.
//*  Traverse the original linked list again and using the hash map adjust the next and random reference of cloned linked list nodes.
// * Two traversal required
/*
function copyList(head) {
  let originalCurr = head;
  let cloneCurr = null;
  const map = new Map();

  while (originalCurr) {
    cloneCurr = new Node(originalCurr.data);
    map.set(originalCurr, cloneCurr);
    originalCurr = originalCurr.next;
  }

  //* Adjusting the original list reference again.
  originalCurr = head;

  //* Traversal of original list again to adjust the next
  //* and random references of clone list using hash map.

  while (originalCurr) {
    cloneCurr = map.get(originalCurr);
    cloneCurr.next = map.get(originalCurr.next);
    if (originalCurr.random) cloneCurr.random = map.get(originalCurr.random);
    originalCurr = originalCurr.next;
  }

  return map.get(head);
}
*/

// !==================Method 2 (without extra space) =========================
// * This requies three traversal.

function copyList(head) {
  let originalCurr = head;
  let cloneCurr = null;

  // *Step 1:Create the copy of node 1 and insert it between node 1 & node 2 in the original Linked List, create a copy of 2 and insert it between 2 & 3. Continue in this fashion, add the copy of N after the Nth node

  while (originalCurr) {
    cloneCurr = new Node(originalCurr.data);
    const next = originalCurr.next;
    originalCurr.next = cloneCurr;
    cloneCurr.next = next;
    originalCurr = next;
  }

  // * Step 2: copy the random link if present
  // * To reach respective clone of node: node.next
  // * to reach next node in orinal list: node.next.next
  originalCurr = head;
  while (originalCurr) {
    originalCurr.next.random = originalCurr.random
      ? originalCurr.random.next
      : null;
    originalCurr = originalCurr.next.next;
  }

  // * Step 3: chnage the next pointer
  originalCurr = head;
  const dummy = new Node(0);
  const copy = dummy;

  // * removing both pointers for original node one by one
  while (originalCurr) {
    const next = originalCurr.next.next;
    copy.next = originalCurr.next;
    originalCurr.next = next;

    copy = copy.next;
    originalCurr = next;
  }

  return dummy.next;
}
