/** method 1 
 * 
 * use charCodeAt method to find number of each char and minus 64 to meet the corresponding column number
 * Notice that we don't need to convert this string to array
 * 
 * Time complexity O(n)
*/

var titleToNumber = function(columnTitle) {
  let number = 0

  for(let i = 0; i < columnTitle.length; i++){
    const target = columnTitle.charCodeAt(i) - 64
    const times = columnTitle.length - i - 1
    number = number + target * Math.pow(26, times)
  }
  return number
};