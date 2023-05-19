/** method 1 
 * 
 */
var multiply = function(num1, num2) {
  const num1Length = num1.length
  const num2Length = num2.length

  let result = Array(num1Length+num2Length).fill(0)
  let carry = 0
  let value = 0
  let index = 0

  for (let i = num1Length-1; i >= 0; i--) {
    carry = 0
    for (let j = num2Length-1; j >= 0; j--) {
      index = num1Length + num2Length - i - j - 2
      value = (num1[i] * num2[j]) + carry + result[index]
      carry = Math.floor(value/10)
      result[index] = value%10
    }
    if (carry) result[index+1] = carry
  }

  while (result.length > 1 && result[result.length-1] === 0) result.pop()

  return result.reverse().join('')
};
