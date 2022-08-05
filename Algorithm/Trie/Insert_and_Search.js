// !=======================Insert and Search
// * Trie is an efficient information retrieval data structure
// * Using Trie, search complexities can be brought to optimal limit (key length).
// * If we store keys in a binary search tree, a well balanced BST will need time proportional to M * log N, where M is the maximum string length and N is the number of keys in the tree.
// * Using Trie, we can search the key in O(M) time. However, the penalty is on Trie storage requirements

// * Every node of Trie consists of multiple branches. Each branch represents a possible character of keys.
// * We need to mark the last node of every key as the end of the word node.
// * A Trie node field isEndOfWord is used to distinguish the node as the end of the word node. A simple structure to represent nodes of the English alphabet can be as follows,

// // Trie node
// struct TrieNode
// {
//      struct TrieNode *children[ALPHABET_SIZE];
//      // isEndOfWord is true if the node
//      // represents end of a word
//      bool isEndOfWord;
// };

/**
 *
 * insert
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be inserted)
 *
 * search
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be searched)
 * @returns {boolean}  (true if key presents in trie, else false)
 */

// !======================Links
// * https://practice.geeksforgeeks.org/problems/trie-insert-and-search0651/1?page=1&category[]=Trie&sortBy=submissions
// * https://www.geeksforgeeks.org/trie-insert-and-search/

// !===================+Solution ===============
class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
}
//Function to insert string into TRIE.
function insert(root, key) {
  let curr = root;
  const length = key.length;

  for (let i = 0; i < length; i++) {
    let index = key[i].charCodeAt(0) - "a".charCodeAt(0);
    // * check if there is pointer from this index
    if (curr.children[index] === null) {
      curr.children[index] = new TrieNode();
    }

    curr = curr.children[index];
  }

  // mark last node as leaf
  curr.isEndOfWord = true;
}

//Function to use TRIE data structure and search the given string.
function search(root, key) {
  let curr = root;
  const length = key.length;

  for (let i = 0; i < length; i++) {
    let index = key[i].charCodeAt(0) - "a".charCodeAt(0);

    if (curr.children[index] === null) return false;

    curr = curr.children[index];
  }

  return curr.isEndOfWord;
}
