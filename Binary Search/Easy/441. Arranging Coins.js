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

/** method 2 Linear search
 * 
 * Time complexity O(n)
 */

var arrangeCoins = function(n) {
  let sum = 0
  for(let i = 1; i <= n; i++){
    sum = sum + i
    if(sum === n){
      return i
    }
    if(sum > n){
      return i-1
    }
  }
};