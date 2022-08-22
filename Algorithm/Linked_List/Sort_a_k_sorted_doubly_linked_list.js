// !=============================Sort a k sorted doubly linked list===========================

// !================================Links ==================================
// * https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/

// !=================================Method 1(insertion sort)=======================
// Time Complexity: O(n*k)
// Auxiliary Space: O(1)
// !================================Method 2(Min Heap/ Priority queue)==================
function sortAKSortedDLL(head, k) {}

// !==================Below is working java code ==
/*
  public void sortAKSortedDLL(int k){
        if(head == null ) return;

        PriorityQueue<ListNode> pq = new PriorityQueue<>(new CompareNode());
        ListNode newHead = null, tail = null;

        // Create a Min Heap of first (k+1) elements from input doubly linked list.
        for(int i = 0; head != null && i <=k; i++){
            pq.add(head);
            head = head.next;
        }
    // loop till there are elements in 'pq'
        while (!pq.isEmpty()){
            if(newHead == null){
                newHead = pq.peek();
                newHead.prev = null;
                tail = newHead;

            }else{
                tail.next = pq.peek();
                pq.peek().prev = tail;
                tail = tail.next;
            }
            // remove element from 'pq'
            pq.poll();

            // if there are more nodes left in the input list
            if(head != null){
                pq.add(head);
                head = head.next;
            }
        }
        tail.next = null;
        head = newHead;

    }

    */
