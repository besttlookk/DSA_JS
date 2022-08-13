// !=================Maximum trains for which stoppage can be provided

// !=====================Links ==================
// * https://practice.geeksforgeeks.org/problems/bb917adb320fba36a9d68fd64c83ef322632a094/1
// * https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/

// !======================Greedy Method ===============
// * If we start with a single platform only then we have 1 platform and some trains with their arrival time and departure time and we have to maximize the number of trains on that platform.
// * This task is similar as Activity Selection Problem. So, for n platforms we will simply make n-vectors and put the respective trains in those vectors according to platform number.
// *  After that by applying greedy approach we easily solve this problem.
// * Note : We will take input in form of 4-digit integer for arrival and departure time as 1030 will represent 10:30 so that we may handle the data type easily.
// * Also, we will choose a 2-D array for input as arr[m][3] where arr[i][0] denotes arrival time, arr[i][1] denotes departure time and arr[i][2] denotes the platform for ith train.

// * n = no. of platforms
// * m = no, of trains
function maxStop(n, m, trains) {
  // * Divide the trains on the basis of platform
  // * for each platform arrange the train on the basis of dept time
  const platforms = new Array(n);
  let count = 0;

  for (let i = 0; i < n; i++) {
    platforms[i] = [];
  }

  for (let i = 0; i < m; i++) {
    const platformNo = arr[i][2];
    platforms[platformNo - 1].push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    const platform = platforms[i];
    platform.sort((a, b) => a[1] - b[1]);
    let prevDeptTime = -1;

    for (let train of platform) {
      if (train[0] > prevDeptTime) {
        count++;
        prevDeptTime = train[1];
      }
    }
  }
  return count;
}
const arr = [
  [1000, 1030, 1],
  [1010, 1020, 1],
  [1025, 1040, 1],
  [1130, 1145, 2],
  [1130, 1140, 2],
];

console.log(maxStop(2, 5, arr));
