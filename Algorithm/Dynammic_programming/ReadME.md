# Dynammic Programming

Dynamic Programming is mainly an optimization over plain recursion.

Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming.

The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later.

This simple optimization reduces time complexities from exponential to polynomial.

```
Links

https://www.geeksforgeeks.org/dynamic-programming/?ref=lbp

https://www.geeksforgeeks.org/fundamentals-of-algorithms/#DynamicProgramming
```

Dynamic Programming (DP) is a technique that solves some particular type of problems in Polynomial Time.

Dynamic Programming solutions are faster than the exponential brute method and can be easily proved for their correctness.

## Steps to solve a DP

1. Identify if it is a DP problem
2. Decide a state expression with
   least parameters
3. Formulate state relationship
4. Do tabulation (or add memoization)

## Step 1: How to classify a problem as a Dynamic Programming Problem?

Typically, all the problems that require **maximizing or minimize** certain quantities or **counting problems** that say to count the arrangements under certain conditions or **certain probability problems** can be solved by using Dynamic Programming.

All dynamic programming problems satisfy the **overlapping subproblems property** and most of the classic dynamic problems also satisfy the **optimal substructure property**. Once, we observe these properties in a given problem, be sure that it can be solved using DP.

## Step 2 : Deciding the state

DP problems are all about **state and their transition**.
This is the most basic step which must be done very carefully because the **state transition depends on the choice of state definition you make**. So, let’s see what do we mean by the term “state”.

**State**: A state can be defined as the **set of parameters** that can uniquely identify a certain position or standing in the given problem. This set of parameters should be **as small as possible to reduce state space.**

For example: In our famous **Knapsack problem**, we define our state by two parameters **index and weight** i.e DP[index][weight]. Here DP[index][weight] tells us the maximum profit it can make by taking items from range 0 to index having the capacity of sack to be weight. Therefore, here the parameters index and weight together can uniquely identify a subproblem for the knapsack problem.

So, our first step will be deciding a state for the problem after identifying that the problem is a DP problem.

As we know DP is all about using calculated results to formulate the final result.

So, our next step will be to **find a relation between previous states to reach the current state**.

## Step 3: Formulating a relation among the states

This part is the hardest part of solving a DP problem and requires a lot of intuition, observation, and practice.
Let’s understand it by considering a sample problem

```
Given 3 numbers {1, 3, 5}, we need to tell
the total number of ways we can form a number 'N'
using the sum of the given three numbers.
(allowing repetitions and different arrangements).

Total number of ways to form 6 is: 8
1+1+1+1+1+1
1+1+1+3
1+1+3+1
1+3+1+1
3+1+1+1
3+3
1+5
5+1
```

Let’s think dynamically about this problem. So, first of all, we decide a state for the given problem. We will take a parameter n to decide state as it can uniquely identify any subproblem.

So, our state dp will look like state(n). Here, state(n) means the total number of arrangements to form n by using {1, 3, 5} as elements.
Now, we need to compute state(n).

### **How to do it?**

So here the intuition comes into action. As we can only use 1, 3 or 5 to form a given number. Let us assume that we know the result for n = 1,2,3,4,5,6 ; being termilogistic let us say we know the result for the
state (n = 1), state (n = 2), state (n = 3) ……… state (n = 6)

Now, **we wish to know the result of the state (n = 7)**. See, we can only add 1, 3 and 5. Now we can get a sum total of 7 by the following 3 ways:

**1) Adding 1 to all possible combinations of state (n = 6)**

```
Eg : [ (1+1+1+1+1+1) + 1]
[ (1+1+1+3) + 1]
[ (1+1+3+1) + 1]
[ (1+3+1+1) + 1]
[ (3+1+1+1) + 1]
[ (3+3) + 1]
[ (1+5) + 1]
[ (5+1) + 1]
```

**2) Adding 3 to all possible combinations of state (n = 4)**

```
Eg : [(1+1+1+1) + 3]
[(1+3) + 3]
[(3+1) + 3]
```

**3) Adding 5 to all possible combinations of state(n = 2)**

```
Eg : [ (1+1) + 5]
```

`(Note how it sufficient to add only on the right-side – all the add-from-left-side cases are covered, either in the same state, or another, e.g. [ 1+(1+1+1+3)] is not needed in state (n=6) because it’s covered by state (n = 4) [(1+1+1+1) + 3])`

