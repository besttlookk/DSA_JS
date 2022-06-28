//! =========== Links ================
// * https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/remove-duplicates-from-a-sorted-linked-list/

// * The nodes are arranged in a sorted way.

// !=========================Method 1 ==============
// * Traverse the list from the head (or start) node. While traversing, compare each node with its next node.
// * If the data of the next node is the same as the current node then delete the next node. Before we delete a node, we need to store the next pointer of the node

// * Time Complexity: O(n) where n is the number of nodes in the given linked list.
// * Space Complexity: O(1) ,
function removeDuplicates(head) {
  let current = head;

  while (current !== null) {
    let temp = current;

    /*Compare current node with the next node and
            keep on deleting them until it matches the current
            node data */
    while (temp !== null && current.data === temp.data) {
      temp = temp.next;
    }

    current.next = temp;
    current = current.next;
  }

  return head;
}
