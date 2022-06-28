// !=================Links ====================
// * https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

// !============Important points ==========
// *The problem is similar to our old post Segregate 0s and 1s in an array, and both of these problems are variation of famous Dutch national flag problem.
// * The problem was posed with three colours, here `0′, `1′ and `2′. The array is divided into four sections:

// ============= Method 1 (Counting Sort) ===================
/*
function sort012(arr, N)
    {
        let count0 = 0;
        let count1 = 0;
        let count2 = 0;
        let index = 0;
        
        for(let i = 0; i < N; i++){
            if(arr[i] === 0) count0++;
            if(arr[i] === 1) count1++;
            if(arr[i] === 2) count2++;
        }
        
        while(count0){
            arr[index] = 0;
            count0--;
            index++;
        }
        
        while(count1){
            arr[index] = 1;
            count1--;
            index++;
        }
        
        while(count2){
            arr[index] = 2;
            count2--;
            index++;
        }
        
        return arr
    }
    */

//! ================Method 2 (Dutch National Flag Method) ===================
// * Time Complexity: O(n). Only one traversal of the array is needed.
//* 8 Space Complexity: O(1). No extra space is required.

// * Examine a[Mid]. There are three possibilities:
//*  a[Mid] is (0) red, (1) white or (2) blue.
// * Case (0) a[Mid] is red, swap a[Lo] and a[Mid]; Lo++; Mid++
// * Case (1) a[Mid] is white, Mid++
// * Case (2) a[Mid] is blue, swap a[Mid] and a[Hi]; Hi–
// * Continue until Mid>Hi.
function sort012(arr, N) {
  let low = 0;
  let mid = 0;
  let high = N - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[high], arr[mid]] = [arr[mid], arr[high]];
      high--;
    }
  }

  return arr;
}
