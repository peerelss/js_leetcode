var mostFrequent = function(nums, key) {
  let re_number = [],
    re_count = []
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      if (re_number.length === 0) {
        re_number.push(nums[i + 1])
        re_count.push(1)
      } else {
        n_l = re_number.length
        for (let j = 0; j < n_l; j++) {
          if (re_number[j] === nums[i + 1]) {
            re_count[j] = re_count[j] + 1
          } else if (j + 1 === n_l) {
            //出现的新数字
            re_number.push(nums[i + 1])
            re_count.push(1)
          }
        }
      }
    }
  }
  let max_count = 0,
    max_target = 0
  for (let i = 0; i < re_count.length; i++) {
    if (max_count < re_count[i]) {
      max_count = re_count[i]
      max_target = re_number[i]
    }
  }
  return max_target
};

console.log(mostFrequent([1, 100, 1, 100, 1], 1))