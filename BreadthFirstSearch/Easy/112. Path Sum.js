/** method 1 
 * 
 */
var hasPathSum = function(root, targetSum) {
  if(!root) return false
  if(targetSum - root.val === 0 && !root.left && !root.right) return true
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};