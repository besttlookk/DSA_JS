// !=======Links
// * https://practice.geeksforgeeks.org/problems/node-at-a-given-index-in-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !==========Method 1
function GetNth(head, index) {
  let current = head;

  while (current !== null && current.next !== null && index > 1) {
    current = current.next;
    index--;
  }

  return current.data;
}
