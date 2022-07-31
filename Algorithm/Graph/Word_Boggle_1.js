// !============ Boggle (Find all possible words in a board of characters) ==============
/**
 * @param {string[][]} board
 * @param {string[]} dictionary
 * @return {string[]}
 */

// !====================Links =================================
// * https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/
// * https://practice.geeksforgeeks.org/problems/word-boggle4143/1?page=1&category[]=Graph&sortBy=submissions

// !===================Method 1 (Recursive DFS )================
// * The idea is to consider every character as a starting character and find all words starting with it.
// * All words starting from a character can be found using Depth First Traversal.
// * We do depth-first traversal starting from every cell. We keep track of visited cells to make sure that a cell is considered only once in a word.

function wordBoggle(board, dictionary) {
  const row = board.length;
  const col = board[0].length;
  // * Make 2D visited- matrix
  const visited = Array.from(Array(row), () => new Array(col).fill(false));

  const set = new Set(dictionary);

  const ans = [];

  //* Initialize current string
  var str = "";

  // Consider every character and look for all words
  // starting with this character
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      wordBoggleUtil(i, j, board, dictionary, visited, str, ans, set);
    }
  }
  ans.sort();

  return ans;
}

function wordBoggleUtil(rr, cc, board, dictionary, visited, str, ans, set) {
  // Mark current cell as visited and
  // append current character to str
  visited[rr][cc] = true;
  str = str + board[rr][cc];

  // If str is present in dictionary,
  if (isPresent(str, dictionary) && set.has(str)) {
    ans.push(str);
    set.delete(str);
  }

  // * Traverse 8 adjacent cells of boggle[i,j]
  const possR = [-1, -1, -1, 1, 1, 1, 0, 0];
  const possC = [-1, 0, 1, -1, 0, 1, -1, 1];

  for (let i = 0; i < 8; i++) {
    const rn = rr + possR[i];
    const cn = cc + possC[i];

    if (
      isSafe(rn, cn, board.length, board[0].length) &&
      visited[rn][cn] === false
    ) {
      wordBoggleUtil(rn, cn, board, dictionary, visited, str, ans, set);
    }
  }
  visited[rr][cc] = false;
}

function isPresent(str, dict) {
  for (let i = 0; i < dict.length; i++) {
    if (str === dict[i]) return true;
  }

  return false;
}

function isSafe(i, j, row, col) {
  if (i >= 0 && j >= 0 && i < row && j < col) return true;

  return false;
}

// !===================Method 2 (Optimize solution) =====================
function wordBoggle(board, dictionary) {
  const row = board.length;
  const col = board[0].length;
  const resultSet = new Set();

  // * For each word in dictionary
  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];

    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        if (board[r][c] === word[0]) {
          if (search(r, c, 0, row, col, word, board)) {
            resultSet.add(word);
          }
        }
      }
    }
  }

  const ans = Array.from(resultSet);
  return ans;
}

function search(i, j, idx, row, col, word, board) {
  if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== word[idx])
    return false;

  if (idx === word.length - 1) return true;

  const ch = board[i][j];
  board[i][j] = "#";
  const c1 = search(i + 1, j, idx + 1, row, col, word, board);
  const c2 = search(i - 1, j, idx + 1, row, col, word, board);
  const c3 = search(i, j + 1, idx + 1, row, col, word, board);
  const c4 = search(i, j - 1, idx + 1, row, col, word, board);
  const c5 = search(i + 1, j - 1, idx + 1, row, col, word, board);
  const c6 = search(i - 1, j - 1, idx + 1, row, col, word, board);
  const c7 = search(i + 1, j + 1, idx + 1, row, col, word, board);
  const c8 = search(i - 1, j + 1, idx + 1, row, col, word, board);
  const ok = c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8;

  board[i][j] = ch;
  return ok;
}

// !======================Method 3 ======================
// function wordBoggle(board, dictionary) {
//   const row = board.length;
//   const col = board[0].length;
//   const map = new Map();
//   const resultSet = new Set();

//   // * Make 2D visited- matrix
//   const visited = Array.from(Array(row), () => new Array(col).fill(false));

//   //  * Traverse the matrix and make hashmap
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       const idx = board[i][j].charCodeAt(0) - "a".charCodeAt(0);
//       if (map.has(idx)) {
//         map.set(idx, map.get(idx).concat([[i, j]]));
//       } else {
//         map.set(idx, [[i, j]]);
//       }
//     }
//   }

//   console.log({ map });

//   // * For each word in dictionary
//   for (let i = 0; i < dictionary.length; i++) {
//     const word = dictionary[i];

//     for (let r = 0; r < row; r++) {
//       for (let c = 0; c < col; c++) {
//         if (board[r][c] === word[0] && visited[r][c] === false) {
//           if (search(r, c, row, col, word, board, map, visited, 0)) {
//             resultSet.add(word);
//           }
//         }
//       }
//     }
//   }

//   const ans = Array.from(resultSet);
//   return ans;
// }

// function search(r, c, row, col, word, board, map, visited, idx) {
//   visited[r][c] = true

//   map.get()

// }

// !========================Example 1 ==============

// let boggle = [
//   ["G", "I", "Z"],
//   ["U", "E", "K"],
//   ["Q", "S", "E"],
// ];

// let dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];

// !======================Examplle 2================
let boggle = [
  ["d", "d"],
  ["b", "f"],
  ["e", "c"],
  ["b", "c"],
  ["d", "c"],
];

let dictionary = ["bcd", "db"];
// !==================Example 3 =============

// let boggle = [
//   ["C", "A", "P"],
//   ["A", "N", "D"],
//   ["T", "I", "E"],
// ];

// let dictionary = ["CAT"];

console.log(wordBoggle(boggle, dictionary));
