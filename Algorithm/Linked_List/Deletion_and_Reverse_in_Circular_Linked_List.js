// !=============Deletion and Reverse in Linked List=================

// !==========================Links ================================
// * https://practice.geeksforgeeks.org/problems/deletion-and-reverse-in-linked-list/1

function deleteNode(head, d) {
  if (head == null) return null;

  let curr = head;
  let prev = null;

  while (curr.next !== head && curr.data !== d) {
    prev = curr;
    curr = curr.next;
  }

  // * If found the node
  if (curr.next !== head) {
    prev.next = curr.next;
    curr.next = null;
  }

  return head;
}

function reverse(head) {
  if (head == null || head.next == null) return head;

  let tail = head;

  while (tail.next !== head) tail = tail.next;

  let curr = null;
  let next = head;
  let prev = head;

  while (prev !== tail) {
    curr = next;
    next = curr.next;
    curr.next = prev;
    prev = curr;
  }

  head.next = tail;
  head = head.next;

  return head;
}
