/** method 1
 * 
 */
var findPeakElement = function(nums) {
  if (!nums.length) return -1

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let middle = Math.floor((left + right)/2)
    if (nums[middle] < nums[middle+1]) {
      left = middle
    } else {
      right = middle + 1
    }
  }
  return left
};
