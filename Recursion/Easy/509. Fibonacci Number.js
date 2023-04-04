/** method 1
 * 
 *  Time complexity O(2^n)
*/
var fib = function(n) {
  if (n <= 1) return n
  if (n === 2) return 1

  return findResult(n - 1) + findResult(n - 2)  
};

function findResult(target){
  if (target === 0) return 0
  if (target === 1) return 1

  return findResult(target - 1) + findResult(target - 2)
}
