// !============ Links =============
// * https://practice.geeksforgeeks.org/problems/identical-linked-lists/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !==============Method 1=============

function areIdentical(head1, head2) {
  let p1 = head1;
  let p2 = head2;

  while (p1 && p2) {
    if (p1.data !== p2.data) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  if (p1 & !p2 || (!p1 && p2)) return false;

  return true;
}
