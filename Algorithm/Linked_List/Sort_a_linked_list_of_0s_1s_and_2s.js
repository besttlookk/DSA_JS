// !=========== Links =======
// * https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/
// * https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/sort-linked-list-0s-1s-2s-changing-links/

// !=========Method 1(count method) : Chnaging the vale and not the link==============
// * Following steps can be used to sort the given linked list.

// *  # Traverse the list and count the number of 0s, 1s, and 2s. Let the counts be n1, n2, and n3 respectively.
// *  # Traverse the list again, fill the first n1 nodes with 0, then n2 nodes with 1, and finally n3 nodes with 2.
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

// !=================================Method 2(Optimised above code)=========================
function segregate(head) {
  let count = [0, 0, 0];
  let curr = head;

  while (curr !== null) {
    count[curr.data]++;
    curr = curr.next;
  }

  curr = head;

  //* Let say count[0] = n1, count[1] = n2 and  count[2] = n3;
  //*  now start traversing list from head node,
  //*  1) fill the list  with 0, till n1 > 0
  //* 2) fill the list  with 1, till n2 > 0
  //*  3) fill the list with 2, till n3 > 0

  let i = 0;
  while (curr !== null) {
    if (count[i] === 0) {
      i++;
    } else {
      curr.data = i;
      count[i]--;
      curr = curr.next;
    }
  }

  return head;
}
// !========================================Method 3 (Changing links)=============
function segregate(head) {
  if (head === null || head.next === null) return head;
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

// !==============================Method 4(Optimized above code)============================

// * Time Complexity: O(n) where n is a number of nodes in linked list.
// Only one traversal of the linked list is needed.
// Auxiliary Space: O(1).
function segregate(head) {
  if (head === null || head.next === null) return head;

  const zeroH = new Node(-1);
  const oneH = new Node(-1);
  const twoH = new Node(-1);

  let zeroT = zeroH;
  let oneT = oneH;
  let twoT = twoH;

  let curr = null;

  while (curr !== null) {
    if (curr.data === 0) {
      zeroT.next = curr;
      zeroT = zeroT.next;
      curr = curr.next;
    } else if (curr.data === 1) {
      oneT.next = curr;
      oneT = oneT.next;
      curr = curr.next;
    } else {
      twoT.next = curr;
      twoT = twoT.next;
      curr = curr.next;
    }
  }

  // * Attach three lists
  zeroT.next = oneH.next === null ? twoH.next : oneH.next;

  oneT.next = twoH.next;
  twoT.next = null;

  return zeroH.next;
}
