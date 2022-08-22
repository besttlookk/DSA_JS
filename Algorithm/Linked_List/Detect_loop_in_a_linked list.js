// ! ==========================Floyd Cycle detection method
// !================Links
//* https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
// * https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1

// !===============================Solution 1: Hashing Approach:
// * Traverse the list one by one and keep putting the node addresses in a Hash Table. At any point, if NULL is reached then return false, and if the next of the current nodes points to any of the previously stored nodes in  Hash then return true.

// * Time complexity: O(n). Only one traversal of the loop is needed.
//* Auxiliary Space: O(n).  n is the space required to store the value in hashmap.

/*
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let head;

// * Inserts a new Node at front of the list.
function push(new_data) {
  const newNode = new Node(new_data);
  newNode.next = head;
  head = newNode;
}

function detectLoop(h) {
  let s = new Set();

  while (h != null) {
    // * If we have already has this node  in hashmap it means their is a cycle
    // * (Because you we encountering the node second time).

    if (s.has(h)) return true;

    //* If we are seeing the node for the first time, insert it in hash
    s.add(h); //* Address of node is getting aaded
    console.log({ s });

    h = h.next;
  }

  return false;
}

function print() {
  let current = head;

  console.log({ head });

  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

push(20);
push(4);
push(15);
push(10);

// print();
// console.log(detectLoop(head));

// * Create loop for testing
head.next.next.next.next = head;

console.log(detectLoop(head));

*/

// !== Solution 2: This problem can be solved without hashmap by modifying the linked list data structure.
// * Approach: This solution requires modifications to the basic linked list data structure.
// * Have a visited flag with each node.

//* Time complexity:O(n).
//* Auxiliary Space:O(1).

/*

//* Link list node
class Node {
  constructor(val) {
    let data = val;
    let next = null;
    let flag = false;
  }
}

function add(head, data) {
  const newNode = new Node(data);

  newNode.next = head;

  head = newNode;

  return head;
}

function detectLoop(head) {
  let current = head;

  while (current != null) {
    if (current.flag) return true;

    current.flag = true;

    current = current.next;
  }

  return false;
}

let head = null;

head = add(head, 20);
head = add(head, 4);
head = add(head, 15);
head = add(head, 10);

// console.log(detectLoop(head));

//* Create a loop for testing
head.next.next.next.next = head;
console.log(detectLoop(head));

*/

// !===== Solution 3: Floyd’s Cycle-Finding Algorithm

//* Time complexity: O(n).
//* Auxiliary Space:O(1).

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
      return true;
    }
  }

  return false;
}

push(20);
push(4);
push(15);
push(10);

// Create loop for testing
head.next.next.next.next = head;

console.log(detectLoop());
