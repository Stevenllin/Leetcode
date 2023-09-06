/** 練習三次 */

/** Method 1
 * 策略：將 @s @t 先轉為陣列排序後，再轉為字串後進行比較
 * 
 * 時間複雜度為 O(nlogn)
 */
 var isAnagram = function(s, t) {
  const sortedS = [...s].sort().join('')
  const sortedT = [...t].sort().join('')

  return sortedS === sortedT
};
