/** method 1 
 * 
*/
var sumOfLeftLeaves = function(root) {

  return addLeaf(root, 0, false)

  function addLeaf(root, result, isLeaf){
    if(!root) return result
    if(!root.left && !root.right && isLeaf){
      result = result + root.val
    }
    result = addLeaf(root.left, result, true)
    result = addLeaf(root.right, result, false)
    return result
  }
};
