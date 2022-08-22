// !===========================Links =======================
// * https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/
// * https://www.geeksforgeeks.org/reverse-linked-list-groups-given-size-set-2/?ref=rp
// * https://www.geeksforgeeks.org/reverse-a-singly-linked-list-in-groups-of-given-size-set-3/?ref=rp
// * https://www.geeksforgeeks.org/reverse-a-linked-list-in-groups-of-given-size-iterative-approach/?ref=rp
// * https://www.geeksforgeeks.org/reverse-a-singly-linked-list-in-groups-of-given-size-set-4-space-efficient-approach/?ref=rp

// !======================Method 1(Recursive)====================
// * Reverse the first sub-list of size k

// * Time Complexity: O(n).
// Traversal of list is done only once and it has ‘n’ elements.
// * Auxiliary Space: O(n/k).
// For each Linked List of size n, n/k or (n/k)+1 calls will be made during the recursion.

function reverse(node, k) {
  if (node === null) return null;

  let curr = node;
  let next = null;
  let prev = null;
  let count = 0;

  //* Reverse first k nodes of linked list
  // * It is the same code as "reverse a linklist"
  while (count < k && curr !== null) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;

    count++;
  }

  // * head is still pointing to the first ele which is how the last ele
  // * and next now points to the (kth + 1) element. call for revsrse again and make the head.next

  if (next !== null) {
    node.next = reverse(next, k);
  }

  //* prev is now head of input list
  return prev;
}

// !================================Method 2(Iterative)=======================
// * Create a dummy node and point it to the head of input i.e dummy->next = head.
// * Calculate the length of the linked list which takes O(N) time, where N is the length of the linked list.
// * Initialize three-pointers prev, curr, next to reverse k elements for every group.

// * Time Complexity: O(N) : While loop takes O(N/K) time and inner for loop takes O(K) time. So N/K * K = N. Therefore TC O(N)
// *Space Complexity: O(1) : No extra space is used.

function reverse(head, k) {
  // If head is NULL or K is 1 then return head
  if (head == null || head.next == null) return head;

  // creating dummy node
  const dummy = new Node(-1);
  dummy.next = head;

  // Initializing three points prev, curr, next
  let prev = dummy;
  let curr = dummy;
  let next = dummy;

  //* Calculating the length of linked list
  let count = 0;
  while (curr != null) {
    count++;
    curr = curr.next;
  }

  // Iterating till next is not NULL
  while (next != null) {
    // * Note: prev points tp the last node of the prev k-set. or dummy node
    // * curr points to the first element of new k-set
    curr = prev.next; // Curr position after every reverse group
    next = curr.next; // Next will always next to curr

    let toLoop = count > k ? k : count - 1; // toLoop will set to
    // count - 1 in case of remaining element

    // * For each loop value of curr is same.
    // * on each loop it stores the next.next value to preserve the ref for next loop
    for (let i = 1; i < toLoop; i++) {
      // 4 steps as discussed above
      curr.next = next.next; //* storing the refernece for next loop "next".
      next.next = prev.next; //* Main connection
      prev.next = next; //*Moving ahead dummy's next to next element
      next = curr.next;
    }
    prev = curr; // Setting prev to curr
    count -= k; // Update count
  }
  return dummy.next;
}

// !=================================Method 3(Using Stack)=============================
// * Firstly, push the k elements of the linked list in the stack
// * Now pop elements one by one and keep track of the previously popped node.
// * Point the next pointer of the prev node to the top element of the stack. Repeat this process, until NULL is reached.

// * ime Complexity: O(N), as we are using a loop to traverse N times. Where N is the number of nodes in the linked list.
// * Auxiliary Space: O(k), as we are using extra space for the stack.

function reverse(head, k) {
  const st = [];
  let curr = head;
  let prev = null;

  while (curr !== null) {
    //* Terminate the loop whichever comes first
    //* either current == NULL or count >= k
    let count = 0;
    while (curr !== null && count < k) {
      st.push(curr);
      curr = curr.next;
      count++;
    }

    //* Now pop the elements of stack one by one
    while (st.length) {
      // If final list has not been started yet.
      if (prev == null) {
        prev = st.pop();
        head = prev;
      } else {
        prev.next = st.pop();
        prev = prev.next;
      }
    }
  }
  // Next of last element will point to NULL.
  prev.next = null;
  return head;
}
