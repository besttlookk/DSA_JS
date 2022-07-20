// !======================Links==============
// * https://practice.geeksforgeeks.org/problems/merge-two-bst-s/1
// * https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/

function merge(root1, root2) {
  const inArr1 = [];
  const inArr2 = [];

  inorder(root1, inArr1);
  inorder(root2, inArr2);

  const mergedArr = mergeTwoSortedArr(
    inArr1,
    inArr2,
    inArr1.length,
    inArr2.length
  );

  return buildTree(mergedArr, 0, mergedArr.length - 1);
}

function buildTree(arr, start, end) {
  if (start > end) return null;

  /* Get the middle element and make it root */
  let mid = parseInt((start + end) / 2);
  let node = new Node(arr[mid]);

  node.left = buildTree(arr, start, mid - 1);

  node.right = buildTree(arr, mid + 1, end);

  return node;
}

function inorder(root, arr) {
  if (root === null) return;

  inorder(root.left, arr);
  arr.push(root.data);
  inorder(root.right, arr);
}

function mergeTwoSortedArr(arr1, arr2, n, m) {
  let mergedArr = [];
  let i = 0; // for arr1
  let j = 0; // for arr2

  while (i < n && j < m) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < n) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < m) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

root1 = new Node(3);
root1.left = new Node(1);
root1.right = new Node(5);

root2 = new Node(4);
root2.left = new Node(2);
root2.right = new Node(6);

console.log(merge(root1, root2));
