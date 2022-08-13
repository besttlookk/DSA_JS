// !=================== Rabin-Karp Algorithm for Pattern Searching =================
// * Like the Naive Algorithm, Rabin-Karp algorithm also slides the pattern one by one.
// * But unlike the Naive algorithm, Rabin Karp algorithm matches the hash value of the pattern with the hash value of current substring of text, and if the hash values match then only it starts matching individual characters. So Rabin Karp algorithm needs to calculate hash values for following strings.
// *  # 1) Pattern itself.
// *  # 2) All the substrings of the text of length m.

// * The hash function suggested by Rabin and Karp calculates an integer value. The integer value for a string is the numeric value of a string.
// * , the numeric value is calculated using modular arithmetic to make sure that the hash values can be stored in an integer variable (can fit in memory words).
// * To do rehashing, we need to take off the most significant digit and add the new least significant digit for in hash value. Rehashing is done using the following formula.

// !=============================Links ===========
// * https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/
