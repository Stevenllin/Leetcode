/** 練習兩次 */

/** Method 1
 * 策略：此方法是透過 @result 最後一層的 @target 推測準備加入的下一層 @array ，完成運算後再加入至 @result 。
 * 
 * 注意：運算是 @array 的值是由 @target 遞迴，每一輪 @j 的值 + 下一輪 @j + 1 的值
 * 
 * Time complexity O(n*n)
*/
var generate = function(numRows) {
  const result = []
  if(numRows >= 1) result.push([1])
  if(numRows >= 2) result.push([1, 1])

  for(let i = 2; i < numRows; i++){
    const target = result[result.length-1]
    const array = []
    array.push(1)
    for(let j = 0; j < target.length-1; j++){
      array.push(target[j]+target[j+1])
    }
    array.push(1)
    result.push(array)
  }

  return result
};

/**
 * Method 2
 * Strategy
 * 
 * this method is similar to the method 1, the main difference is this method create the memory space before creating the current layer
*/
var generate = function(numRows) {
  const result = []
  for (let i = 0; i < numRows; i++) {
    result.push(Array(i+1))

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i][j] = 1
      } else {
        result[i][j] = result[i-1][j-1] + result[i-1][j]
      }
    }
  }
  return result
};