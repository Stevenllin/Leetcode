/** 練習兩次 */

/** Method 1
 * 策略：將兩個陣列 @nums1 @nums2 合併後，再透過 sort 方法進行排列
 * 
 * 時間複雜度為 O(nlogn)
*/

var merge = function(nums1, m, nums2, n) {
  if (n === 0) return nums1
  if (m === 0) {
    nums2.forEach((item, index) => nums1[index] = item)
    return nums1
  }
  let index = 0
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[index]
    index++
  }
  return nums1.sort((a, b) => a - b)
};