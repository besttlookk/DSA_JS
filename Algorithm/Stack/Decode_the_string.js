// !==========Decode the string

// !===========Links
// * https://practice.geeksforgeeks.org/problems/decode-the-string2444/0/?page=3&category[]=Stack&sortBy=submissions

// !=================Method 1(Stack) ====================
function decodedString(S) {
  let currNum = 0;
  let prevNum = 0;
  let currStr = "";
  let prevStr = "";
  const st = [];
  const n = S.length;

  for (let i = 0; i < n; i++) {
    const c = S[i];

    if (Number(c) >= 0 && Number(c) <= 9) {
      if (currNum === 0) {
        currNum = c;
      } else {
        currNum = currNum + c;
      }
      console.log({ currNum });
    } else if (c === "[") {
      st.push(currStr);
      st.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (c === "]") {
      prevNum = st.pop();
      prevStr = st.pop();

      currStr = prevStr + currStr.repeat(prevNum);
    } else {
      currStr += c;
    }
  }

  return currStr;
}

console.log(decodedString("10[a3[b]]"));
