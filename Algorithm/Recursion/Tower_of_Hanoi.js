// !========== Program for Tower of Hanoi

// !================Links ========
// * https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1/
// * https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/

// * Time complexity: O(2^n)
//*  Space complexity: O(n)

let count = 0;
function toh(N, from, to, aux) {
  if (N === 0) return count;

  if (N === 1) {
    console.log(`move disk ${N} from rod ${from} to rod ${to}`);
    count++;
    return count;
  }

  toh(N - 1, from, aux, to);
  console.log(`move disk ${N} from rod ${from} to rod ${to}`);
  count++;
  toh(N - 1, aux, to, from);

  return count;
}

console.log(toh(2, 1, 3, 2));
