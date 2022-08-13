// !===============Minimize Cash Flow among a given set of friends who have borrowed money from each other

// !==========================Links ===================
// * https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/

// !=========================Method (Greedy) =========================
// * How to pick the first person? To pick the first person, calculate the net amount for every person where net amount is obtained by subtracting all debts (amounts to pay) from all credits (amounts to be paid).
// * Once net amount for every person is evaluated, find two persons with maximum and minimum net amounts. These two persons are the most creditors and debtors.
// * The person with minimum of two is our first person to be settled and removed from list.
// * Let the minimum of two amounts be x. We pay ‘x’ amount from the maximum debtor to maximum creditor and settle one person. If x is equal to the maximum debit, then maximum debtor is settled, else maximum creditor is settled.
