/** method 1 
 * 
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  if (nums.length === 1) return new TreeNode(nums[0])
  
  
  const middle = Math.floor(nums.length/2)
  const root = new TreeNode(nums[middle])
  
  const leftTree = nums.slice(0, middle)
  root.left = sortedArrayToBST(leftTree)
  const rightTree = nums.slice(middle+1, nums.length)
  root.right = sortedArrayToBST(rightTree)

  return root
};
