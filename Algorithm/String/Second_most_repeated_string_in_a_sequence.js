// !=================Second most repeated string in a sequence

// !================links
// *https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1?page=1&category[]=Strings&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

function secFrequent(arr, n) {
  const map = new Map();
  let firstMax = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }

  for (let [val, freq] of map) {
    if (freq > firstMax) {
      secondMax = firstMax;
      firstMax = freq;
    } else if (freq > secondMax && freq !== firstMax) {
      secondMax = freq;
    }
  }

  for (let [val, freq] of map) {
    if (freq === secondMax) return val;
  }
}

const arr = ["aaa", "aaa"];
console.log(secFrequent(arr, 6));
