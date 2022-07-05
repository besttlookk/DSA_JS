// !========= Inorder Tree Traversal without Recursion
// * Using Stack is the obvious way to traverse tree without recursion.

// !===============================links
// * https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/
// * https://practice.geeksforgeeks.org/problems/inorder-traversal-iterative/1/?page=2&category[]=Stack&sortBy=submissions

// * Time Complexity: O(n)
// * Space Complexity: O(n)
/*
function inorder(root) {
  let s = [];
  let ans = [];
  if (root === null) return ans;

  let curr = root;

  // traverse the tree
  while (curr !== null || s.length > 0) {
    //* Reach the left most Node of the curr Node
    while (curr !== null) {
      //* place pointer to a tree node on the stack before traversing the node's left subtree
      s.push(curr);
      curr = curr.left;
    }

    curr = s.pop();
    ans.push(curr.data);

    // * we have visited the node and its left subtree. Now, it's right subtree's turn
    curr = curr.right;
  }

  return ans;
}
*/

function inOrder(root) {
  const ans = [];
  const st = [];
  if (root === null) return ans;
  let curr = root;

  while (true) {
    if (curr !== null) {
      st.push(curr);
      curr = curr.left;
    } else {
      if (st.length === 0) break;
      curr = st.pop();
      ans.push(curr.key);

      curr = curr.right;
    }
  }
  return ans;
}

// !======Inorder Tree Traversal without recursion and without stack!==========
// * Using Morris Traversal, we can traverse the tree without using stack and recursion.
// * The idea of Morris Traversal is based on Threaded Binary Tree. In this traversal, we first create links to Inorder successor and print the data using these links, and finally revert the changes to restore original tree.
// !==================links
// * https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/

//!===================Iterative Preorder Traversal ===================
// !======Links
// * https://practice.geeksforgeeks.org/problems/preorder-traversal-iterative/1/?page=2&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/iterative-preorder-traversal/

function preOrder(root) {
  const st = [];
  const ans = [];
  if (root === null) return ans;
  let curr = root;
  st.push(curr);

  while (st.length > 0) {
    curr = st.pop();
    ans.push(curr.data);

    if (curr.right) st.push(curr.right);
    if (curr.left) st.push(curr.left);
  }

  return ans;
}

// !===============Postorder Traversal (Iterative)  ====================

// !====Links
// * https://practice.geeksforgeeks.org/problems/postorder-traversal-iterative/1/?page=2&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/

function postOrder(node) {}
