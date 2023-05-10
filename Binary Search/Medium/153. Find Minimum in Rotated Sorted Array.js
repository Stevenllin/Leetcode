/** method 1 
 * 
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0]

  let left = 0
  let right = nums.length - 1
  let min = nums[0]

  while (left <= right) {
    const middle = Math.floor((left+right)/2)
    const number = nums[middle]

    min = Math.min(min, number)
    min = Math.min(min, nums[left])

    if (nums[left] <= number) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return min
};
