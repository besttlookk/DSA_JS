// !============== Choose and Swap

// !===============Links
// * https://practice.geeksforgeeks.org/problems/choose-and-swap0531/1?page=1&category[]=Greedy&curated[]=7&sortBy=submissions

// !========================Method 1 ==================
function chooseandswap(a) {
  const n = a.length;
  let res = "";

  // * Make the set in sorted order
  let set = new Set(a);
  const arr = Array.from(set);
  arr.sort();
  set = new Set(arr);

  for (let i = 0; i < n; i++) {
    set.delete(a[i]);

    if (set.size === 0) break;
    const setValues = set.values();
    const ch1 = setValues.next().value;
    console.log({ ch1 });

    if (ch1 < a[i]) {
      const ch2 = a[i];
      console.log(ch1, ch2);

      // * Swap
      for (let j = 0; j < n; j++) {
        if (a[j] === ch1) res += ch2;
        else if (a[j] === ch2) res += ch1;
        else res += a[j];
      }
      // * we have to swap only once so break
      break;
    }
  }

  return res ? res : a;
}

// !======================Method 2 =====================
// * sliding through a sorted string and choosing the chars to swap
function chooseandswap(a) {
  const arr = Array.from(a);
  const sortedArr = [...arr].sort();

  let i = 0;
  let j = 0;
  const n = a.length;

  while (i < n && j < n) {
    if (arr[i] === sortedArr[j]) {
      while (arr[i] === sortedArr[j]) j++;
      i++;
    } else if (arr[i] < sortedArr[j]) i++;
    else break;
  }

  // * If we found no such value
  if (i >= n || j >= n) return a;

  let res = "";
  const ch1 = arr[i];
  const ch2 = sortedArr[j];

  for (let i = 0; i < n; i++) {
    if (a[i] === ch1) res += ch2;
    else if (a[i] === ch2) res += ch1;
    else res += a[i];
  }

  return res;
}

console.log(chooseandswap("bca"));
