/** method 1 
 * Strategy
 * 
 * Time complexity: O(logn)
 */
var isPerfectSquare = function(num) {
  let bot = 1
  let top = num

  while(bot <= top){
    const mid = Math.floor((bot + top)/2)
    const result = mid * mid
    if(result === num){
      return true
    }else if (result > num){
      top = mid - 1
    }else{
      bot = mid + 1
    }
  }
  return false
};
