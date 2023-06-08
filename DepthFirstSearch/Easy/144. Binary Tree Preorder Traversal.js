/** 練習兩次 */

/** Method 1 
 * 策略：
 * 利用閉包的概念，先儲存當前節點 @root val 於 @array ，節點往左移、再右移
 * 
 * 時間複雜度為 O(n)
*/
var preorderTraversal = function(root) {
  if(!root) return []

  const array = []
  addElement(root)

  function addElement(root){
    array.push(root.val)
    if(root.left) addElement(root.left)
    if(root.right) addElement(root.right)
  }
  return array
};