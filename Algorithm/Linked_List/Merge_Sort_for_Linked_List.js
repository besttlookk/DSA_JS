// !============== links
// * https://practice.geeksforgeeks.org/problems/sort-a-linked-list/0/?page=2&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/merge-sort-for-linked-list/

// !===================Method 1 ===============

var head = null;

// node a, b;
class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function push(new_data) {
  /* allocate node */
  var new_node = new node(new_data);

  /* link the old list off the new node */
  new_node.next = head;

  /* move the head to point to the new node */
  head = new_node;
}

function getMiddle(head) {
  if (head === null) return head;
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(a, b) {
  var result = null;
  /* Base cases */
  if (a == null) return b;
  if (b == null) return a;

  /* Pick either a or b, and recur */
  if (a.val <= b.val) {
    result = a;
    result.next = merge(a.next, b);
  } else {
    result = b;
    result.next = merge(a, b.next);
  }
  return result;
}

function mergeSort(head) {
  if (head === null || head.next === null) return head;

  let middle = getMiddle(head);

  let nextofmiddle = middle.next;

  //* set the next of middle node to null
  middle.next = null;

  let left = mergeSort(head);

  let right = mergeSort(nextofmiddle);

  return merge(left, right);
}

function printList(headref) {
  let str = "";
  while (headref != null) {
    str += `${headref.val} `;
    headref = headref.next;
  }

  console.log(str);
}

push(3);
push(5);
push(2);
push(4);
push(1);

head = mergeSort(head);

printList(head);

// 3 5 2 4 1
