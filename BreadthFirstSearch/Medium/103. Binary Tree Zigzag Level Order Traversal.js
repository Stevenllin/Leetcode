/** method 1 
 * 
 */
var zigzagLevelOrder = function(root) {
  const array = []
  const map = {}

  storeMap(root, 0)

  for (let index in map) {
    if (index%2 === 1) {
      array.push(map[index].reverse())
    } else {
      array.push(map[index])
    }
  }

  return array

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