// !======================== Links ===============
// * https://practice.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/0/?page=2&category[]=Linked%20List&sortBy=submissions

// !=============== method 1 ================
function deleteNode(head, x) {
  let current = head;
  let count = 1;

  while (current && count < x) {
    current = current.next;
    count++;
  }

  if (current !== null) {
    if (current.next) current.next.prev = current.prev;
    if (current.prev) current.prev.next = current.next;

    return head;
  }

  return -1;
}
