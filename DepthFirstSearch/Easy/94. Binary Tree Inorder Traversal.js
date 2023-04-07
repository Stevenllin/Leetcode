/** method 1 
 * 
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