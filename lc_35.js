var searchInsert = function(nums, target) {
    let n = nums.length,
        pre = 0,
        end = nums.length
    while (pre < end) {
        temp = Math.floor((end + pre) / 2)
        if (nums[temp] == target) {
            return temp
        } else if (nums[temp] > target) {
            end = temp
        } else {
            pre = temp + 1
        }
    }
    return pre
};

console.log(searchInsert([1, 3], 2))