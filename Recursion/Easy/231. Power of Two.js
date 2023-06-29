/** 練習兩次 */

/** Method 1 
 * 策略：透過 while loop，每遞回一次當前值 @current * 2
 */
var isPowerOfTwo = function(n) {
  let current = 1 
  while(current < n){
    current = current * 2
  }
  return current === n
};
