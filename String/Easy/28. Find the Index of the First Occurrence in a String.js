/** 練習一次 */

/** Method 1
 * 策略：使用 indexOf 即可快速找到對應的 index
 * 
 * 時間複雜度為 O(n)
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};