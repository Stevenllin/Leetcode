/** 練習兩次 */

/** Method 1 
 * 策略：
 * 盡可能將節點往左移，利用閉包的概念，按照 inorder 的順序儲存於 @array 。
 * 
 * 時間複雜度為 O(n)
*/
var inorderTraversal = function(root) {
  if (!root) return []

  const array = []
  addElement(root)

  function addElement(root){
    if(root.left) addElement(root.left)
    array.push(root.val)
    if(root.right) addElement(root.right)
  }
  return array
};