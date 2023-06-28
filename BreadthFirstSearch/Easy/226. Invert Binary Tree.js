/** 練習兩次 */

/** Method 1 
 * 策略：觀察結果，發現每一層的左右分支交換這。
 * 
 * 注意：因需先改變 @root 左分支，因此，記得 @temp 先暫存 @root 左分支
 */
var invertTree = function(root) {
  if(!root) return root

  const temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)
  
  return root
};
