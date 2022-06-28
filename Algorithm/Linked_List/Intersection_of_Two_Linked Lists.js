// * Note: The order of nodes in this list should be same as the order in which those particular nodes appear in input list 1.
// *  Each of the two linked list contains distinct node values.

// !=======Links
// * https://practice.geeksforgeeks.org/problems/intersection-of-two-linked-list/0/?page=2&category[]=Linked%20List&sortBy=submissions
// * https://www.interviewbit.com/blog/intersection-of-two-linked-lists/#:~:text=The%20key%20idea%20to%20note,nodes%20in%20the%20given%20image.

// * Expected time complexity: O(m+n)
//*  Expected auxiliary space: O(m+n)

// !===================Methods(Hashing) ================

function findIntersection(head1, head2) {
  let set = new Set();
  let head = null;
  let tail = null;

  while (head2 !== null) {
    set.add(head2.data);
    head2 = head2.next;
  }

  while (head1 !== null) {
    if (set.has(head1.data)) {
      const newNode = new Node(head1.data);
      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
    head1 = head1.next;
  }

  return head;
}
