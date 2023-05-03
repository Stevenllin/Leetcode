/** method 1
 * 
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let result = []
  let left, right

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue

    left = i + 1
    right = nums.length - 1

    while (left < right) {
      const target = nums[i] + nums[left] + nums[right]
      if (target < 0) {
        left = left + 1
      } else if (target > 0) {
        right = right - 1
      } else {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left+1]) {
          left++
        }
        while (left < right && nums[right] === nums[right-1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return result
};
