var maxSubArray = function(nums) {
  let n_length = nums.length
  let result = new Array(n_length).fill()
  result[0] = nums[0]
  for (let i = 1; i < n_length; i++) {
    result[i] = result[i - 1] > 0 ? result[i - 1] + nums[i] : nums[i]
  }
  console.log(result)
  return Math.max(...result)
};
console.log(maxSubArray([5, 4, -1, 7, 8]))


//动态规划
/*
* 创建一个数组result[] 第n项保存以第n项为结尾的最大子数组和
  result[n]=result[n-1]>0 result[n-1]+nums[n] ,nums[n]
**/