/** 練習兩次 */

/** Method 1
 * 策略：從陣列最後一項開始遞迴，每輪數值 +1，若大於 9，重新設定為 0，反之，可以直接返回 @digits
 * 
 * 注意：若 for loop 結束，代表陣列的第一個元素亦為 9，且因加上 1，因此，需要插入一個 1 作為第一個元素
 * 
 * 時間複雜度為 O(n)
*/
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if (digits[i] > 9) {
      digits[i] = 0
    } else {
      return digits
    }
  }
  digits.unshift(1)
  return digits
}
