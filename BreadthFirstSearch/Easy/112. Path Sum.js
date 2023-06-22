/** 練習兩次 */

/** Method 1 
 * 策略：每次遞迴檢查當前目標值 @targetSum - 當前節點 @root 的 val 是否為零
 * 
 * 注意：由於，僅需有一條路徑滿足即可回傳 true，因此，回傳兩函數連接使用 ||
 * 
 * 時間複雜度為 O(n)
 */
 var hasPathSum = function(root, targetSum) {
  if(!root) return false
  if(!root.left && !root.right && targetSum - root.val === 0) return true

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};