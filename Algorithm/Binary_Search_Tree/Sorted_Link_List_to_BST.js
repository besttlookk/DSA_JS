// !=========Sorted Link List to BST

// !=============Links
// * https://practice.geeksforgeeks.org/problems/sorted-list-to-bst/1
// * https://www.geeksforgeeks.org/sorted-linked-list-to-balanced-bst/

function sortedListToBST(head) {
  const n = countNodes(head);

  return helper(head, n);
}

function helper(head, n) {
  if (n <= 0) return null;

  let left = helper(parseInt(n / 2));

  //* head_ref now refers to middle node, make middle node as root of BST

  let root = new Node(head.data);

  root.left = left;

  //* Change head pointer of Linked List for parent recursive calls
  head = head.next;

  root.right = helper(n - parseInt(n / 2) - 1);
  return root;
}

function countNodes(root) {
  let curr = root;
  let count = 0;

  while (!curr) {
    curr = curr.next;
    count++;
  }

  return count;
}
