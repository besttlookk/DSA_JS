// !================Word Ladder I
/**
 * @param {string[]} wordList
 * @param {string} startWord
 * @param {string} targetWord
 * @param {number} N
 * @returns {number}
 */
// !===============Links =================
// * https://practice.geeksforgeeks.org/problems/word-ladder/1?page=2&category[]=Graph&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/

function wordLadderLength(startWord, targetWord, wordList, N) {
  // * If start word is the end word. No transformation needed.
  if (startWord === targetWord) return 0;

  // * add all the words in the set
  const set = new Set(wordList);

  // * Check id targetWord present in wordList or not
  if (!set.has(targetWord)) return 0;

  let level = 0;
  const W = startWord.length;

  const que = [];

  que.push(startWord);
  set.delete(startWord);

  while (que.length) {
    const size = que.length;
    level++;

    for (let i = 0; i < size; i++) {
      const word = que.shift();

      for (let j = 0; j < W; j++) {
        // * Try all possible combination
        for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
          const temp = word.split("");

          temp[j] = String.fromCharCode(c);
          const newWord = temp.join("");

          // * skip same word
          if (newWord === word) continue;

          //* If the new word is equal to the target word
          if (newWord === targetWord) {
            return level + 1;
          }
          // * ignore all those words which are not in the set
          if (!set.has(newWord)) continue;
          else {
            // * if we found any word which is in the set.
            // * first remove it from the set and then add to the queue
            set.delete(newWord);
            que.push(newWord);
          }
        }
      }
    }
  }

  return 0;
}

const wordList = ["des", "der", "dfr", "dgt", "dfs"];
const startWord = "der",
  targetWord = "dfs";

console.log(wordLadderLength(startWord, targetWord, wordList, 3));
