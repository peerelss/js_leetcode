var relativeSortArray = function(arr1, arr2) {
  let result_index = new Array(arr2.length).fill(0),
    no_index = new Array()
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result_index[j] = result_index[j] + 1
        break
      }
      if (j + 1 == arr2.length) {
        no_index.push(arr1[i])
      }
    }
  }
  result = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < result_index[i]; j++) {
      result.push(arr2[i])
    }
  }

  // console.log(result_index)
  // console.log(result)
  // console.log(no_index.sort(function(a, b) { return a - b }))
  return result.concat(no_index.sort(function(a, b) { return a - b }))
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 37, 9, 2, 19], [2, 1, 4, 3, 9, 6]))