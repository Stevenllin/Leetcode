/** 練習兩次 */

/** Method 1 
 * 策略：
 * 利用閉包的概念，節點先往左移、再右移，儲存當前節點 @root val 於 @array
 * 
 * 時間複雜度為 O(n)
 */
var postorderTraversal = function(root) {
  if (!root) return []

  const array = []
  addElement(root)

  function addElement(root){
    if(root.left) addElement(root.left)
    if(root.right) addElement(root.right)
    array.push(root.val)
  }
  return array
};
