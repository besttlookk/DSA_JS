// !========================Find modular node in a linked list ==============
// * from the biginning we have to find last such node when n % k is zero
// * that is when we divide n node as a group of k. we have to return last node of last complete such group

// !============Links ===============
// * https://www.geeksforgeeks.org/find-modular-node-linked-list/
// * https://practice.geeksforgeeks.org/problems/modular-node/1/

// !=============Method 1(hahing) ==================
function modularNode(head, k) {
  if (!head) return null;

  let curr = head;
  let count = 1; //* 0 index
  const map = new Map(); //* Since there can only be a unique key. The value with same key will get updated

  while (curr) {
    map.set(count % k, curr.data);
    curr = curr.next;
    count++;
  }

  return map.has(0) ? map.get(0) : -1;
}

// !==============Method 2(Two pointer) ============
function modularNode(head, k) {
  if (!head || k <= 0) return null;

  let curr = head;
  let count = 1;
  let resultNode = null;

  while (curr) {
    if (count % k === 0) {
      resultNode = curr; //* this will be updated again and again
    }
    curr = curr.next;
    count++;
  }
  return resultNode ? resultNode.data : -1;
}
