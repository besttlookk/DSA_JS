// ! ================Links ============
// * https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions

// !=============Method 1(Two pointer) =============

function getNthFromLast(head, n) {
  let behind = head;
  let ahead = head;
  let count = 1;

  while (count < n) {
    if (ahead === null || ahead.next === null) return -1;
    ahead = ahead.next;
    count++;
  }

  while (ahead !== null && ahead.next !== null) {
    behind = behind.next;
    ahead = ahead.next;
  }

  return behind.data;
}
