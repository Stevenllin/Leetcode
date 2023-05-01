/** method 1 
 * 
 */
var levelOrderBottom = function(root) {
  const array = []
  const map = {}

  storeMap(root, 0)

  for (let index in map) {
    array.push(map[index])
  }

  return array.reverse()

  function storeMap (node, level) {
    if (!node) return

    if (!map[level]) {
      map[level] = [node.val]
    } else {
      map[level].push(node.val)
    }

    storeMap(node.left, level+1)
    storeMap(node.right, level+1)
  }
};