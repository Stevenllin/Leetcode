/** method 1 
 * 
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0]

  return Math.max(helper(0, nums.length-1), helper(1, nums.length))
 
  function helper (start, end) {
    const max = []

    max[start] = nums[start]
    max[start+1] = Math.max(nums[start], nums[start+1])

    for (let i = start + 2; i < end; i++) {
      max[i] = Math.max(max[i-1], max[i-2] + nums[i])
    }
    return max.pop()
  }
};

