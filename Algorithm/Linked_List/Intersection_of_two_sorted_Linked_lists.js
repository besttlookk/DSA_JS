// !===========Links
// * https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !=============Method 1===============

function findIntersection(head1, head2) {
  let p1 = head1;
  let p2 = head2;
  let head = null;
  let tail = null;

  while (p1 && p2) {
    if (p1.data < p2.data) p1 = p1.next;
    else if (p1.data > p2.data) p2 = p2.next;
    else {
      const newNode = new Node(p1.data);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
      p1 = p1.next;
      p2 = p2.next;
    }
  }

  return head;
}
