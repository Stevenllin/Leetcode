/** 
 * Method 1
 * Strategy
 * 
 * @index index of current target number in @digits
 * 
 * first of all check the units digit is 9 or not
 * if the units digit is not equal to 9 then add one and return the array @digits
 * 
 * if the units digit is 9 then keep adding one to relative target number from the last number until current target number is not 9
 * and if the @index is equal to -1, which means the first number in @digits add one so we need to unshift(1) the array
 * 
 * Notice that because the number is possibly bigger than Max number in Javascript. So we can not solve this by using Number
 * 
*/

var plusOne = function(digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1]++
    return digits
  } else {
    let index = digits.length - 1
    while(digits[index] === 9) {
      digits[index] = 0
      index--
    }
    if (index === -1) {
      digits.unshift(1)
    } else {
      digits[index] = digits[index] + 1
    }
    return digits
  }
};