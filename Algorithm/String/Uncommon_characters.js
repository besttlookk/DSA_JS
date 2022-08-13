// !=============Uncommon characters

// !==========Links

function UncommonChars(A, B) {
  let res = [];
  const map = new Map();

  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], map.get(A[i]) + 1);
    } else {
      map.set(A[i], 1);
    }
  }

  for (let i = 0; i < B.length; i++) {
    if (map.has(B[i])) {
      map.set(B[i], map.get(B[i]) + 1);
    } else {
      map.set(B[i], 1);
    }
  }

  for (let [ch, freq] of map) {
    if (freq === 1) res.push(ch);
  }

  res.sort();
  return res.join("");
}

console.log(UncommonChars("geeksforgeeks", "geeksquiz"));
