/** method 1 
 * 
 */
var maxProduct = function(nums) {
  let max = nums[0]
  let min = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let temp = max
    max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i])
    min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i])
    result = Math.max(max, result)
  }

  return result
};