Now, think carefully and satisfy yourself that the above three cases are covering all possible ways to form a sum total of 7;
Therefore, we can say that result for

**state(7) = state (6) + state (4) + state (2)**
or
**state(7) = state (7-1) + state (7-3) + state (7-5)**

In general,
**state(n) = state(n-1) + state(n-3) + state(n-5)**

```js
function solve(n) {
  // base case
  if (n < 0) return 0;
  if (n == 0) return 1;

  return solve(n - 1) + solve(n - 3) + solve(n - 5);
}
```

**Time Complexity: O(3^n)**
As at every stage we need to take three decisions and the height of the tree will be of the order of n.

**Auxiliary Space: O(n)**
The extra space is used due to recursion call stack.

`The above code seems exponential as it is calculating the same state again and again. So, we just need to add memoization.`

## Step 4: Adding memoization or tabulation for the state

This is the easiest part of a dynamic programming solution.

We just need to store the state answer so that next time that state is required, we can directly use it from our memory

Adding memoization to the above code

```js
// initialize to -1
let dp = new Array(MAXN);

// this function returns the number of
// arrangements to form 'n'
function solve(n) {
  // base case
  if (n < 0) return 0;
  if (n == 0) return 1;

  // checking if already calculated
  if (dp[n] != -1) return dp[n];

  // storing the result and returning
  return (dp[n] = solve(n - 1) + solve(n - 3) + solve(n - 5));
}
```

**Time Complexity: O(n)**
As we just need to make 3n function calls and there will be no repeatetive calculations as we are returning previously calculated results.

**Auxiliary Space: O(n)**
The extra space is used due to recursion call stack.

`Another way is to add tabulation and make solution iterative.`

## Two main properties of Dynamic Programming:

1. Overlapping Subproblems
2. Optimal Substructure

## Overlapping Subproblems Property in Dynamic Programming

Like Divide and Conquer, Dynamic Programming combines solutions to sub-problems.

Dynamic Programming is mainly used when solutions to the **same subproblems are needed again and again**.

In dynamic programming, computed solutions to subproblems are stored in a table so that these don’t have to be recomputed.

So Dynamic Programming is not useful when there are no common (overlapping) subproblems because there is no point in storing the solutions if they are not needed again.

For example, Binary Search doesn’t have common subproblems.

If we take the example of following a recursive program for **Fibonacci Numbers**, there are many subproblems that are solved again and again.

```js
// Time Complexity: O(2^n), As at every step we need to make 2 calls.
// Auxiliary Space: O(1), As constant extra space is used.
function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
```

**Recursion tree for the execution of fib(5)**

```
                          fib(5)
                     /             \
               fib(4)                fib(3)
             /      \                /     \
         fib(3)      fib(2)         fib(2)    fib(1)
        /     \        /    \       /    \
  fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
  /    \
fib(1) fib(0)
```

We can see that the function fib(3) is being called 2 times.

If we would have stored the value of fib(3), then instead of computing it again, we could have reused the old stored value.

There are following **two different ways** to store the values so that these values can be reused:
a) **Memoization (Top Down)**
b) **Tabulation (Bottom Up)**

### a) Memoization (Top Down):

The memoized program for a problem is **similar to the recursive version** with a small modification that looks into a **lookup table** before computing solutions.

We initialize a lookup array with all initial values as **NIL**.

Whenever we need the solution to a subproblem, we first look into the lookup table.

If the precomputed value is there then we return that value, otherwise, we calculate the value and put the result in the lookup table so that it can be reused later.

**Following is the memoized version for the nth Fibonacci Number.**

```js
let MAX = 100;
let NIL = -1;

let lookup = new Array(MAX);

function _initialize() {
  for (let i = 0; i < MAX; i++) lookup[i] = NIL;
}

function fib(n) {
  if (lookup[n] == NIL) {
    if (n <= 1) lookup[n] = n;
    else lookup[n] = fib(n - 1) + fib(n - 2);
  }
  return lookup[n];
}
```

### b) Tabulation (Bottom Up):

The tabulated program for a given problem builds a table in a bottom-up fashion and returns the last entry from the table.

