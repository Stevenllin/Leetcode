/** method 1 
 * 
 */
var isValidBST = function(root) {
  return helper(root, null, null);
}

function helper(node, low, high) {
  if (node === null) return true;
  const val = node.val;
  if ((low !== null && val <= low) || (high !== null && val >= high)) 
      return false;
  return helper(node.right, val, high) && helper(node.left, low, val);
}