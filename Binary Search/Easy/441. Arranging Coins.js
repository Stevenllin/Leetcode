/** method 1 Binary search
 * Strategy
 * 
 * a staircase can be seen as a sorted array
 * 
 * Time complexity O(logn)
 */

var arrangeCoins = function(n) {
  let bot = 1
  let top = n

  while(bot <= top){
    const mid = Math.floor((bot + top)/2)
    const container = ((1 + mid) * mid) / 2

    if (container === n) {
      return mid
    }else if(container > n){
      top = mid - 1
    }else{
      bot = mid + 1
    }
  }
  return top
};