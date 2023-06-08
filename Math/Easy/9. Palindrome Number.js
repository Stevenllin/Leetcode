/** 練習一次 */

/** Method 1 
 * 策略：透過 @number 儲存目標值 @x 
 * 使用 while loop ，每一輪將 @x 移除當前個位數。將其個位數加至於當前反轉 @reverse ，此外，@reverse 要記得乘 10!
 * 
 * 注意：
 * 1. 負數為 false，個位數為 true
 * 
 * 時間複雜度為 O(n)
*/
var isPalindrome = function(x) {
  if (x < 0 || x > Math.pow(2, 31) - 1) return false
  if (x < 10) return true

  let number = x
  let reverse = 0
  while (x !== 0) {
    reverse = reverse * 10 + x % 10
    x = Math.floor(x/10)
  }
  return number === reverse
};
