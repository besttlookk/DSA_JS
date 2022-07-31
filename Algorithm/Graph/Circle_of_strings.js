// !============ Find if an array of strings can be chained to form a circle

// !=================Links =============
// * https://www.geeksforgeeks.org/given-array-strings-find-strings-can-chained-form-circle/
// * https://practice.geeksforgeeks.org/problems/circle-of-strings4530/1?page=2&category[]=Graph&sortBy=submissions

// !====================Method 1=====================
// * The idea is to create a directed graph of all characters and then find if their is an eulerian circuit in the graph or not.
// * If there is an eulerian circuit, then chain can be formed, otherwise not.
// * Note that a directed graph has eulerian circuit only if in degree and out degree of every vertex is same, and all non-zero degree vertices form a single strongly connected component.

// * Following are detailed steps of the algorithm.
// * 1. Create a directed graph g with number of vertices equal to the size of alphabet.
// * 2. Do following for every string in the given array of strings.
// *  …..a) Add an edge from first character to last character of the given graph.
// * If the created graph has eulerian circuit, then return true, else return false.
