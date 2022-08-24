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

// !=====================Method 2================
function deleteAlt(head) {
  if (!head) return null;

  let current = head;

  while (current !== null && current.next !== null) {
    current.next = current.next.next;
    current = current.next;
  }

  return head;
}
