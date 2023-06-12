/** 練習兩次 */

/** method 1 
 * 策略：每往下一層後，就要再 +1 並比較左右兩端，回傳較小的
 * 
 * 注意：與 104 題不同，這邊分別還需要判斷各自左右兩邊是否分別為 null。原因是因 !root 回傳為 0，因此，這邊是使用 Math.min 會取到為空的那條路徑
 * 
 * 時間複雜度為 O(n)
 */
var minDepth = function(root) {    
  if (!root) return 0
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};
