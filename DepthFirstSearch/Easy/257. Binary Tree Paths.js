/** method 1 
 * 
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
