/** method 1 
 * 
 */
var isBalanced = function(root) {
  if (root === null || (root.left === null && root.right === null)) return true

  let left = findDeep(root.left)
  let right = findDeep(root.right)

  let diff = Math.abs(left-right) <= 1

  return diff && isBalanced(root.left) && isBalanced(root.right)
};

function findDeep (root) {
  if (!root) return 0

  let leftDeep = 1 + findDeep(root.left)
  let rightDeep = 1 + findDeep(root.right)

  return leftDeep > rightDeep ? leftDeep : rightDeep
}
