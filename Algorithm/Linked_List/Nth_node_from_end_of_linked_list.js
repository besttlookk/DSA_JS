// ! ================Links ============
// * https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/

// !=============Method 1(Brute force) ===========
// * Time complexity: O(n) where n is size of the linked list
// * Auxiliary Space: O(1)

function getNthFromLast(head, n) {
  let curr = head;
  let len = 1;

  while (curr) {
    len++;
    curr = curr.next;
  }

  if (len < n) return null;

  curr = head;

  for (let i = 1; i < len - n + 1; i++) {
    curr = curr.next;
  }

  return curr;
}

// ! =============Method 2(Using Hash table) =============
function getNthFromLast(head, n) {
  let map = new Map();
  let curr = head;
  let len = 1;

  while (curr) {
    map.set(len, curr);
    curr = curr.next;
    len++;
  }

  if (!map.has(len - n + 1)) return null;

  return map.get(len - n + 1);
}

// !=============Method 3(Two pointer) =============

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
