/** method 1 
 * 
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  if (n > 0) return power(x)
  if (n < 0) {
    n = Math.abs(n)
    return 1 / power(x)
  }

  function power (x) {
    if (n === 1) return x
    n--
    return x * power(x)
  }
};
