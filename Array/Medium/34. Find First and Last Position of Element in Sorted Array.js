/** method 1 
 * 
 */
var searchRange = function(nums, target) {
  const firstIndex = nums.indexOf(target)

  if (firstIndex === -1) return [-1, -1]
  for(let i = firstIndex; i < nums.length; i++){
    if(nums[i] > target) return [firstIndex, i-1]
  }
};

