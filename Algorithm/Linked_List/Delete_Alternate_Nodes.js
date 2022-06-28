// !=========== Links
// * https://practice.geeksforgeeks.org/problems/delete-alternate-nodes/0/?page=2&category[]=Linked%20List&sortBy=submissions

function deleteAlt(head) {
  if (!head) return null;

  let prev = head;
  let current = head.next;

  while (current !== null && prev !== null) {
    prev.next = current.next;
    current = null; //* free node
    prev = prev.next;
    if (prev) current = prev.next;
  }

  return head;
}
