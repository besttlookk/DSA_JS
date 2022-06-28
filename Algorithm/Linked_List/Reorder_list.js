// !================Links ============
// * https://practice.geeksforgeeks.org/problems/reorder-list/0/?page=3&category[]=Linked%20List&sortBy=submissions

// !==============Method 1 ==================

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverse(node) {
  let current = node;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}

function reorderList(node) {
  let p1 = node;
  let middle = getMiddle(node);

  let nextAfterMiddle = middle.next;

  middle.next = null;

  let p2 = reverse(nextAfterMiddle);

  while (p2 !== null) {
    let temp1 = p1.next;
    let temp2 = p2.next;

    p1.next = p2;
    p2.next = temp1;

    p1 = temp1;
    p2 = temp2;
  }

  return node;
}
