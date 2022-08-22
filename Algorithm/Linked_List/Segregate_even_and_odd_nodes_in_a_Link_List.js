// !==============Links
// * https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list5035/0/?page=3&category[]=Linked%20List&sortBy=submissions

// !================Method 1 ===================

function divide(N, head) {
  if (!head) return;
  if (head.next === null) return head;

  let headEven = null;
  let tailEven = null;
  let headOdd = null;
  let tailOdd = null;
  let current = head;

  while (current) {
    if (current.data % 2 === 0) {
      if (headEven === null) {
        headEven = current;
        tailEven = current;
      } else {
        tailEven.next = current;
        tailEven = current;
      }
    } else {
      if (headOdd === null) {
        headOdd = current;
        tailOdd = current;
      } else {
        tailOdd.next = current;
        tailOdd = current;
      }
    }

    current = current.next;
  }

  if (headEven === null || headOdd === null) return head;

  tailEven.next = headOdd;
  tailOdd.next = null;
  return headEven;
}

// !=================Optimized above code

function divide(N, head) {
  const evenDummy = new Node(-1);
  const oddDummy = new Node(-1);
  let evenTail = evenDummy;
  let oddTail = oddDummy;

  let curr = head;

  while (curr != null) {
    if (curr.data % 2 == 0) {
      evenTail.next = curr;
      evenTail = evenTail.next;
    } else {
      oddTail.next = curr;
      oddTail = oddTail.next;
    }
    curr = curr.next;
  }

  evenTail.next = oddDummy.next;
  oddTail.next = null;

  return evenDummy.next;
}
