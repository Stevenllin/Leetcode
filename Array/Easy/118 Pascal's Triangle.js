/** 
 * Method 1
 * Strategy
 * 
 * @previousNumber is the previous layer of array
 * 
 * the first and second layer return the answer directly
 * if the numRows are bigger than 2 then create this layer according to the @previousNumber and push it to the @result for the next layer
 * 
 * Time complexity O(n*n)
*/
var generate = function(numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]

  const result = [[1], [1, 1]]
  for (let i = 1; i < numRows-1; i++) {
    const previousNumber = result[i]
    const target = [1]

    for (let i = 0; i < previousNumber.length - 1; i++) {
      target.push(previousNumber[i] + previousNumber[i+1])
    }
    target.push(1)
    result.push(target)
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