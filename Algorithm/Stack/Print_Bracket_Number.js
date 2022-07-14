// !=============Print Bracket Number==============
// * https://practice.geeksforgeeks.org/problems/print-bracket-number4058/0/?page=3&category[]=Stack&sortBy=submissions

// !=================Method 1(Stack) ===================
function barcketNumbers(s) {
  let count = 1;
  const res = [];
  const n = s.length;
  const st = [];

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    console.log({ st });
    if (ch === "(") {
      console.log({ ch });
      res.push(count);
      st.push(count);
      count += 1;
    } else if (ch === ")") {
      if (st.length === 0) continue;
      const temp = st.pop();
      res.push(temp);
    }
  }

  return res;
}

console.log(barcketNumbers("(aa(bdc))p(dee)â€‹"));
