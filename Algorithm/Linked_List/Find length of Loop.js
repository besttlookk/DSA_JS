// !==========Links=====

// !==========Method 1

function countNodes(node) {
  let res = 1;
  let temp = node;

  while (temp.next !== node) {
    res++;
    temp = temp.next;
  }

  return res;
}

function countNodesinLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return countNodes(slow);
  }

  return 0;
}
