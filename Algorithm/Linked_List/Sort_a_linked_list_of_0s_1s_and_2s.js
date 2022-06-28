// !=========== Links =======
// * https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/
// * https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !=========Method 1(count method) ==============
/*
function segregate(head) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let current = head;

  while (current !== null) {
    if (current.data === 0) count0++;
    if (current.data === 1) count1++;
    if (current.data === 2) count2++;
    current = current.next;
  }

  current = head;

  while (count0 > 0) {
    current.data = 0;
    current = current.next;
    count0--;
  }

  while (count1 > 0) {
    current.data = 1;
    current = current.next;
    count1--;
  }

  while (count2 > 0) {
    current.data = 2;
    current = current.next;
    count2--;
  }

  return head;
}
*/
// !=========Method 2 ((Dutch National Flag Method))=============
function segregate(head) {
  if (!head) return;
  if (head.next === null) return head;
  let zeroTail = null;
  let oneTail = null;
  let twoTail = null;
  let zeroHead = new Node(-1);
  let oneHead = new Node(-1);
  let twoHead = new Node(-1);

  let current = head;

  while (current) {
    if (current.data === 0) {
      if ((zeroHead, data === -1)) {
        zeroTail = current;
        zeroHead = current;
      } else {
        zeroTail.next = current;
        zeroTail = zeroTail.next;
      }
    }

    if (current.data === 1)
      if (oneHead.data === -1) {
        oneTail = current;
        oneHead = current;
      } else {
        oneTail.next = current;
        oneTail = oneTail.next;
      }
    if (current.data === 2)
      if (twoHead.data === -1) {
        twoTail = current;
        twoHead = current;
      } else {
        twoTail.next = current;
        twoTail = twoTail.next;
      }

    current = current.next;
  }

  if (zeroHead.data === -1) {
    oneTail.next = twoHead;
    twoTail.next = null;
    return oneHead;
  }

  if (oneHead.data === -1) {
    zeroTail.next = twoHead;
    twoTail.next = null;
    return zeroHead;
  }

  if (twoHead.data === -1) {
    zeroTail.next = oneHead;
    oneTail.next = null;
    return zeroHead;
  }

  // !* if all 3 are present
  zeroTail.next = oneHead;
  oneTail.next = twoHead;
  twoHead.next = null;

  return zeroHead;
}
