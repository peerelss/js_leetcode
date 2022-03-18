var twoSum = function(nums, target) {
  let indexes = [];
  nums_length = nums.length
  for (let i = 0; i < nums_length - 1; i++) {
    for (let j = i + 1; j < nums_length; j++) {
      if (nums[i] + nums[j] === target) {
        indexes.push(i)
        indexes.push(j)
        return indexes
      }
    }
  }
};
console.log(twoSum([0, 2, 5, 5, 11], 10))