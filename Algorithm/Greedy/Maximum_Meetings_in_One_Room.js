// !====================Maximum Meetings in One Room

// !=======================Links
// * https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/
// * https://practice.geeksforgeeks.org/problems/maximum-meetings-in-one-room/1?page=1&category[]=Sorting&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !=========================Method ============
// * Sort all pairs(Meetings) in increasing order of second number(Finish time) of each pair.
// * Select first meeting of sorted pair as the first Meeting in the room and push it into result vector and set a variable time_limit(say) with the second value(Finishing time) of the first selected meeting.
// * Iterate from the second pair to last pair of the array and if the value of the first element(Starting time of meeting) of the current pair is greater then previously selected pair finish time (time_limit) then select the current pair and update the result vector (push selected meeting number into vector) and variable time_limit.

function maxMeetings(N, S, F) {
  const meetingArr = [];

  // * [[index, startTime, endTime]]
  for (let i = 0; i < N; i++) {
    const temp = [];
    temp.push(i + 1);
    temp.push(S[i]);
    temp.push(F[i]);
    meetingArr.push(temp);
  }

  //* array sorted based on end Time
  meetingArr.sort((a, b) => a[2] - b[2]);

  // * Endtime of first  meeting
  let endTime = meetingArr[0][2];

  //* result will contain the indices of meetings
  let result = [];

  //*first meeting will be bydefault push as array is already sorted
  result.push(meetingArr[0][0]);

  //will compare if next startTime > prev endTime

  for (let i = 1; i < meetingArr.length; i++) {
    const startTime = meetingArr[i][1];

    if (startTime > endTime) {
      result.push(meetingArr[i][0]);
      endTime = meetingArr[i][2];
    }
  }

  return result;
}

let s = [1, 3, 0, 5, 8, 5];

// Finish time
let f = [2, 4, 6, 7, 9, 9];

console.log(maxMeetings(6, s, f));
