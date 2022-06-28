// !==========Links ============
// * https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/

// !===============Method 1

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

  return false;
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
