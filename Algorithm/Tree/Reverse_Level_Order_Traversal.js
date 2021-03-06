// !======Reverse Level Order Traversal =======
// * the traversal must begin from the last level.
// * Both methods for normal level order traversal can be easily modified to do reverse level order traversal.

// !==============Links =====================
// * https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/0/?page=1&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/reverse-level-order-traversal/

// !=============METHOD 2 (Using Queue and Stack) ================
// *  The idea is to use a deque(double-ended queue) to get the reverse level order.
function reverseLevelOrder(root) {
  let S = [];
  let Q = [];
  let ans = [];
  Q.push(node);

  while (Q.length != 0) {
    node = Q.shift();
    S.push(node); //* stack will reverse the order

    node.right && Q.push(node.right); //* right side first
    node.left && Q.push(node.left);
  }

  while (S.length !== 0) {
    ans.push(S.pop());
  }

  return ans;
}
