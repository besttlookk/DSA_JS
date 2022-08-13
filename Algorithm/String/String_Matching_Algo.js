// !=================  String Matching Algorithms

// * String Matching Algorithms can broadly be classified into two types of algorithms –
// * 1. Exact String Matching Algorithms
// * 2. Approximate String Matching Algorithms

// * Exact String Matching Algorithms are further classified into four categories:
// *  1. Algorithms based on character comparison:
// *     # Naive Algorithm: It slides the pattern over text one by one and check for a match. If a match is found, then slides by 1 again to check for subsequent matches.
// *     # KMP (Knuth Morris Pratt) Algorithm: The idea is whenever a mismatch is detected, we already know some of the characters in the text of the next window. So, we take advantage of this information to avoid matching the characters that we know will anyway match.
// *     # Boyer Moore Algorithm: This algorithm uses best heurestics of Naive and KMP algorithm and starts matching from the last character of the pattern.
// *     # Using the Trie data structure: It is used as an efficient information retrieval data structure. It stores the keys in form of a balanced BST.
// *  2. Deterministic Finite Automaton (DFA) method:
// *     # Automaton Matcher Algorithm: It starts from the first state of the automata and the first character of the text. At every step, it considers next character of text, and look for the next state in the built finite automata and move to a new state.
// *  3. Algorithms based on Bit (parallelism method):
// *     # Aho-Corasick Algorithm: It finds all words in O(n + m + z) time where n is the length of text and m be the total number characters in all words and z is total number of occurrences of words in text. This algorithm forms the basis of the original Unix command fgrep.
// *  4. Hashing-string matching algorithms:
// *     # Rabin Karp Algorithm: It matches the hash value of the pattern with the hash value of current substring of text, and if the hash values match then only it starts matching individual characters.

// !=======================Links ==========================
// * https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/
// * https://www.geeksforgeeks.org/applications-of-string-matching-algorithms/
// !======================Naive algorithm for Pattern Searching=============
// * Slide the pattern over text one by one and check for a match. If a match is found, then slide by 1 again to check for subsequent matches.
// * The best case occurs when the first character of the pattern is not present in the text at all. O(n)

// * The worst case of Naive Pattern Searching occurs in the following scenarios.
// * # When all characters of the text and pattern are the same.
// * # Worst case also occurs when only the last character is different.
// * The number of comparisons in the worst case is O(m*(n-m+1))

function search(txt, pat) {
  const n = txt.length;
  const m = pat.length;

  //* A loop to slide pat one by one
  for (let i = 0; i <= n - m; i++) {
    let j;

    for (let j = 0; j < m; j++) {
      if (txt[i + j] !== pat[j]) break;
    }

    if (j === m) return true;
  }

  return false;
}
