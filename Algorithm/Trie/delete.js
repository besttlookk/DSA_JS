// !==================== Trie | (Delete)
// * During delete operation we delete the key in bottom up manner using recursion. The following are possible conditions when deleting key from trie,
// * 1. Key may not be there in trie. Delete operation should not modify trie.
// * 2. Key present as unique key (no part of key contains another key (prefix), nor the key itself is prefix of another key in trie). Delete all the nodes.
// * Key is prefix key of another long key in trie. Unmark the leaf node.
// * Key present in trie, having atleast one other key as prefix key. Delete nodes from end of key until first leaf node of longest prefix key.

function deleteKey(root, key, depth = 0) {
  // If tree is empty
  if (root == null) return null;

  //* If last character of key is being processed
  if (depth == key.length) {
    //* This node is no more end of word after
    //* removal of given key
    if (root.isEndOfWord) root.isEndOfWord = false;

    // If given is not prefix of any other word
    if (isEmpty(root)) {
      root = null;
    }

    return root;
  }

  // If not last character, recur for the child
  // obtained using ASCII value
  let index = key[depth].charCodeAt(0) - "a".charCodeAt(0);
  root.children[index] = remove(root.children[index], key, depth + 1);

  // If root does not have any child (its only child got
  // deleted), and it is not end of another word.
  if (isEmpty(root) && root.isEndOfWord == false) {
    root = null;
  }

  return root;
}

// Returns true if root has no children, else false
function isEmpty(root) {
  for (let i = 0; i < 26; i++) if (root.children[i] != null) return false;
  return true;
}
