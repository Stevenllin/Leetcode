/** 練習兩次 */

/** Method 1 
 * 策略：
 * 題目的 arguements 是給予兩個 tree @p @q ，同時比較兩個 tree 的 left or right
 * 
 * True： 
 * 1. @p and @q 同時為 null
 * 
 * False：
 * 1. @p and @q 非同時為 null（不對稱）
 * 2. @p @q 當前的 val 不相等時
 * 
 * 注意：
 * 判斷兩個 tree 是否相同，只要有一節點是錯誤的，就不是相等， 因此，return 兩個函數 @isSameTree 需以 && 連接
 * 
 * 時間複雜度為 O(n)
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true

  if (p === null && q !== null || p !== null && q === null) return false
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
