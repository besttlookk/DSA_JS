// ! ========== Pattern 21 =================

//        1
//        2  3
//        4  5  6
//        7  8  9  10
//        11 12 13 14 15
function pattern21(n) {
  let number = 1;
  for (let row = 1; row <= n; row++) {
    let str = "";

    for (let col = 1; col <= row; col++) {
      str += `${number} `;
      number++;
    }

    console.log(str);
  }
}

// pattern21(5);

// ! ========== Pattern 22 =================
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
function pattern22(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";

    for (let col = 1; col <= row; col++) {
      if ((col + row) % 2 === 0) {
        str += `1 `;
      } else {
        str += `0 `;
      }
    }

    console.log(str);
  }
}

// pattern22(5);

// ! =============== Pattern 23 ==================
//        *      *
//      *   *  *   *
//    *      *      *
function pattern23(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let space = row; space <= n; space++) {
      str += " ";
    }
    for (col = 1; col <= 2 * row + 1; col++) {
      if (col === 1 || col === 2 * row + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    for (col = 2 * row + 1; col <= n + 1; col++) {
      str += " ";
    }
    for (col = 1; col <= 2 * row + 1; col++) {
      if (col === 1 || col === 2 * row + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

// pattern23(3);

// !==============Pattern 24 ===================
//        *        *
//        **      **
//        * *    * *
//        *  *  *  *
//        *   **   *
//        *   **   *
//        *  *  *  *
//        * *    * *
//        **      **
//        *        *

function pattern24(n) {
  for (let row = 1; row <= 2 * n; row++) {
    let str = "";
    let starCondition = row <= n ? row : 2 * n - row + 1;
    for (let col = 1; col <= starCondition; col++) {
      if (col === 1 || col === starCondition) {
        str += "*";
      } else {
        str += " ";
      }
    }
    // !space
    let spaceCondition = row < n ? 2 * (n - row) : 2 * row - 2 * n - 2;
    for (let col = 1; col <= spaceCondition; col++) {
      str += " ";
    }

    for (let col = 1; col <= starCondition; col++) {
      if (col === 1 || col === starCondition) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

// pattern24(5);

// ! ==================== Pattern 25 =======================

//           *****
//          *   *
//         *   *
//        *   *
//       *****

function pattern25(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";

    // * Decreasing space triangle
    for (let space = row; space <= n; space++) {
      str += " ";
    }

    for (col = 1; col <= n; col++) {
      if (row === 1 || row === n || col === 1 || col === n) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

pattern25(5);

// ! ================ Pattern 26 ================

//       1 1 1 1 1 1
//       2 2 2 2 2
//       3 3 3 3
//       4 4 4
//       5 5
//       6

function pattern26(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = row; col <= n; col++) {
      str += `${row} `;
    }

    console.log(str);
  }
}

// pattern26(6);

// ! =============== Pattern 27 ====================
//        1 2 3 4  17 18 19 20
//          5 6 7  14 15 16
//            8 9  12 13
//             10  11

function pattern27(n) {
  let number = 1;
  let num2 = 17;

  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let space = 0; space < row; space++) {
      str += "  ";
    }
    for (let col = row; col <= n; col++) {
      str += `${number} `;
      number++;
    }
    str += " ";
    for (let col = row; col <= n; col++) {
      str += `${num2} `;
      num2;
    }
    console.log(str);
  }
}

// pattern27(4);

// ! ==================== Pattern 28 ==================
//          *
//         * *
//        * * *
//       * * * *
//      * * * * *
//       * * * *
//        * * *
//         * *
//          *

function pattern28(n) {
  for (row = 1; row <= 2 * n - 1; row++) {
    let str = "";
    // space condition
    sCondition = row <= n ? n - row : row - 5;
    for (let space = 1; space <= sCondition; space++) {
      str += " ";
    }

    cCondition = row <= n ? 2 * row - 1 : 4 * n - 2 * row - 1;
    for (let col = 1; col <= cCondition; col++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern28(5);

// ! ================ Pattern 30 =============
//             1
//           2 1 2
//         3 2 1 2 3
//       4 3 2 1 2 3 4
//     5 4 3 2 1 2 3 4 5

function pattern30(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let num = row;
    for (let space = row; space <= n; space++) {
      str += "  ";
    }

    for (let col = 1; col <= row; col++) {
      str += `${num} `;
      num--;
    }
    num++;
    for (let col = 1; col < row; col++) {
      num++;
      str += `${num} `;
    }

    console.log(str);
  }
}

pattern30(5);
