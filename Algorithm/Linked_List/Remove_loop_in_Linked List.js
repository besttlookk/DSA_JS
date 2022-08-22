// !==================================== Detect and Remove Loop in a Linked List =========================
// * Once we have a pointer to the last node, we can make the next of this node NULL and the loop is gone.
// * We can easily use Hashing or Visited node techniques (discussed in the above-mentioned post) to get the pointer to the last node.
// * The idea is simple: the very first node whose next is already visited (or hashed) is the last node.

// * We can also use the Floyd Cycle Detection algorithm to detect and remove the loop.
// *  In Floyd’s algo, the slow and fast pointers meet at a loop node. We can use this loop node to remove the cycle.
// * There are following two different ways of removing the loop when Floyd’s algorithm is used for loop detection.
// !=============================Links ============
// * https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/

// !=====================================Method 1 (Check one by one) ====================
// * We know that Floyd’s Cycle detection algorithm terminates when fast and slow pointers meet at a common point.
// *  We also know that this common point is one of the loop nodes (2 or 3 or 4 or 5 in the above diagram).
// * . Store the address of this in a pointer variable say ptr2.
// * After that start from the head of the Linked List and check for nodes one by one if they are reachable from ptr2.
// * Whenever we find a node that is reachable, we know that this node is the starting node of the loop in the Linked List and we can get the pointer to the previous of this node.

// !==================================== Method 2 (Better Solution)  =====================
// * This method is also dependent on Floyd’s Cycle detection algorithm.
// * Detect Loop using Floyd’s Cycle detection algorithm and get the pointer to a loop node.
// * Count the number of nodes in the loop. Let the count be k.
// * Fix one pointer to the head and another to a kth node from the head.
// * Move both pointers at the same pace, they will meet at the loop starting node.
// * Get a pointer to the last node of the loop and make the next of it NULL.

// * Expected time complexity: O(N)
// *  Expected auxiliary space: O(1)
function detectLoop(head) {
  let slow = head;
  let fast = head;

  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return slow;
    }
  }

  return null;
}
function removeLoop(head) {
  let meet = detectLoop(head);

  if (!meet) return false;
  let start = head;

  while (start != meet) {
    start = start.next;
    meet = meet.next;
  }

  while (meet.next !== start) {
    meet = meet.next;
  }

  meet.next = null;
}

// !==========================Method 3===================
function removeLoop(head) {
  let slow = head;
  let fast = head;
  let prev = head;

  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }

  if (slow == fast) {
    fast = head;
    while (slow != fast) {
      prev = slow;
      slow = slow.next;
      fast = fast.next;
    }

    prev.next = null;
  } else return;
}
