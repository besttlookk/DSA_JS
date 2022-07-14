// !==================Circular tour ==================
class PetrolPump {
  constructor(p, d) {
    this.petrol = p;
    this.distance = d;
  }
}

/**
 * @param {PetrolPump[]} p
 * @param {number} n
 * @returns {number}
 */

// !===============Links
// * https://practice.geeksforgeeks.org/problems/circular-tour-1587115620/1/?page=1&category[]=Queue&sortBy=submissions
// * https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/

// !=================Method 1(Brute force) =============================
/*
function tour(p, n) {
  const pArr = p.p;
  const dArr = p.d;
}
*/
// !==================Method 2(Queue)========================
// * An efficient approach is to use a Queue to store the current tour.
// * We first enqueue first petrol pump to the queue, we keep enqueueing petrol pumps till we either complete the tour, or the current amount of petrol becomes negative.
// * If the amount becomes negative, then we keep dequeuing petrol pumps until the queue becomes empty.
// * Instead of creating a separate queue, we use the given array itself as a queue.
// * We maintain two index variables start and end that represent the rear and front of the queue.

function tour(p, n) {
  //* Consider first petrol pump as a starting point
  let start = 0;
  let end = 1;

  let currPetrol = p[start].petrol - p[start].distance; //* p stands for petrol and d for distance

  // * Run a loop while all petrol pumps are not visited. And we have reached first petrol pump again with 0 or more petrol
  while (end !== start || currPetrol < 0) {
    //* If current amount of petrol in truck becomes less than 0, then remove the starting petrol pump from tour
    while (currPetrol < 0 && start !== end) {
      currPetrol -= p[start].petrol - p[start].distance;

      start = (start + 1) % n; //* bcoz of circular

      //* If 0 is being considered as start again, then there is no possible solution
      if (start == 0) return -1;
    }

    currPetrol += p[end].petrol - p[end].distance;

    end = (end + 1) % n;
  }

  return start;
}
