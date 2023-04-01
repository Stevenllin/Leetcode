/** method 1 Recursion 
 * 
 */

var isPowerOfTwo = function(n) {
  if (n === 1) return true
  return multiply(2)

  function multiply(current){
    if (current > n) return false
    if (current === n) return true
    current = current * 2
    return multiply(current)
  }
};