var minimalKSum = function(nums, k) {
  nums = nums.sort(function(a, b) { return a - b })
  console.log(nums)
  let total_length = nums.length + k
  let result = new Array(k)
  for (let i = 0; i < k; i++) {
    result[i] = i + 1
  }
  for (let j = 0; j < result.length; j++) {
    if (nums[j] <= result.length && result[nums[j] - 1] > 0) {
      result.push(result.length + 1)
      result[nums[j] - 1] = 0
    }
  }
  console.log(result.length)
  console.log(result)

  return result.reduce(function(prev, cur) {
    return prev + cur;
  }, 0)
}; //14

// console.log(minimalKSum([1, 1, 4, 25, 10, 25], 2))


var minimalKSum2 = function(nums, k) {
  let result_nums = [],
    temp = k
  nums = nums.sort(function(a, b) { return a - b })
  multi = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= temp) {
      if (i > 0 && nums[i] == nums[i - 1]) {
        multi = multi + 1
        continue
      }
      temp = temp + 1
    }
  }
  result = temp * (temp + 1) / 2
  console.log(multi)
  for (let i = 0; i < temp - k + multi; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    result = result - nums[i]
  }
  return result
}
var countPairs = function(nums, k) {
  result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.round(nums[i] * nums[j] % k) == 0) {
        result = result + 1
      }
    }
  }
  return result
};
var minimumRemoval = function(beans) {
  beans = beans.sort(function(a, b) { return a - b })
  b_l = beans.length
  sum_beans = beans.reduce(function(pre, cur) {
    return pre + cur
  });
  min_result = sum_beans
  for (let i = 0; i < b_l; i++) {
    min_result = Math.min(min_result, sum_beans - nums[i] * (b_l - i))
  }
  return min_result
};
var maxProfit = function(prices) {
  //动态规划 题目类似与求最长递增子序列类似。只不过求解的不是长度，而是首位之差。并且不要求连续。
  // 对于第 n 天，价格如果小于n+1, 则这次交易收益为 p[n+1]-p[n],然后累加到 收益 profile[n+1]上
  if (prices.length <= 1) { return 0 }
  let max_p = 0
  for (let i = prices.length - 2; i >= 0; i--) {
    max_p = max_p + (prices[i] < prices[i + 1] ? prices[i + 1] - prices[i] : 0)
  }
  return max_p
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))