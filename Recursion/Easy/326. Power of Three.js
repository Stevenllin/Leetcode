/** method 1 Recursion
 * 
 */
var isPowerOfThree = function(n) {
  if (n <= 0) return false
  if (n === 1) return true

  return mulitiply(3)
  
  function mulitiply(current){
    if (current > n) return false
    if (current === n) return true

    current = current * 3

    return mulitiply(current)
  }
};
