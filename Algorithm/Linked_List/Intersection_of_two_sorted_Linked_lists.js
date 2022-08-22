// !===========Links
// * https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/intersection-of-two-sorted-linked-lists/

// !================================Method 1===============

// * Time Complexity: O(m+n) where m and n are number of nodes in first and second linked lists respectively.
// * Only one traversal of the lists are needed.
// * Auxiliary Space: O(min(m, n)).
// * The output list can store at most min(m,n) nodes .

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

// !================================Method 2(Recursive Solution. )=================
// * Build a recursive function that takes two nodes and returns a linked list node. Compare the first element of both the lists

// * If they are similar then call the recursive function with the next node of both the lists.
// * Create a node with the data of the current node and put the returned node from the recursive function to the next pointer of the node created. Return the node created.

// * If the values are not equal then remove the smaller node of both the lists and call the recursive function.

// * Time Complexity: O(m+n) where m and n are number of nodes in first and second linked lists respectively.
// Only one traversal of the lists are needed.
// * Auxiliary Space: O(max(m, n)).
// The output list can store at most m+n nodes.

function findIntersection(head1, head2) {
  if (head1 == null || head2 === null) return null;

  if (head1.data < head2.data) return findIntersection(head1.next, head2);
  else if (head1.data > head2.data) return findIntersection(head1, head2.next);
  else {
    let temp = new Node(head1.data);
    temp.next = findIntersection(head1.next, head2.next);
    return temp;
  }
}

// !==============================Method 3 (Hashmap)======================
