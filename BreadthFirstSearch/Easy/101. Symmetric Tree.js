/** 練習兩次 */

/** Method 1 
 * 策略：概念與第 100 題類似
 * 
 * 時間複雜度為 O(n)
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
