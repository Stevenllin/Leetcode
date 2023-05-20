/** method 1 
 * 
 */
var combinationSum3 = function(k, n) {
  const result = []

  helper([], 1, 0)

  return result

  function helper (array, target, sum) {
    if (array.length === k && sum === n) {
      result.push(array.slice())
      return
    }
    for (let i = target; i <= 9; i++) {
      array.push(i)
      helper(array, i+1, sum+i)
      array.pop()
    }
  }
};
