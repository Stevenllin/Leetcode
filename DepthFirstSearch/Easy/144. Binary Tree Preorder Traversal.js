/** method 1 
 * 
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