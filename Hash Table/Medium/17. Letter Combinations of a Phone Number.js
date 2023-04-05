/** method 1 Recursion
 *  
 * create an object @object to store numbers with corresponding characters
 * 
 * each round remove a character from @digits and add corresponding character to @string
 */

var letterCombinations = function(digits) {
  if(!digits.length) return []
  let object = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
  }
  const result = []

  combineString(digits, string)

  function combineString(digits, string){
    if(digits.length === 0){
      result.push(string)
    }else{
      const array = object[digits[0]]
      for(let i = 0; i < array.length; i++){
        combineString(digits.substr(1), string + array[i])
      }
    }
  }
};