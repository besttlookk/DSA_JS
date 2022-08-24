// !==================Pairwise swap elements of a linked list=================

// !==========================Links========================
// * https://practice.geeksforgeeks.org/problems/pairwise-swap-elements-of-a-linked-list-by-swapping-data/1?page=1&category[]=Linked%20List&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !==================Method 1=================
function pairWiseSwap(node) {
  let curr = node;

  while (curr != null && curr.next != null) {
    let temp = curr.data;
    curr.data = curr.next.data;
    curr.next.data = temp;
    curr = curr.next.next;
  }

  return node;
  //your code here
}
