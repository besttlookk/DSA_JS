//! =================Pattern 11===================
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *

function pattern11(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col < row; col++) {
      str += " ";
    }

    for (let col = 1; col <= n - row + 1; col++) {
      str += "* ";
    }

    console.log(str);
  }
}

// pattern11(5);

// !  ===========Pattern 12(Sandglass Star Pattern) =======================
// * * * * *
// * * * *
//  * * *
//   * *
//    *
//    *
//   * *
//  * * *
// * * * *
// * * * * *

function pattern12(n) {
  for (let row = 1; row <= 2 * n; row++) {
    let str = "";
    const spaceCondition = row <= n ? row - 1 : 2 * n - row;
    for (let col = 1; col <= spaceCondition; col++) {
      str += " ";
    }

    const startCondition = row <= n ? n - row + 1 : row - n;
    for (let col = 1; col <= startCondition; col++) {
      str += "* ";
    }

    console.log(str);
  }
}

// pattern12(5);

// !==================== Pattern 13(Triangle Star pattern)========================
//     *
//    * *
//   *   *
//  *     *
// *********

function pattern13(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = row; col < n; col++) {
      str += " ";
    }

    for (let col = 1; col <= 2 * row - 1; col++) {
      // if col ka start ho ya end ya last row ho
      if (col === 1 || col === 2 * row - 1 || row === n) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

// pattern13(5);

// !===================Pattern 14(Down star triangle) ================
//  *********
//   *     *
//    *   *
//     * *
//      *

function pattern14(n) {
  for (let row = n; row >= 1; row--) {
    let str = "";
    for (let col = row; col < n; col++) {
      str += " ";
    }

    for (let col = 1; col <= 2 * row - 1; col++) {
      // if col ka start ho ya end ya last row ho
      if (col === 1 || row === n || col === 2 * row - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

// pattern14(5);

// ! ============= Pattern 15 ======================
//         *
//        * *
//       *   *
//      *     *
//     *       *
//      *     *
//       *   *
//        * *
//         *

function pattern15(n) {
  for (row = 1; row <= 2 * n - 1; row++) {
    let str = "";
    // space condition
    sCondition = row <= n ? n - row : row - 5;
    for (let space = 1; space <= sCondition; space++) {
      str += " ";
    }

    cCondition = row <= n ? 2 * row - 1 : 4 * n - 2 * row - 1;
    for (let col = 1; col <= cCondition; col++) {
      if (col === 1 || col === cCondition) str += "*";
      else str += " ";
    }

    console.log(str);
  }
}

// pattern15(5);

// ! ======= Pattern 16( Pascal’s Triangle Program ) INCOMPLETE==============
//          1
//        1   1
//      1   2   1
//    1   3   3   1
//  1   4   6   4   1

function pattern16(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let num = 1;

    for (let space = 0; space < n - row; space++) {
      str += " ";
    }

    for (let col = 1; col <= row; col++) {
      str += `${num} `;
      // console.log(row, col);
      num += row - col;
      // console.log(num);
    }

    console.log(str);
  }
}

// pattern16(5);

//! ==========PAttern 17 ===============

//      1
//     212
//    32123
//   4321234
//    32123
//     212
//      1

// ! Method 1
/*
function pattern17(n) {
  for (let row = 1; row < n; row++) {
    let number = row;
    let str = "";
    //* Deacreasing star pattern
    for (let space = row; space <= n; space++) {
      str += " ";
    }
    //* Increasing number trinagle
    for (let col = 1; col < row; col++) {
      str += `${number}`;
      number--;
    }
    for (let col = 1; col <= row; col++) {
      str += `${number}`;
      number++;
    }
    console.log(str);
  }

  // ! Down
  for (let row = 1; row <= n; row++) {
    let str = "";
    let number = n - row + 1;
    //* Deacreasing star pattern
    for (let space = 1; space <= row; space++) {
      str += " ";
    }
    //* Increasing number trinagle
    for (let col = row; col < n; col++) {
      str += `${number}`;
      number--;
    }
    for (let col = row; col <= n; col++) {
      str += `${number}`;
      number++;
    }
    console.log(str);
  }
}
*/
// ! Method 2
function pattern17(n) {
  for (let row = 1; row < 2 * n - 1; row++) {
    let number = row <= n ? row : 4 * n - 2 * row - 1;
    let str = "";
    //* Deacreasing star pattern :
    sCondition = row <= n ? n - row : row - n;
    for (let space = row; space <= sCondition; space++) {
      str += " ";
    }
    //* Increasing number trinagle
    for (let col = 1; col < row; col++) {
      str += `${number}`;
      number--;
    }
    for (let col = 1; col <= row; col++) {
      str += `${number}`;
      number++;
    }
    console.log(str);
  }

  // ! Down
  // for (let row = 1; row <= n; row++) {
  //   let str = "";
  //   let number = n - row + 1;
  //   //* Deacreasing star pattern
  //   for (let space = 1; space <= row; space++) {
  //     str += " ";
  //   }
  //   //* Increasing number trinagle
  //   for (let col = row; col < n; col++) {
  //     str += `${number}`;
  //     number--;
  //   }
  //   for (let col = row; col <= n; col++) {
  //     str += `${number}`;
  //     number++;
  //   }
  //   console.log(str);
  // }
}
// pattern17(4);

//! ========= Pattern 18 ==================

//       **********
//       ****  ****
//       ***    ***
//       **      **
//       *        *
//       *        *
//       **      **
//       ***    ***
//       ****  ****
//       **********

function pattern18(n) {
  //*  Upper half
  for (let row = 1; row <= n; row++) {
    let str = "";
    // * Decreasing star pattern
    for (let col = row; col <= n; col++) {
      str += "*";
    }
    // * Increasing space pattern
    for (let col = 1; col < row; col++) {
      str += " ";
    }
    // * Increasing space pattern
    for (let col = 1; col < row; col++) {
      str += " ";
    }
    // * Decreasing star pattern
    for (let col = row; col <= n; col++) {
      str += "*";
    }

    console.log(str);
  }

  // * Lower Half
  for (let row = 1; row <= n; row++) {
    let str = "";
    // * Increasing star pattern
    for (let col = 1; col <= row; col++) {
      str += "*";
    }
    // * Decreasing space pattern
    for (let col = row; col < n; col++) {
      str += " ";
    }
    // * Decreasing space pattern
    for (let col = row; col < n; col++) {
      str += " ";
    }
    // * Increasing star pattern
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern18(5);

// ! ==================== Pattern 19 =====================

function pattern19(n) {
  //*  Upper half
  for (let row = 1; row < n; row++) {
    let str = "";
    // * Increasing star pattern
    for (let col = 1; col <= row; col++) {
      str += "*";
    }
    // * Decreasing space pattern
    for (let col = row; col < n; col++) {
      str += " ";
    }
    // * Decreasing space pattern
    for (let col = row; col < n; col++) {
      str += " ";
    }
    // * Increasing star pattern
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    console.log(str);
  }

  // * Lower Half
  for (let row = 1; row <= n; row++) {
    let str = "";
    // * Decreasing star pattern
    for (let col = row; col <= n; col++) {
      str += "*";
    }
    // * Increasing space pattern
    for (let col = 1; col < row; col++) {
      str += " ";
    }
    // * Increasing space pattern
    for (let col = 1; col < row; col++) {
      str += " ";
    }
    // * Decreasing star pattern
    for (let col = row; col <= n; col++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern19(5);

// ! ========== Pattern 20 =================
// ****
// *  *
// *  *
// *  *
// ****
function pattern20(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";

    for (col = 1; col < n; col++) {
      if (row === 1 || row === n || col === 1 || col === n - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

// pattern20(5);
