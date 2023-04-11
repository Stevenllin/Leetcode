/** method 1 
 * 
 */
 var combinationSum = function(candidates, target) {
  const result = []

  function findResult(array = [], sum = 0, index = 0){
    if(sum > target) return
    if(sum === target) result.push(array)

    for(let i = index; i < candidates.length; i++){
      findResult([...array, candidates[i]], sum + candidates[i], i)
    }
  }
  findResult()
  return result
};
