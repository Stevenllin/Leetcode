/** method 1
 * 
 */
var buildTree = function(inorder, postorder) {
  return helper(0, inorder.length-1, postorder.length-1)

  function helper (inStart, inEnd, postIndex) {
    if (inStart > inEnd || postIndex < 0) return null
    let root = new TreeNode(postorder[postIndex])
    let index = 0

    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root.val) {
        index = i
        break
      }
    }

    root.right = helper(index+1, inEnd, postIndex-1)
    root.left = helper(inStart, index-1, postIndex - 1 - (inEnd-index))

    return root
  }
};
