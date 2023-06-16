/** 練習兩次 */

/** Method 1 
 * 策略：比較每一節點的左右兩邊是否差距大於 1，若僅一個節點大於，則回傳 false
 * 
 * 注意：每一節點皆會都會被上一個節點重複計算過一次
 * 
 * 時間複雜度為：nlog(n)
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
