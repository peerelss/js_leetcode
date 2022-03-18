let result = []
let r = []

function get_sum(cans, tar) {
    if (target == 0) {
        result.push(r.slice())
        print(r)
        return
    } else if (target < 0) {
        return
    }
    for (let i = 0; i < candidates.length; i++) {
        r.push(cans[i])
        get_sum(cans.slice(i, ), tar - cans[i])
        r.pop()
    }
}

var combinationSum = function(candidates, target) {
    get_sum(candidates, target)
};

console.log(combinationSum([2, 3, 6, 7], 7))