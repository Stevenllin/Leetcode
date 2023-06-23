/** 練習兩次 */

/** Method 1
 * 策略：與 118 類似，差異是僅回傳陣列 @result 最後一個元素
 * 
*/

var getRow = function(rowIndex) {
  const result = []
  if(rowIndex >= 0) result.push([1])
  if(rowIndex >= 1) result.push([1, 1])

  for(let i = 2; i <= rowIndex; i++){
    const target = result[result.length-1]
    const array = []
    array.push(1)
    for(let j = 0; j < target.length-1; j++){
      array.push(target[j]+target[j+1])
    }
    array.push(1)
    result.push(array)
  }
  return result[rowIndex]
};

/** Method 2 advanced
 * Strategy
 * 
*/

var getRow = function(rowIndex) {
  let res = Array(rowIndex+1)
  res[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    res[i] = res[i-1] * ((rowIndex - i + 1)/i)
  }
  return res
};