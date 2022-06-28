// !=============Links ===========
// * https://practice.geeksforgeeks.org/problems/occurence-of-an-integer-in-a-linked-list/0/?page=2&category[]=Linked%20List&sortBy=submissions

function count(head, search_for) {
  let current = head;
  let count = 0;

  while (current) {
    if (current.data === search_for) count++;
    current = current.next;
  }

  return count;
}
