/** method 1 
 * 
 */
const combinationSum2 = (candidates = [], target) => {
  const result = []

  candidates.sort((a, b) => a - b)
  function findResult(array = [], sum = 0, index = 0){
    if(sum > target) return
    if(sum === target) result.push(array)

    for(let i = index; i < candidates.length; i++){
      if (i > index && candidates[i] === candidates[i-1]) continue
      findResult([...array, candidates[i]], sum + candidates[i], i + 1)
    }
  }

  findResult()
  return result
}
