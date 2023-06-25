/** 練習兩次 */

/** Method 1 
 * 策略：組成 @string 的順序是從尾至頭。每一輪遞回除以 26 取餘數，將餘數換算成對應字母後加上上一輪的 @string 。最後，數字 @n 需減去餘數 @target 後再除以 26 取近似值。
 * 
 * 注意：若餘數為零，代表對應的字母是 Z
 * 
 * 時間複雜度為 O(n)
 */
var convertToTitle = function(n) {
  let string = ''
  while(n > 0){
    let target = n%26
    if(target !== 0) string = String.fromCharCode(target+64) + string
    if(target === 0){
      string = 'Z' + string
      target = 26
    }
    n = Math.floor((n-target)/26)
  }
  return string
};