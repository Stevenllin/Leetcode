/** 練習兩次 */

/** Method 1
 * 策略：以空格為 split 的目標，並將有有空格的 filter，最後，再將使用 pop 取得最後一個字串
 *  
 * 時間複雜度為 O(n)
 */
var lengthOfLastWord = function(s) {
  const array = s.split(' ').filter(item => item.length !== 0)
  return array.pop().length
};