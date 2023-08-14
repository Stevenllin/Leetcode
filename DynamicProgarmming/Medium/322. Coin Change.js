/** 練習一次 */

/** Method 1 Time Limit Exceeded
 * 策略：透過 Recursion 方式找到最小符合組合的陣列長度 @minLength
 */

var coinChange = function(coins, amount) {
  if(amount === 0) return 0
  let minLength = Number.MAX_SAFE_INTEGER

  for(let i = 0; i < coins.length; i++){
    findResult(0, [], coins[i])
  }

  function findResult(current, array, target){
    if(current === amount){
      minLength = Math.min(minLength, array.length)
    }

    if(current > amount) return

    for(let i = 0; i < coins.length; i++){
      array.push(target)
      findResult(current + target, array, coins[i])
      array.pop()
    }
  }
  return minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength
};
