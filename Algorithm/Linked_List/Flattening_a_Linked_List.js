// !================================
// * Given a linked list where every node represents a linked list and contains two pointers of its type:

// *  Pointer to next node in the main list (we call it ‘right’ pointer in the code below)
// *  Pointer to a linked list where this node is headed (we call it the ‘down’ pointer in the code below).

// * Note: All linked lists are sorted and the resultant linked list should also be sorted

class Node {
  constructor(val) {
    this.data = val;
    this.down = null;
    this.next = null;
  }
}

// !============ ================Link list ========
// * https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/flattening-a-linked-list/

// !========================= Flattening a Linked List using Merging:==========================
// * The idea is to use the Merge() process of merge sort for linked lists. Use merge() to merge lists one by one, recursively merge() the current list with the already flattened list.
// * The down pointer is used to link nodes of the flattened list.

// * Follow the given steps to solve the problem:

// Recursively call to merge the current linked list with the next linked list
// If the current linked list is empty or there is no next linked list then return the current linked list (Base Case)
// Start merging the linked lists, starting from the last linked list
// After merging the current linked list with the next linked list, return the head node of the current linked list

// * Time Complexity: O(N * N * M) – where N is the no of nodes in the main linked list and M is the no of nodes in a single sub-linked list

function flatten(head) {
  // Base Cases
  if (head == null || head.right == null) return head;

  // recur for list on right
  head.right = flatten(head.right);

  // now merge
  head = merge(head, head.right);

  // return the head
  // it will be in turn merged with its left
  return head;
}

// function merge(a, b) {
//   // if first linked list is empty then second
//   // is the answer
//   if (a == null) return b;

//   // if second linked list is empty then first
//   // is the result
//   if (b == null) return a;

//   // compare the data members of the two linked lists
//   // and put the larger one in the result
//   let result;

//   if (a.data < b.data) {
//     result = a;
//     result.down = merge(a.down, b);
//   } else {
//     result = b;
//     result.down = merge(a, b.down);
//   }

//   result.right = null;
//   return result;
// }

function merge(a, b) {
  // if first linked list is empty then second
  // is the answer
  if (a === null) return b;

  // if second linked list is empty then first
  // is the result
  if (b === null) return a;

  let head = new Node(-1);
  let prev = head;

  let h1 = a;
  let h2 = b;

  while (h1 !== null && h2 !== null) {
    if (h1.data < h2.data) {
      prev.bottom = h1;
      h1 = h1.bottom;
    } else {
      prev.bottom = h2;
      h2 = h2.bottom;
    }

    prev = prev.bottom;
  }

  if (h1 !== null) {
    prev.bottom = h1;
  } else {
    prev.bottom = h2;
  }

  return head.bottom;
}

// !============ Flattening a Linked List using Priority Queues:
// * The idea is, to build a Min-Heap and push head node of every linked list into it and then use Extract-min function to get minimum element from priority queue and then move forward in that linked list.

// Create a priority queue(Min-Heap) and push the head node of every linked list into it
// While the priority queue is not empty, extract the minimum value node from it and if there is a next node linked to the minimum value node then push it into the priority queue
// Also, print the value of the node every time after extracting the minimum value node
