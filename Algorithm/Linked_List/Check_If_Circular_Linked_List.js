// !============= Links
// * https://practice.geeksforgeeks.org/problems/circular-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

function isCircular(head) {
  if (!head) return true;
  let current = head;

  while (current !== null) {
    current = current.next;

    if (current === head) return true;
  }

  return false;
}
