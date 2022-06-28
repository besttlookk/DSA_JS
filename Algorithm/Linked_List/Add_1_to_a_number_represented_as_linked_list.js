// !=============== Links ============
// * https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/add-1-number-represented-linked-list/

// !================Method 1 =============
// * Reverse given linked list. For example, 1-> 9-> 9 -> 9 is converted to 9-> 9 -> 9 ->1.
// *Start traversing linked list from leftmost node and add 1 to it. If there is a carry, move to the next node. Keep moving to the next node while there is a carry.
// * Reverse modified linked list and return head.

// * Time Complexity: O(n)
// * Auxiliary Space: O(1)
/*
function reverse(node) {
  let current = node;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}

function addOneUtil(head) {
  let result = head;
  let temp;
  let sum;
  let carry = 1;

  while (head !== null) {
    sum = carry + head.data;

    //* update carry for next calculation
    carry = sum >= 10 ? 1 : 0;

    //* update sum if it is greater than 10
    sum = sum % 10;

    head.data = sum;

    // Move head and second pointers to next nodes
    temp = head;
    head = head.next;
  }

  //* if some carry is still there, add a new node to
  //* result list.
  if (carry > 0) temp.next = new Node(carry);

  return result;
}

function addOne(node) {
  let head = reverse(node);

  //* Add one from left to right of reversed list
  head = addOneUtil(head);

  // Reverse the modified list
  return reverse(head);
}

*/

// !==================Method 2 (Recursive Implementation: ) ===================
// * We can recursively reach the last node and forward carry to previous nodes. Recursive solution doesn’t require reversing of linked list. We can also use a stack in place of recursion to temporarily hold nodes.

//* Time Complexity: O(n)
//* Here n is the number of nodes in the linked list.
//* Auxiliary Space: O(n)
//* The extra space is used in recursion call stack.

//* Recursively add 1 from end to beginning and returns
//* carry after all nodes are processed.
function addWithCarry(head) {
  // If linked list is empty, then
  // return carry
  if (head == null) return 1; //* base case

  //* Add carry returned be next node call
  let res = head.data + addWithCarry(head.next);

  // Update data and return new carry
  head.data = res % 10;
  return parseInt(res / 10);
}

function addOne(node) {
  //* Add 1 to linked list from end to beginning
  let carry = addWithCarry(head);
}
