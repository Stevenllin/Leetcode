/** Method 1 
 * 策略：
 * 1. 創建兩個陣列 @pacific @atlantic ，分別代表能流進 pacific, atlantic
 * 2. 從二維陣列 @heights 四週各點出發尋找下一個點是否小於上一個點
 * 3. 比較兩陣列 @pacific @atlantic ，若其交集為 true 的 index @i @j ，則為可同時流進pacific, atlantic 的點
 * 
 * 時間複雜度為：O(n^2)
*/
var pacificAtlantic = function(heights) {
  const numRows = heights.length
  const numColumns = heights[0].length

  const pacific = Array(numRows).fill().map(() => Array(numColumns).fill(false))
  const atlantic = Array(numRows).fill().map(() => Array(numColumns).fill(false))

  for(let col = 0; col < numColumns; col++){
    helper(0, col, -Infinity, pacific)
    helper(numRows-1, col, -Infinity, atlantic)
  }
  for(let row = 0; row < numRows; row++){
    helper(row, 0, -Infinity, pacific)
    helper(row, numColumns-1, -Infinity, atlantic)
  }

  function helper(i, j, previous, ocean){
    if(i < 0 || i >= numRows || j < 0 || j >= numColumns || heights[i][j] < previous || ocean[i][j]){
      return
    }
    ocean[i][j] = true

    helper(i+1, j, heights[i][j], ocean)
    helper(i-1, j, heights[i][j], ocean)
    helper(i, j+1, heights[i][j], ocean)
    helper(i, j-1, heights[i][j], ocean)
  }

  const result = []

  for(let i = 0; i < numRows; i++){
    for(let j = 0; j < numColumns; j++){
      if(pacific[i][j] === true && atlantic[i][j] === true) result.push([i, j])
    }
  }
  return result
};