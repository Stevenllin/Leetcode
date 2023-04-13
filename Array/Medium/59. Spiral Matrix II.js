/** method 1 
 * 
 */
var generateMatrix = function(n) {
  if (n === 0) return []
  if (n === 1) return [[1]]

  let left = 0
  let right = n - 1
  let bottom = n - 1
  let top = 0
  let num = 0

  const result = []
  for(let i = 0; i < n; i++){
    const temp = []
    for(let j = 0; j < n; j++){
      temp.push(0)
    }
    result.push(temp)
  }

  while(left < right){
    for(let i = left; i < right; i++){
      num++
      result[top][i] = num
    }

    for(let i = top; i < bottom; i++){
      num++
      result[i][right] = num
    }

    for(let i = right; i > left; i--){
      num++
      result[bottom][i] = num
    }

    for(let i = bottom; i > top; i--){
      num++
      result[i][left] = num
    }

    left++
    right--
    top++
    bottom--
  }
  if(n%2 === 1){
    num++
    const target = Math.floor(n/2)
    result[target][target] = num
  }
  return result
}