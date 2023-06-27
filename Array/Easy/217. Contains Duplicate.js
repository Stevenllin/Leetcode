/** 練習兩次 */

/** Method 1
 * 策略：透過 Set 資料結構去除重複的數值，並比較陣列 @nums 與轉換後 @numsSet 的長度大小。
*/
var containsDuplicate = function(nums) {
  const numsSet = new Set(nums)
  return nums.length !== numsSet.size
};