/** method 1 Binary search 
 * Strategy
 * 
 * Notice that call api guess call once in each round of loop
 * 
 * Time complexity O(logn)
 */

var guessNumber = function(n) {
  let bot = 1
  let top = n

  while(bot <= top){
    const mid = Math.floor((bot + top)/2)
    const result = guess(mid)

    if(result === 0){
      return mid
    }else if(result === -1){
      top = mid - 1
    }else if(result === 1){
      bot = mid + 1
    }
  }
};