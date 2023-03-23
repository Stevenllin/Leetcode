/** method 1 
 * Strategy
 * 
 * remember add the new char to the front of @string
 * fromCharCode method is to covert the number to string
 * 
 * n should minus @target for the next loop
 * 
 * Time complexity O(n)
 */

var convertToTitle = function(n) {
  let string = ''
  while(n > 0){
    let target = n%26
    if (target === 0) {
      string = 'Z' + string
      target = 26
    }else{
      string = String.fromCharCode(target + 64) + string
    }
    n = Math.floor((n-target)/26)
  }
  return string
};