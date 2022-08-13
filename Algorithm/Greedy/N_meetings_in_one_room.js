// !============N meetings in one room / Activity Selection ===================

// !===================================Links ===============
// * https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1?page=1&category[]=Greedy&curated[]=7&sortBy=submissions

// !==================Solution =========
function maxMeetings(start, end, n) {
  const meetings = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    meetings.push([start[i], end[i]]);
  }

  // * Sort meetting according to the end time
  meetings.sort((a, b) => a[1] - b[1]);

  let prevEndTime = meetings[0][1];

  for (let i = 1; i < n; i++) {
    if (meetings[i][0] > prevEndTime) {
      count++;
      prevEndTime = meetings[i][1];
    }
  }

  return count;
}

console.log(maxMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9], 6));
