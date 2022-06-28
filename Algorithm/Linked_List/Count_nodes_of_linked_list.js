// !============== Link
// * https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !=======================Method 1===============
function getCount(head) {
  let count = 1;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}
