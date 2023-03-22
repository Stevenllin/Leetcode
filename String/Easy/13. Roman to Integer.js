/** method 1 
 * when the next number @num2 is bigger than @num1 then add @num2 - @num1 to result
 * 
 * 
 * Notice that increase the index @i instead of removing element from array @s
 * Time complexity O(n)
 */

var romanToInt = function(s) {
  let map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  let result = 0
  for(let i = 0; i < s.length; i++){
    let num1 = map[s[i]]
    let num2 = map[s[i+1]]
    if(num2 > num1){
      result = result + num2 - num1
      i++
    }else{
      result = result + num1
    }
  }
  return result
};