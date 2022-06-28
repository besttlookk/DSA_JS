// !=============Links =======
// * https://practice.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !===========Method 1 ==============

function deleteNode(head, x) {
  if (x === 1) return head.next;
  let current = head;
  let prev = null;
  let count = 1;

  while (current !== null && count < x) {
    prev = current;
    current = current.next;
    count++;
  }

  if (current !== null) {
    prev.next = current.next;
  }

  return head;
}
