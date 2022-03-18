var jump = function(nums) {
  let n_legth = nums.length
  let re = new Array(n_legth)
  for (let i = n_legth - 1; i >= 0; i--) {
    let temp = 10000
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < n_legth) {
        if (nums[i + j] > 0) {
          temp = Math.min(temp, re[i + j] + 1)
        }
      }

      re[i] = temp
    }
  }
  console.log(nums)
  console.log(re)
};
console.log(jump([2, 3, 1, 1, 4]))
get_sum(can, tar - can[i], i + 1, [...ans], result)
ans.pop()

console.log(combinationSum2([1, 1, 6, 7, 10], 8))