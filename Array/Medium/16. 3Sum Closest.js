/** method 1 
 * 
 */
const threeSumClosest = function(nums, target){
  nums.sort((a, b) => a - b)

  let sum = nums[0] + nums[1] + nums[2]
  let minDifference = Math.abs(sum-target)
  let left, right

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    left = i + 1
    right = nums.length - 1
    
    while (left < right) {
      const num2 = nums[left]
      const num3 = nums[right]
      const difference = num1 + num2 + num3 - target
      if (difference > 0) {
        right--
      } else if (difference < 0) {
        left++
      } else {
        return target
      }
      let absDifference = Math.abs(difference)
      if (minDifference > absDifference) {
        minDifference = absDifference
        sum = num1 + num2 + num3
      }
    }
  }
  return sum
}
