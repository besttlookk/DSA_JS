// !==============Restrictive Candy Crush

// !===================Links ==================
// * https://practice.geeksforgeeks.org/problems/8c8f95810b05b4cab665f2997d36991bd58308a2/0/?page=2&category[]=Stack&sortBy=submissions

// !=====================Method 1 ====================

class Pair {
  constructor(value, freq) {
    this.value = value;
    this.freq = freq;
  }
}

function Reduced_String(k, s) {
  const st = [];
  let res = "";

  if (k === 1) return res;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (st.length === 0 || st[st.length - 1].value !== ch) {
      st.push(new Pair(ch, 1));
    } else {
      const top = st.pop();
      if (top.freq !== k - 1) {
        top.freq += 1;
        st.push(top);
      }
    }
  }

  while (st.length !== 0) {
    const temp = st.pop();
    let str = "";

    for (let i = 0; i < temp.freq; i++) {
      str += temp.value;
    }

    res = str + res;
  }

  return res;
}

console.log(
  Reduced_String(
    5,
    "obiwjjruufcejzuvviojktiyhiaxulnqolpfcvkaiywhrrxezrybgyetmpulspmjzmcgbuhfhdvuccuydtolfpakoyscfylwjass"
  )
);

// obiwjjruufcejzuvviojktiyhiaxulnqolpfcvkaiywhrrxezrybgyetmpulspmjzmcgbuhfhdvuccuydtolfpakoyscfylwjass;
