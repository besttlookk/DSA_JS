class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

function printList(node) {
  let str = "";
  while (node != null) {
    str += node.data + " ";
    node = node.next;
  }
  console.log(str);
}
// !========== link
// * https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/reverse-a-linked-list/

// !=====================Method 1(Iterative) ================
// * Time Complexity: O(n)
// * Auxiliary Space: O(1)
/*
function reverseList(head) {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = current.next;
    currentNode.next = prevNode;

    // * before going to next iteration set the prev node
    prevNode = currentNode;
    currentNode = nextNode; //* now move the current node forward
  }

  return prevNode; //* it is new head
}
*/

// !================Method 2(A Simpler and Tail Recursive Method) ================
function reverseList(head, curr = head, prev = null) {
  //* If head is initially null OR list is empty
  if (head == null) return head;

  if (curr === null) {
    // * that means prev is on the last node. we need to make it a head and return it
    head = prev;
    return head;
  }

  let next = curr.next;
  curr.next = prev;

  head = reverseList(head, next, curr);
  return head;
}

// !====================Method 3(recursive) ==================

// * 1) Divide the list in two parts - first node and rest of the linked list.
// * 2) Call reverse for the rest of the linked list.
// * 3) Link rest to first.
// * 4) Fix head pointer
/*
function reverseList(head) {
  if (head === null || head.next === null) return head;

  let rest = reverseList(head.next); //* it will return last node of the list
  head.next.next = head;
  head.next = null;

  return rest;
}
*/
// !===============Method 4 (Sack) ==================

function reverseList(head) {
  const st = [];
  let curr = head;

  while (curr) {
    st.push(curr);
    curr = curr.next;
  }

  head = st.pop();
  curr = head;

  while (st.length !== 0) {
    curr.next = st.pop();
    curr = curr.next;
  }

  curr.next = null;
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

head = reverseList(head);

console.log(printList(head));
