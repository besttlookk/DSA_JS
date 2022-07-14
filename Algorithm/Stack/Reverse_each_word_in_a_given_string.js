// !======================Reverse each word in a given string ============

// !==============Links ===================
// * https://practice.geeksforgeeks.org/problems/reverse-each-word-in-a-given-string1001/0/?page=2&category[]=Stack&sortBy=submissions

function reverse(st) {
  return st.split("").reverse().join("");
}

function reverseWords(s) {
  strArr = s.split(".");

  const reverseArr = strArr.map((el) => reverse(el));

  return reverseArr.join(".");
}

console.log(reverseWords("i.like.this.program.very.much"));
