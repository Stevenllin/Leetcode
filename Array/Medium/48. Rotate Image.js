/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. 水平交換
 * 2. 左對角線交換
 * 
 * 時間複雜度為：O(mn)
 */
var rotate = function(matrix) {
  for(let i = 0; i < Math.floor(matrix.length/2); i++){
    const temp = [...matrix[i]]
    matrix[i] = [...matrix[matrix.length-1-i]]
    matrix[matrix.length-1-i] = temp
  }

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(i > j){
        const temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
  }
};