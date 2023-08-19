/** Method 1 
 * 策略：此題為方向性的 Graph 檢查是否 cycle
 */

const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => [])
  for(let edge of edges){
    let [src, dest] = edge
    adjList[src].push(dest)
  }
  return adjList
}
  
const hasCycleDFS = (node, adjList, visited, depart) => {
  /** 設定該節點被訪問過 */  
  visited[node] = true
  /** neighbor 為節點的臨點 */
  for(let neighbor of adjList[node]){
  /** 若未訪問過臨點 */
    if(!visited[neighbor]){
      visited[neighbor] = true

      if(hasCycleDFS(neighbor, adjList, visited, depart)) return true
    }else{
      /** 若訪問過，但未離開過，代表已循環過 */
      if(depart[neighbor] === 0) return true  
    } 
  }
  /** 若跑完臨點則將節點的 depart ++ */
  depart[node]++
  return false
}

var canFinish = function(numCourses, prerequisites) {
  const adjList = buildAdjList(numCourses, prerequisites)
  const visited = {}
  const depart = Array.from({ length: numCourses }, () => 0)

  for(let vertex = 0; vertex < adjList.length; vertex++){
    /** 若未訪問過 */
    if(!visited[vertex]){
      /** 若有 cycle 則回傳 false */
      if(hasCycleDFS(vertex, adjList, visited, depart)) return false
    }
  }
  return true
};