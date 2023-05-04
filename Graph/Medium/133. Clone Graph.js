/** method 1 
 * 
 */
var cloneGraph = function(node) {
  const visited = {}

  function depthFirstSearch (node) {
    if (!node) return node
    if (visited[node.val]) return visited[node.val]

    const root = new Node(node.val)
    visited[node.val] = root
    node.neighbors.forEach(item => {
      depthFirstSearch(item)
    })
    return root
  }

  return depthFirstSearch(node) 
};