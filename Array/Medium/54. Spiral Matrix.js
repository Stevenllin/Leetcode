/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. 設定 上下左右 index @top @bottom @left @right
 * 2. 每一輪透過順時針將數字傳遞至 @array ，要將 @top @left 加 1、@bottom @right 減一，直到 @top 大於 @bottom 、 @left 大於 @right
 * 
 * 備註：在下方、左方，要加入 if 判斷條件，因為在上方、右方時，@top 加、 1 @right 減一
 * 
 * 時間複雜度為：
 */
var spiralOrder = function(matrix) {
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  const array = []

  while(top <= bottom && left <= right){
    /** left to right */
    for(let i = left; i <= right; i++){
      array.push(matrix[top][i])  
    }
    top++
    /** top to bottom */
    for(let i = top; i <= bottom; i++){
      array.push(matrix[i][right])  
    }
    right--
    /** right to left */
    for(let i = right; i >= left; i--){
      if(top > bottom) break
      array.push(matrix[bottom][i])
    }
    bottom--
    /** bottom to top */
    for(let i = bottom; i >= top; i--){
      if(left > right) break
      array.push(matrix[i][left])   
    }
    left++
  }
  return array
};