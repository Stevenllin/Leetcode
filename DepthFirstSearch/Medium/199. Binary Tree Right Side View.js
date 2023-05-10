/** method 1
 * 
 */
var rightSideView = function(root) {
  const result = []
  const object = {}

  addElement(root, 0)

  for (item in object) {
    const length = object[item].length
    result.push(object[item][length-1])
  }

  return result

  function addElement (node, index) {
    if (!node) return
    if (object[index]) {
      object[index].push(node.val)
    } else {
      object[index] = [node.val]
    }
    if (node.left) addElement(node.left, index+1)
    if (node.right) addElement(node.right, index+1)
  }
};
