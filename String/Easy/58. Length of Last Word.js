/** method 1
 * 
 * convert string @s to array @array to remove all the space
 *  
 * Time complexity O(n)
 */
var lengthOfLastWord = function(s) {
  const array = s.split(' ').filter(item => item.length !== 0)
  return array.pop().length
};