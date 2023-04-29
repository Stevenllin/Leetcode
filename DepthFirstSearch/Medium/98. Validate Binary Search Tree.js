/** method 1 
 * 
 */
var isValidBST = function(root) {
  return helper(root, null, null)

  function helper (node, low, high) {
    if (node === null) return true
    const value = node.val

    if ((low && low >= value) || (high && high <= value)) {
      return false
    }

    return helper(node.right, value, high) && helper(node.left, low, value)
  }
}
