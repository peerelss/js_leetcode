var searchInsert = function(nums, target) {
    let n = nums.length,
        pre = 0,
        end = nums.length - 1,
        temp = Math.floor((pre + end) / 2)
    while (pre <= end) {
        if (temp == target) {
            return temp
        } else if (temp < target) {
            end = temp
            Math.floor((pre + end) / 2)
        } else {
            pre = temp
            Math.floor((pre + end) / 2)
        }
    }
    return pre + 1
};

console.log(searchInsert([1, 43, 4, 5], 5))