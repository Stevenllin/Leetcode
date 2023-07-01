/** 練習兩次 */

/** Method 1 
 * 策略：
 * @string 是暫存的字串
 * 遍歷樹的每個節點，若節點左右點存在 @string + 當前 @root 的 @val 與 "->"，並傳入下一個節點；若節點不存在時，要將暫存的字串 @string + 當前 @root 的 @val 並存入 @array
 * 
 * 時間複雜度為 O(n)
 */
var binaryTreePaths = function(root) {
  if(!root) return []
  
  const array = []

  addElement(root, '')

  function addElement(root, string){
    if (!root.left && !root.right) {
      array.push(string + root.val)
    }
    if(root.left) addElement(root.left, string + root.val + '->')
    if(root.right) addElement(root.right, string + root.val + '->')
  }
  return array
};
