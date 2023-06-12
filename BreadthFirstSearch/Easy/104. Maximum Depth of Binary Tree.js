/** 練習兩次 */

/** Method 1 
 * 策略：每往下一層後，就要再 +1 並比較左右兩端，回傳較大的
 * 
 * 時間複雜度為 O(n)
*/
var maxDepth = function(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
