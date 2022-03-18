var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length
};

var carPooling = function(trips, capacity) {
  ca_tr = new Array(1001).fill(0)
  for (let i = 0; i < trips.length; i++) {
    //对于trip[i],
    for (let j = trips[i][1]; j < trips[i][2]; j++) {
      ca_tr[j] += trips[i][0]
      if (ca_tr[j] > capacity) {
        return false
      }
    }
  }
  return true
};

console.log(carPooling(
  [
    [2, 1, 5],
    [3, 5, 7]
  ], 3))