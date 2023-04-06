/** method 1 
 * 
 */
var isSymmetric = function(root) {
  return checkIsSymmetric(root, root)
  function checkIsSymmetric(p, q){
    if (p === null && q === null) return true

    if (p === null && q !== null || p !== null && q === null) return false
  
    if (p.val !== q.val) return false
  
    return checkIsSymmetric(p.left, q.right) && checkIsSymmetric(p.right, q.left)
  }
};
