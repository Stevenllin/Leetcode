/** method 1 
 * 
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