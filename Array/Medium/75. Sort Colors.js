/** method 1 
 * 
 */
var sortColors = function(nums) {
  let j = 0
  let k = nums.length - 1
  for (let i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      swap(i, j++)
    }
    if (nums[i] === 2) {
      swap(i--, k--)
    }
  }

  return nums

  function swap (a, b) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
};