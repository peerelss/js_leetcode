var jump = function(nums) {
  let n_length = nums.length
  let re = new Array(n_length).fill(false)
  re[n_length - 1] = true
  for (let i = n_length - 1 - 1; i >= 0; i--) {
    for (let j = nums[i]; j > 0; j--) {
      if (i + j < n_length) {
        if (re[i + j]) {
          re[i] = true
          break
        }
      }
    }
  }
  console.log(nums)
  console.log(re)
  return re[0]
};
console.log(jump([3, 5, 1, 0, 0]))