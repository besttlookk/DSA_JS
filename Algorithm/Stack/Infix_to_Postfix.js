// !============Infix to Postfix =====
// * If we get "(" : Push into the stack
// * operand : print it
// * ")" : keep popping fron the stack until we find "("
// * operator:
// *        # If stack is empty, push, else
// *        # Compare with the top operatoe in the stack:
// *            # if higher precedence, push, else
// *            # keep popping out the stack and print till we get lower precedence.
// * Once the expression is finished, keep popping fron the stack and print.

// !==============Links ==============
// * https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/0/?page=1&category[]=Stack&sortBy=submissions

//Function to return precedence of operators
function prec(c) {
  if (c == "^") return 3;
  else if (c == "/" || c == "*") return 2;
  else if (c == "+" || c == "-") return 1;
  else return -1;
}

function infixToPostfix(s) {
  let st = []; //For stack operations, we are using C++ built in stack
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "(") st.push(ch);
    else if (
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z") ||
      (ch >= "0" && ch <= "9")
    ) {
      result += ch;
    } else if (ch === ")") {
      while (st[st.length - 1] !== "(") {
        const temp = st.pop();
        result += temp;
      }
      st.pop();
    }
    //* If an operator is scanned
    else {
      while (st.length !== 0 && prec(ch) <= prec(st[st.length - 1])) {
        const temp = st.pop();
        result += temp;
      }
      st.push(ch);
    }
  }

  //* Pop all the remaining elements from the stack
  while (st.length != 0) {
    result += st[st.length - 1];
    st.pop();
  }

  return result;
}

console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i"));
