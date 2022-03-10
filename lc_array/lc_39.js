 function get_sum(cans, tar, r, result) {

     if (tar === 0) {
         result.push(...r)
         console.log(r)
         return
     } else if (tar < 0) {
         return
     }
     for (let i = 0; i < cans.length; i++) {
         r.push(cans[i])
         get_sum(cans.slice(i, ), tar - cans[i], r, result)
         r.pop()
     }
 }

 var combinationSum = function(candidates, target) {
     let result = [],
         ans = []
     get_sum(candidates, target, ans, result)
     return result
 };

 console.log(combinationSum([2, 3, 6, 8], 7))