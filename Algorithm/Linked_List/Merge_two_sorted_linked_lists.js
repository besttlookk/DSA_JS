// !=========== Links ==========
// * https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/

// !===================Method 1(Using Dummy Nodes) ====================
// * The strategy here uses a temporary dummy node as the start of the result list.
// *  The pointer Tail always points to the last node in the result list, so appending new nodes is easy.

// * The dummy node gives the tail something to point to initially when the result list is empty.
// *  This dummy node is efficient, since it is only temporary, and it is allocated in the stack.
// * The loop proceeds, removing one node from either ‘a’ or ‘b’, and adding it to the tail.
// * When We are done, the result is in dummy.next.
/*
function sortedMerge(head1, head2) {
  //* a dummy first node to hang the result on
  let dummyNode = new Node(0);

  //* tail points to the last result node
  let tail = dummyNode;

  while (true) {
    // * Jab list 1 pehle exhaust ho jaye to joint with list2
    if (head1 === null) {
      tail.next = head2;
      break;
    }

    if (head2 === null) {
      tail.next = head1;
      break;
    }
    if (head1.data <= head2.data) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }

    tail = tail.next;
  }
  return dummyNode.next;
}
*/
// !=========Method 2 (Using Recursion): IN-PLACE =================
// * Merge is one of those nice recursive problems where the recursive solution code is much cleaner than the iterative code.
// *  You probably wouldn’t want to use the recursive version for production code, however, because it will use stack space which is proportional to the length of the lists.
function SortedMerge(A, B) {
  if (A == null) return B;
  if (B == null) return A;

  if (A.data < B.data) {
    A.next = SortedMerge(A.next, B);
    return A;
  } else {
    B.next = SortedMerge(A, B.next);
    return B;
  }
}

// !============Method 3 (Iterative) : IN-PLACE ==================
// * : This approach is very similar to the above recursive approach.
// *  Compare both the lists where the list with a smaller head value is the first list.
function sortedMerge(head1, head2) {
  if (head1 === null) return head2;
  if (head1 === null) return head1;

  if (head1.data < head2.data) {
    return mergeUtil(head1, head2);
  } else {
    return mergeUtil(head2, head1);
  }
}

function mergeUtil(h1, h2) {
  //* if only one node in first list
  //* simply point its head to second list
  if (h1.next == null) {
    h1.next = h2;
    return h1;
  }

  //* Initialize current and next pointers of
  //* both lists
  let curr1 = h1;
  let curr2 = h2;
  let next1 = h1.next;
  let next2 = h2.next;

  while (next1 != null && curr2 != null) {
    // if curr2 lies in between curr1 and next1
    // then do curr1->curr2->next1
    if (curr2.data >= curr1.data && curr2.data <= next1.data) {
      next2 = curr2.next;
      curr1.next = curr2;
      curr2.next = next1;

      // now let curr1 and curr2 to point
      // to their immediate next pointers
      curr1 = curr2;
      curr2 = next2;
    } else {
      // if more nodes in first list
      if (next1.next != null) {
        next1 = next1.next;
        curr1 = curr1.next;
      }

      // else point the last node of first list
      // to the remaining nodes of second list
      else {
        next1.next = curr2;
        return h1;
      }
    }
  }
  return h1;
}
// !============Solution 3 (In -place)===========
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
