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

/** Method 2
 * 策略：轉換二進制思考，1 = 1、2 = 10、4 = 100、8 = 1000，因此，判斷是否只有最高位元為 1。
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n-1)) == 0
};
