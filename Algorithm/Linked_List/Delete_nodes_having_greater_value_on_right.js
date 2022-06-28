// !=========== links
// * https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !============Method 1 =========

function reverse(node) {
  let current = node;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}
function compute(head) {
  let newHead = reverse(head);
  let prev = newHead;
  let current = newHead.next;
  let maxSoFar = newHead.data;

  while (current) {
    if (current.data >= maxSoFar) {
      maxSoFar = current.data;
      prev = current;
      current = current.next;
    } else {
      prev.next = current.next;
      current = prev.next;
    }
  }

  return reverse(newHead);
}
