let head; // head of list

/* Linked list Node*/
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

function push(new_data) {
  let new_node = new Node(new_data);
  new_node.next = head;

  head = new_node;
}

function detectLoop() {
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

function firstNode() {
  const meet = detectLoop();
  const start = head;

  while (start != meet) {
    start = start.next;
    meet = meet.next;
  }

  return start;
}
