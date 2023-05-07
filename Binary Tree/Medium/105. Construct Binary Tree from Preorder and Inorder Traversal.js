/** method 1
 * 
 */
var buildTree = function(preorder, inorder) {

  return helper(0, 0, inorder.length-1)

  function helper (preIndex, inStart, inEnd) {
    if (preIndex >= preorder.length || inStart > inEnd) return null
    let index = 0
    let root = new TreeNode(preorder[preIndex])

    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root.val) {
        index = i
        break
      }
    }

    if (index > inStart) root.left = helper(preIndex+1, inStart, index-1)
    if (index < inEnd) root.right = helper(preIndex+index-inStart+1, index+1, inEnd)

    return root
  }
};
