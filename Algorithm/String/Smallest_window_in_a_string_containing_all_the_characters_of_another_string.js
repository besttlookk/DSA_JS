// !=========Smallest window in a string containing all the characters of another string

// *  //Function to find the smallest window in the string s consisting of all the characters of string p.
// *  Return "-1" in case there is no such window present.
// *In case there are multiple such windows of same length, return the one with the least starting index.
function smallestWindow(s, p) {
  const n = s.length;
  const m = p.length;

  if (n < m) return -1;

  let min = Number.MAX_VALUE;
  const set = new Set(p);
  const distCount = set.size;

  let count = 0;
  let start = 0;
  let ans = 0;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
      if (set.has(s[i])) {
        count++;
      }
    }

    if (count === distCount) {
      while (count === distCount) {
        if (min > i - start + 1) {
          min = i - start + 1;
          ans = start;
        }
      }
      while (!set.has(s[start]) || map.get(s[start]) > 1) {
        console.log("insider", s[start]);
        map.set(s[start], map.get(s[start]) - 1);
        start++;
      }

      console.log({ map });
      console.log({ start });
      console.log({ i });

      const currentWindowSize = i - start + 1;
      if (min > currentWindowSize) {
        min = currentWindowSize;
        console.log({ min });
      }
    }
  }

  return s.substring(start, start + min);
}

console.log(smallestWindow("timetopractice", "toc"));
