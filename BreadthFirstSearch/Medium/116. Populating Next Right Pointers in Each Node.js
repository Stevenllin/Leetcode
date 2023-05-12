/** method 1 
 * 
 */
 var connect = function(root) {
  let object = {}

  addElement(root, 0)
  
  function addElement (node, index) {
    if (!node) return
    if (!object[index]) {
      object[index] = [node]
    } else {
      object[index].push(node)
    }
    if (node.left) addElement(node.left, index+1)
    if (node.right) addElement(node.right, index+1)
  }

  for (item in object) {
    const length = object[item].length
    for (let i = 0; i < length; i++) {
      if (i === length - 1) {
        object[item][i].next = null
      } else {
        object[item][i].next = object[item][i+1]
      }
    }
  }
  
  return root
};
