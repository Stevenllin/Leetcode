/** method 1 
 * 
 */
 var invertTree = function(root) {
  if (!root || (!root.left && !root.right)) return root

  const temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)

  return root
};