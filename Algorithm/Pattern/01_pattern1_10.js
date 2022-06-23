/*
1.  *****
    *****
    *****
    *****
    *****
*/
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern1(4);

//! =====Pattern 2( Right Triangle Star Pattern === Increasing Star pattern)=======================
/**
2.  *
    **
    ***
    ****
    *****
*/
function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern2(10);

// ! ================Pattern 3(Decreasing Star pattern) ==========================
/**
 3. *****
    ****
    ***
    **
    *
 */
function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j <= n; j++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern3(4);

// ! ================Pattern 4 ==========================
/**
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${j} `;
    }

    console.log(str);
  }
}

// pattern4(5);

//! ================== Pattern 5 ==============================
/**
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

function pattern5(n) {
  for (let row = 1; row <= 2 * n - 1; row++) {
    let str = "";
    let jLimit = row <= n ? row : 2 * n - row;
    for (let col = 1; col <= jLimit; col++) {
      str += `*`;
    }

    console.log(str);
  }
}

// pattern5(5);

// !=====================Pattern 6( Left Triangle Star Pattern)=========================

//      *
//     **
//    ***
//   ****
//  *****

// ! Solution 1: Without the use of Space triange
/*
function pattern6(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= n; col++) {
      str += col < n + 1 - row ? " " : "*";
    }

    console.log(str);
  }
}
*/
// ! Solution 2: With use of space triange
function pattern6(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    //* Decreasing Space pattern
    for (let space = row; space <= n; space++) {
      str += " ";
    }

    // * Increasing star pattern
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern6(5);

// !================= Pattern 7 ==========================

//    *****
//     ****
//      ***
//       **
//        *

// ! Method 1: Without use of Space triange
/*
function pattern7(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= n; col++) {
      str += col < row ? " " : "*";
    }

    console.log(str);
  }
}
*/

// ! Method 2: With the use of space triangle
function pattern7(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    // * Increasing space star pattern
    for (let col = 1; col <= row; col++) {
      str += " ";
    }

    //* Decreasing Space pattern
    for (let col = row; col <= n; col++) {
      str += "*";
    }

    console.log(str);
  }
}
// pattern7(5);

//! ===================Pattern 8 =========================
//     *
//    ***
//   *****
//  *******
// *********

// ! Method 1(Without space triangle)
/*
function pattern8(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= 2 * n - 1; col++) {
      const ll = n - row + 1;
      const ul = n + row - 1;
      if (col < ll || col > ul) str += " ";
      else str += "*";
    }

    console.log(str);
  }
}
*/

// !Method 2(With space triangle)
function pattern8(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    // * Decreasing space triangle
    for (let space = row; space <= n; space++) {
      str += " ";
    }
    // * Increasing star tringle(1 less col)
    for (let col = 1; col < row; col++) {
      str += "*";
    }
    // * Decreasing star tringle(1 less col)
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    console.log(str);
  }
}
// pattern8(5);

//! =====================Pattern 9 ====================

//    *********
//     *******
//      *****
//       ***
//        *
//! Method 1 : Without Space trinagle;
/*
function pattern9(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= 2 * n - 1; col++) {
      const ul = 2 * n - row;
      if (col < row || col > ul) str += " ";
      else str += "*";
    }

    console.log(str);
  }
}
*/

// !Method 2(With space triangle)
function pattern9(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    // * Increasing space triangle
    for (let space = 1; space <= row; space++) {
      str += " ";
    }
    // * Increasing star tringle(1 less col)
    for (let col = row; col < n; col++) {
      str += "*";
    }
    // * Decreasing star tringle(1 less col)
    for (let col = row; col <= n; col++) {
      str += "*";
    }

    console.log(str);
  }
}
pattern9(5);

// ! ================= Pathern 10(Pyramid Program) ===================

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
/*
function pattern10(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= 2 * n - 1; col++) {
      const ll = n - row + 1;
      const ul = n + row - 1;
      if (col < ll || col > ul) str += " ";
      else {
        if (row % 2 !== 0) {
          if (col % 2 !== 0) str += "*";
          else str += " ";
        } else {
          if (col % 2 !== 0) str += " ";
          else str += "*";
        }
      }
    }

    console.log(str);
  }
}

*/

function pattern10(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= n - row; col++) {
      str += " ";
    }
    for (let col = 1; col <= row; col++) {
      str += "* ";
    }

    console.log(str);
  }
}

// pattern10(5);
