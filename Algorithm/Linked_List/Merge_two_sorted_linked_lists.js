// !=========== Links ==========
// * https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !============Solution 1
function sortedMerge(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let head = null;
  let tail = null;

  if (head1.data <= head2.data) {
    head = head1;
    tail = head1;
    head1 = head1.next;
  } else {
    head = head2;
    tail = head2;
    head2 = head2.next;
  }

  while (head1 !== null && head2 !== null) {
    if (head1.data < head2.data) {
      tail.next = head1;
      tail = tail.next;
      head1 = head1.next;
    } else {
      tail.next = head2;
      tail = tail.next;
      head2 = head2.next;
    }
  }

  if (head1 !== null) {
    tail.next = head1;
  }

  if (head2 !== null) {
    tail.next = head2;
  }

  return head;
}