For example, for the same Fibonacci number, we first calculate fib(0) then fib(1) then fib(2) then fib(3), and so on. So literally, we are building the solutions to subproblems bottom-up.

**Following is the tabulated version for the nth Fibonacci Number.**

```js
// Time Complexity: O(n), As we are traversing linearly.
// Auxiliary Space: O(n), The extra space is used in tabulation array.
function fib(n) {
  var f = new Array(n + 1);
  var i;

  f[0] = 0;
  f[1] = 1;
  for (i = 2; i <= n; i++) f[i] = f[i - 1] + f[i - 2];

  return f[n];
}
```

Both Tabulated and Memoized store the solutions to subproblems

In Memoized version, the table is filled on demand while in the Tabulated version, starting from the first entry, all entries are filled one by one.

Unlike the Tabulated version, all entries of the lookup table are not necessarily filled in Memoized version.
For example, Memoized solution to the LCS problem doesn’t necessarily fill all entries.

---

## Tabulation vs Memoization

#### 1. Tabulation Method – Bottom Up Dynamic Programming

As the name itself suggests starting from the bottom and accumulating answers to the top.
Let’s discuss in terms of state transition.

Let’s describe a state for our DP problem to be dp[x] with **dp[0] as base state and dp[n] as our destination state.**

So, we need to find the value of destination state i.e dp[n].

If we start our transition from our base state i.e dp[0] and follow our state transition relation to reach our destination state dp[n], we call it the Bottom-Up approach as it is quite clear that we started our transition from the bottom base state and reached the topmost desired state.

In this case, we define a state as dp[x], where dp[x] is to find the factorial of x.

Now, it is quite obvious that **dp[x+1] = dp[x] \* (x+1)**

```java
// Tabulated version to find factorial x.
int dp[MAXN];

// base case
int dp[0] = 1;
for (int i = 1; i< =n; i++)
{
    dp[i] = dp[i-1] * i;
}
```

## Ten Basic problem:

1.  0-1 Knapsack - 6
2.  Unbounded Knapsack - 5
3.  Fibonacci - 7
4.  Longest Comman Sequence (LCS) - 15
5.  LIS - 10
6.  Kadane's Algo - 6
7.  Matrix Chain Multiplication - 7
8.  DP on Trees - 4
9.  DP on Grid - 14
10. Others - 5

## Knapsack Problem Types:

1. Fractional Knapsack - GREEDY
2. 0/1 Knapsack - DP
3. Unbounded Knapsack - DP

## 0-1 Knapsack Problem Variations

1. Subset Sum Problem
2. Equal Sum Partition
3. Count of Subset Sum
4. Minimum Subset sum diff
5. Target Sum
6. Number of subset of given diff

## Unbounded Problem Variations

1. Rod Cutting
2. Coin Change
3. Coin Change 2(Minimum number of coins)
4. Maximum Ribbon cut

## Longest Common Sequence(LCS)

1. Longest Common String
2. Print LCS
3. Shortest Common Super sequence
4. Print SCS
5. minimum number of insettion and deletion a--> b
6. Edit Distance(Given two strings str1 and str2 and below operations that can be performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’. )
7. Largest repeating subsequence
8. Length of largest subsequence of "a" which is a substring of "b"
9. Subsequence pattern matching.
10. Count how many times "a" appear as subsequence in "b"
11. Largest Palindromic subsequence
12. largest Palindromin SubString
13. Count of Palindromic Substring.
14. Min no. of deletion in a string to make it a Palindrome
15. Min no of insertion in a string to make it a Palindrome

## Matrix Chain Multiplication (MCM)

1. MCM
2. Printing MCM
3. Evaluate exp to true/ false
4. Min/ max value of an exp
5. Palindrome Partinioning
6. Egg Dropping Problem

## DP on Trees:

1. General syntax
2. How DP can be applied on trees(Identification)
3. Diameter of BT
4. Maximum path sun from any node to any node
5. Maximum path sum from leaf to leaf
6. Diameter of N-ary tree

## Catalan Number

1. No of BSTs
2. Unlabeled tree
3. N Parenthesis(With and without letters)
4. Dyck Words
5. Mountain range
6. Path on grid
7. Convex Polygon
8. Connect Disjoint Chords
9. Ways of tringulation
