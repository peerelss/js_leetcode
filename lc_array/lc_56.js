var merge = function(intervals) {
  let result = []
  if (intervals.length <= 1) { return intervals }
  intervals = intervals.sort(function(a, b) { return a[0] - b[0] })
  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0],
      end = intervals[i][1]
    while (i + 1 < intervals.length && end >= intervals[i + 1][0]) {
      end = Math.max(end, intervals[i + 1][1])
      i = i + 1
    }
    result.push([start, end])
  }
  return result
};
var insert = function(intervals, newInterval) {
  let result = []
  intervals.push(newInterval)
  intervals.sort(function(a, b) { return a[0] - b[0] })
  if (intervals.length <= 1) { return intervals }
  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0],
      end = intervals[i][1]
    while (i + 1 < intervals.length && end >= intervals[i + 1][0]) {
      end = Math.max(end, intervals[i + 1][1])
      i = i + 1
    }
    result.push([start, end])
  }
  return result
};
console.log(insert([
  [1, 4],
  [0, 5]
]))