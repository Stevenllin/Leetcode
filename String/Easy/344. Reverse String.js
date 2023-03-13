/** method 1
 * Strategy
 * 
 * Swap the first number with the last number, the second number with the second-to-last number, and so on
 * 
 * Time complexity O(n)
*/
var reverseString = function(s) {
  for(let i = 0; i < Math.floor(s.length/2); i++){
    let temp = s[i]

    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
};