// !=========== links
// * https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/delete-nodes-which-have-a-greater-value-on-right-side/

// !====================================Method 1 ============================
// * 1. Reverse the list.
// * 2. Traverse the reversed list. Keep max till now. If the next node is less than max, then delete the next node, otherwise max = next node.
// * 3. Reverse the list again to retain the original order.

// * Time Complexity: O(n)

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
