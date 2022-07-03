// !==========

// !========== Links ============
// * https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/

// !=============Method 1(stcak + hashmap): INCOMPLETE =============
/*

function ispar(x) {
  const s = [];
  const map = new Map();

  map.set("{", "}");
  map.set("[", "]");
  map.set("(", ")");

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "(" || x[i] === "{" || x[i] === "[") s.push(x[i]);
    else {
      const poppedEl = s.pop();
      console.log({ poppedEl });
      console.log(typeof x[i]);
      const temp = x[i];
      console.log({ temp });
      console.log(map.get(temp));
      if (poppedEl !== map.get(x[i])) return false;
    }
  }

  return true;
}
*/

// !===============Method 2
// * Time Complexity: O(n)
// * Auxiliary Space: O(n) for stack.
function isOpening(c) {
  return c === "{" || c === "[" || c === "(";
}

function isMatching(o, c) {
  return (
    (o === "(" && c === ")") ||
    (o === "{" && c === "}") ||
    (o === "[" && c === "]")
  );
}
function ispar(x) {
  const s = [];

  for (let i = 0; i < x.length; i++) {
    if (isOpening(x[i])) s.push(x[i]);
    else {
      if (s.length === 0) return false;
      const poppedEl = s.pop();
      if (!isMatching(poppedEl, x[i])) return false;
    }
  }

  // * In case string over ho gaya per stackn nhi
  return s.length === 0;
}

console.log(ispar("[({[([{}])]})}"));
