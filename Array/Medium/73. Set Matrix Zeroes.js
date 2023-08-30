/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. Step 1 找出需要設定為零的 @row @column
 * 2. Step 2 根據 @row @column 重新設定 @matrix
 * 
 * 時間複雜度為：O(mn)
 */

var setZeroes = function(matrix) {
  const row = new Set()
  const column = new Set()

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0){
        row.add(i)
        column.add(j)
      }
    }
  }

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(row.has(i) || column.has(j)){
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};