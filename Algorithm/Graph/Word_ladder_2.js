// !==============Word_ladder_2 ========
// * Apply BFS and find shortest level/ depth from begin to end(Word ladder 1 ques)
// * apply DFS from start till we reach we reach th required depth. Add each path in result array
// * To make DFS call we need to create speical adj list in which we will only store those neighbour node which are at one level high(We will maintain parent child relation)

// * Data structure needed:
// * 1. Map to store adj list
// * 2. Set to maintain dictionary words
// * 3. Queue for BFS
// * 4. 1-D array to store a path
// * 5. 2-D array to store all possible path

// !==================Links =======================
// * https://practice.geeksforgeeks.org/problems/word-ladder-ii/1

// !=================Solution: BFS + DFS =================

function findSequences(startWord, targetWord, wordList, N) {
  // * If start word is the end word. No transformation needed.
  if (startWord === targetWord) return 0;

  // * add all the words in the set
  const set = new Set(wordList);

  // * Check id targetWord present in wordList or not
  if (!set.has(targetWord)) return [];

  const W = startWord.length;

  const que = [];
  const visited = new Map(); //It will store the order
  const adj = new Map();

  const path = [];
  const ans = [];

  for (let ele of set) {
    adj.set(ele, []);
  }

  que.push(startWord);
  visited.set(startWord, 0);
  adj.set(startWord, []);

  while (que.length) {
    const size = que.length;

    for (let i = 0; i < size; i++) {
      const word = que.shift();

      for (let j = 0; j < W; j++) {
        // * Try all possible combination
        for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
          const temp = word.split("");

          if (temp[j] === c) continue; //* skip if letter is as in original word

          temp[j] = String.fromCharCode(c);
          const newWord = temp.join("");

          // * check if new word is present in word list
          if (set.has(newWord)) {
            // * if we found any word which is in the set.
            // * we will check if it is visited or not and also its order
            if (!visited.has(newWord)) {
              visited.set(newWord, visited.get(word) + 1);
              que.push(newWord);
              adj.get(word).push(newWord);
            } else if (visited.get(newWord) === visited.get(word) + 1) {
              adj.get(word).push(newWord);
            }
          }
        }
      }
    }
  }

  // !Step 2: Find all possible path at min-depth using BFS
  dfs(startWord, targetWord, adj, path, ans);

  return ans;
}

function dfs(startWord, targetWord, adj, path, ans) {
  path.push(startWord);
  if (startWord === targetWord) {
    ans.push([...path]);
    path.pop(); //* to track other availble path
    return;
  }

  for (let x of adj.get(startWord)) {
    dfs(x, targetWord, adj, path, ans);
  }

  path.pop();
}

// !=====================Example 1 =================
// const wordList = ["des", "der", "dfr", "dgt", "dfs"];
// const startWord = "der",
//   targetWord = "dfs";

// !=====================Example 2 ===============

const wordList = ["lm"];
const startWord = "ll",
  targetWord = "lm";

console.log(findSequences(startWord, targetWord, wordList, 3));
