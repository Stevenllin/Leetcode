/** 
 * Method 1
 * Strategy
 * 
 * this solution is divided by three section
 * if the length of @nums2 is 0 (n === 0) return nums1
 * if the length of @nums1 is 0 (m === 0) let @nums1 store each element of @nums2
 * if (m !== 0) and (n !== 0), let @nums start storing each element of @nums2 from index @index and return sorted array @nums1
 * 
 * the time complexity is O(n)
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