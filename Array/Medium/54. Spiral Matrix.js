/** method 1 
 * 
 */
var spiralOrder = function(matrix) {
  let left = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  let top = 0

  const result = []

  while(left <= right && top <= bottom){
    /** top */
    for(let i = left; i <= right; i++){
      result.push(matrix[top][i])
    }
    /** right */
    for(let i = top+1; i <= bottom; i++){
      result.push(matrix[i][right])
    }
    /** bottom */
    for(let i = right-1; i >= left; i--){
      if(top === bottom) break
      result.push(matrix[bottom][i])
    }
    /** left */
    for(let i = bottom-1; i > top; i--){
      if(left === right) break
      result.push(matrix[i][left])
    }
    left++
    right--
    bottom--
    top++
  }
  return result
};