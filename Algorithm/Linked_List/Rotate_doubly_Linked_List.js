// !==================Rotate doubly Linked List==========================
// * Given a doubly-linked list, rotate the linked list counter-clockwise by N nodes. Here N is a given positive integer and is smaller than the count of nodes in linked list.

// * To rotate the Doubly linked list, first, we need to traverse through the linked list and find the address of the last node.
// *  # first check if k is not greater than total number of nodes
// *  # while doing above step store the nthNode
// * Then make it a circular linked list.
// * Then move the head as well as a temp by n nodes.
// * Then make the linked list as un-circular.

// !============================Links ==============================
// * https://practice.geeksforgeeks.org/problems/rotate-doubly-linked-list-by-p-nodes/1
// * https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/

// !==================================Method 1==============================

// * Time Complexity: O(N)
// * Space Complexity: O(1)

function update(head, p) {
  if (head === null || head.next === null || p === 0) return head;

  // Let us understand the below code
  // for example N = 2 and
  // list = a <-> b <-> c <-> d <-> e.

  let current = head;

  // current will either point to Nth
  // or NULL after this loop. Current
  // will point to node 'b' in the above example
  let count = 1;

  while (count < N && current !== null) {
    current = current.next;
    count++;
  }

  // If current is NULL, N is greater
  // than or equal to count of nodes
  // in linked list. Don't change the list in this case
  if (current == null) return;

  // current points to Nth node. Store
  // it in a variable. NthNode points to
  // node 'b' in the above example
  let NthNode = current;

  // current will point to last node
  // after this loop current will point
  // to node 'e' in the above example
  while (current.next != null) current = current.next;

  // Change next of last node to previous
  // head. Next of 'e' is now changed to node 'a'
  current.next = head;

  // Change prev of Head node to current
  // Prev of 'a' is now changed to node 'e'
  head.prev = current;

  // Change head to (N+1)th node
  // head is now changed to node 'c'
  head = NthNode.next;

  // Change prev of New Head node to NULL
  // Because Prev of Head Node in Doubly
  // linked list is NULL
  head.prev = null;

  // change next of Nth node to NULL
  // next of 'b' is now NULL
  NthNode.next = null;
}

// !===========================Method 2=========================
function update(head, p) {
  if (head === null || head.next === null || p === 0) return head;

  let curr = head;

  while (p) {
    curr = curr.next;
    p--;
  }

  let tail = curr.prev;
  let newHead = curr;

  // * Breaking chain;
  tail.next = null;
  newHead.prev = null;

  while (curr.next !== null) {
    curr = curr.next;
  }

  // * creating link between old last node and old curr node
  curr.next = head;
  head.prev = curr;

  head = newHead;
}
