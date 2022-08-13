// !================Check if it is possible to survive on Island
// * N – The maximum unit of food you can buy each day.
// * S – Number of days you are required to survive.
// * M – Unit of food required each day to survive.

// !=======================Links ============
// * https://www.geeksforgeeks.org/survival/
// * https://practice.geeksforgeeks.org/problems/check-if-it-is-possible-to-survive-on-island4922/1?page=1&category[]=Greedy&curated[]=7&sortBy=submissions

// !=====================Solution 1=================
// * In this problem, the greedy approach of buying the food for some consecutive early days is the right direction.
// * If we can survive for the first 7 days then we can survive any number of days for that we need to check two things
// * -> Check whether we can survive one day or not.
// * -> (S >= 7) If we buy food in the first 6 days of the week and we can survive for the week i.e. total food we can buy in a week (6*N) is greater then or equal to total food we require to survive in a week (7*M) then we can survive.
// * If any of the above conditions are not true then we can’t survive else

// * the equation can be derived as :
// * the amount of food that we buy should >= the amount of food required to survive.—-> equation 1
// * the amount of food that we buy =  number of times we buy (days) * amount of food that we get for one time buy (N)
// * the amount of food required to survive = the number of days we need to survive(S) * amount of food required on each day(M)
// * now from our equation 1:

// days * N >= S * M

// hence, days = ceil (S * M) / N

function minimumDays(S, N, M) {
  // If we can not buy at least a week
  // supply of food during the first
  // week OR We can not buy a day supply
  // of food on the first day then we
  // can't survive.
  if ((N * 6 < M * 7 && S > 6) || M > N) return -1;
  else {
    const foodRequiredToServive = M * S;

    let days = parseInt(foodRequiredToServive / N);

    // * If still some food is required: Buy one more time
    if (foodRequiredToServive % N !== 0) days++;

    return days;
  }
}
