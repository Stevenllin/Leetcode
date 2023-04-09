/** method 1 
 * 
*/
var maxSubArray = function(nums) {
  let previous = 0
  let max = - Infinity

  for(let i = 0; i < nums.length; i++){
    previous = Math.max(previous + nums[i], nums[i])
    max = Math.max(max, previous)
  }

  return max
};