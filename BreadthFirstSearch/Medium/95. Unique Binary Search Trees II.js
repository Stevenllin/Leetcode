/** method 1
 * 
 */
var generateTrees = function(n) {
  return generate(1, n)

  function generate (l, r) {
    let nodes = []
    let node = null
    let left = []
    let right = []

    for (let i = l; i <= r; i++) {
      left = generate(l, i - 1)
      right = generate(i + 1, r)

      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          node = new TreeNode(i)
          node.left = left[j]
          node.right = right[k]
          nodes.push(node)
        }
      }
    }
    return nodes.length ? nodes : [null]
  }
};
