/** method 1 
 * 
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  
  let max = new Array()
  max.push(nums[0])
  max.push(Math.max(nums[0], nums[1]))
  
  for (let i = 2; i < nums.length; i++) {
    max[i] = Math.max(max[i-1], max[i-2] + nums[i])
  }

  return max.pop()
};
