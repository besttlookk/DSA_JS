// !============Evaluation of Postfix Expression ==============
// * only two things we will find while traversing:operand and opearot
// * Operand: Push in stack
// * Operator:
// *    # sec_op = st.pop()
// *    # first_op = st.pop()...evalute...push the result in the stack
// * Once the expression is finished return st.pop()

// !==================Links=======================
// * https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1/?page=2&category[]=Stack&sortBy=submissions
// *

// !===============Solution =============

function evaluatePostfix(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    let ch = S[i];
    if (ch !== "+" && ch !== "-" && ch !== "*" && ch !== "/" && ch !== "^") {
      stack.push(parseInt(ch));
    } else {
      const sec_op = stack.pop();
      const first_op = stack.pop();

      switch (ch) {
        case "+":
          stack.push(first_op + sec_op);
          break;

        case "-":
          stack.push(first_op - sec_op);
          break;

        case "/":
          stack.push(first_op / sec_op);
          break;

        case "*":
          stack.push(first_op * sec_op);
          break;

        case "^":
          stack.push(first_op ^ sec_op);
          break;
      }
    }
  }
  const result = stack.pop();
  return Math.abs(result) === 0 ? 0 : result;
}

console.log(evaluatePostfix("18-6*3-8+88-*"));
