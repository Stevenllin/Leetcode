/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. 透過 @visited 儲存走訪過得節點 @node ，key 為 節點的當前值，value 為複製的節點
 * 2. 使用函數 @depthFirstSearch DFS 遍歷 Graph
 *    若傳入節點 @node 在 @visited 存在，代表此節點已複製過，則回傳在 @visited 的複製節點
 *    若傳入節點 @node 在 @visited 不存在，則需新創建一個與 @node 當前值相等的節點。除此之外，透過 forEach 方法將 @node neighbors 中的節點也進行複製。
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